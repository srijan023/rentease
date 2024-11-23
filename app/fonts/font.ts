import { Poppins, Abril_Fatface } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const abrilFatface = Abril_Fatface({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-abrilFatface",
  display: "swap",
});

export { poppins, abrilFatface };
