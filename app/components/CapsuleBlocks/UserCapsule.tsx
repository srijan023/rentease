import Avatar from "../Avatar";
import Button from "../Button";
import CapsuleItem from "./CapsuleItem";
import CapsuleContainer from "./Container";

type UserInformationType = {
  name: string;
  id: string;
  email: string;
  phone: string;
};
export default function UserCapsule({ user }: { user: UserInformationType }) {
  return (
    <CapsuleContainer>
      <div className="rounded-l-3xl flex items-center">
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
        <CapsuleItem>{user.phone}</CapsuleItem>
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
