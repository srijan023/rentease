import { userList } from "./data";
import HeaderSection from "../components/HeaderSection";
import Button from "@/app/components/Button";
import UserCapsule from "../components/CapsuleBlocks/UserCapsule";

export default function UserInformation() {
  return (
    <div className="max-w-[1000px] min-h-[90vh] mx-auto">
      <div>
        <HeaderSection title={"Clients"}>
          <div>
            <Button classes="bg-primary-10 text-white" label={"Message All"} />
          </div>
        </HeaderSection>
      </div>
      <div className="grid grid-cols-5 text-center font-semibold text-secondary-40 py-4">
        <div>Full Name</div>
        <div>House</div>
        <div>Email</div>
        <div>Phone Number</div>
      </div>
      <div className="flex flex-col gap-2">
        {userList.map((user) => {
          return <UserCapsule key={user.id} user={user} />;
        })}
      </div>
    </div>
  );
}
