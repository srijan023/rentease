import Avatar from "../Avatar";
import Tag from "../Tag";
import CapsuleItem from "./CapsuleItem";
import CapsuleUserDetails from "./CapsuleUserDetails";
import CapsuleContainer from "./Container";

export default function MaintenanceCapsule() {
  return (
    <CapsuleContainer>
      <td className="rounded-l-3xl">
        <CapsuleItem>
          <Avatar image="" />
        </CapsuleItem>
      </td>
      <td>
        <CapsuleItem>
          <CapsuleUserDetails userName="Ren Gill" />
        </CapsuleItem>
      </td>
      <td className="text-gray-600">
        <CapsuleItem>
          2024 August 12
        </CapsuleItem>
      </td>
      <td className="text-gray-600">
        <CapsuleItem>
          Leaking Faucet problem
        </CapsuleItem>
      </td>
      <td>
        <CapsuleItem>
          <Tag title={"On Progress"} type="normal" />
        </CapsuleItem>
      </td>
      <td className="rounded-r-3xl">
        <CapsuleItem>
          <Tag title={"Urgent"} type="danger" />
        </CapsuleItem>
      </td>
    </CapsuleContainer>
  )
}
