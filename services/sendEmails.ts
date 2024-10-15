import nodemailer from "nodemailer"

export async function sendEmail(token: string, email: string, emailType: string) {

  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_NAME,
      pass: process.env.EMAIL_PASSWORD,
    }
  });

  let mailOptions
  if (emailType == "VERIFICATION") {
    mailOptions = {
      from: process.env.EMAIL_NAME,
      to: email,
      subject: "Verify you email for RentEase",
      text: `Verify your email by copying and pasting this link to your browser,
http://localhost:3000/api/users/verifyEmail/${token}`,
      html: `<h1>Email Verification</h1><br><p>RentEase needs to confirm your email address is still valid.
Please click the link below to confirm you received this mail.</p><br>
<a href="http://localhost:3000/api/users/verifyEmail/${token}">Verify Email</a><br>
<p>If you're worried about this email being legitimate, you can contact the landlord directly from the contacts
details provided.</p><br>
<p>Please do not reply to this email, as it was sent from an unattended mailbox.</p>
`
    }
  }

  if (!mailOptions) {
    return {
      success: false,
      error: "Invalid email type provided"
    }
  }

  const mailResponse = await transport.sendMail(mailOptions)

  if (mailResponse.response.includes("OK")) {
    return {
      success: true,
      message: "Email sent successfully"
    }
  }
  else {
    return {
      success: false,
      error: "Email could not be sent"
    }
  }
}

