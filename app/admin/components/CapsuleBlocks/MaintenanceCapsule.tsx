import Avatar from "@/app/components/Avatar";
import CapsuleItem from "./CapsuleItem";
import CapsuleUserDetails from "./CapsuleUserDetails";
import CapsuleContainer from "./Container";
import Tag from "@/app/components/Tag";

export default function MaintenanceCapsule() {
  return (
    <CapsuleContainer>
      <div className="flex gap-3 col-span-2 justify-center">
        <div className="rounded-l-3xl">
          <CapsuleItem>
            <Avatar />
          </CapsuleItem>
        </div>
        <div>
          <CapsuleItem>
            <CapsuleUserDetails userName="Ren Gill" />
          </CapsuleItem>
        </div>
      </div>
      <div className="text-gray-600">
        <CapsuleItem>2024 August 12</CapsuleItem>
      </div>
      <div className="text-gray-600">
        <CapsuleItem>Leaking Faucet problem</CapsuleItem>
      </div>
      <div>
        <CapsuleItem>
          <Tag title={"On Progress"} type="normal" />
        </CapsuleItem>
      </div>
      <div className="rounded-r-3xl">
        <CapsuleItem>
          <Tag title={"Urgent"} type="danger" />
        </CapsuleItem>
      </div>
    </CapsuleContainer>
  );
}
