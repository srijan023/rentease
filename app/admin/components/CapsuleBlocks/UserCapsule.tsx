import Avatar from "@/app/components/Avatar";
import CapsuleItem from "./CapsuleItem";
import CapsuleContainer from "./Container";
import Button from "@/app/components/Button";

type UserInformationType = {
  name: string;
  id: string;
  email: string;
  contact: string;
};
export default function UserCapsule({ user }: { user: UserInformationType }) {
  return (
    <CapsuleContainer>
      <div className="col-span-2 justify-center rounded-l-3xl flex items-center">
        <CapsuleItem>
          <Avatar />
        </CapsuleItem>
        <div className="font-semibold">
          <CapsuleItem>{user.name}</CapsuleItem>
        </div>
      </div>
      <div className="text-gray-600">
        <CapsuleItem>{user.id}</CapsuleItem>
      </div>

      <div className="text-gray-600">
        <CapsuleItem>{user.email}</CapsuleItem>
      </div>

      <div className="text-gray-600">
        <CapsuleItem>{user.contact}</CapsuleItem>
      </div>

      <div className="rounded-r-3xl">
        <CapsuleItem>
          <Button
            classes="rounded-2xl text-primary-10 border border-black"
            label="Message"
          />
        </CapsuleItem>
      </div>
    </CapsuleContainer>
  );
}
