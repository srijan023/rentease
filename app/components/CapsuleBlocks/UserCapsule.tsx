import Avatar from "../Avatar";
import Button from "../Button";
import CapsuleItem from "./CapsuleItem";
import CapsuleContainer from "./Container";

export default function UserCapsule() {
  return (
    <CapsuleContainer>
      <td className="rounded-l-3xl">
        <CapsuleItem>
          <Avatar />
        </CapsuleItem>
      </td>
      <td className="font-semibold">
        <CapsuleItem>Renn Gill</CapsuleItem>
      </td>
      <td className="text-gray-600">
        <CapsuleItem>Villa Something</CapsuleItem>
      </td>
      <td className="text-gray-600">
        <CapsuleItem>randomUser@email.com</CapsuleItem>
      </td>
      <td className="text-gray-600">
        <CapsuleItem>9876543210</CapsuleItem>
      </td>
      <td className="rounded-r-3xl">
        <CapsuleItem>
          <Button classes="rounded-2xl border border-black" label="Message" />
        </CapsuleItem>
      </td>
    </CapsuleContainer>
  );
}
