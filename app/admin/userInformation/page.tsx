"use client";
// import { userList } from "./data";
import HeaderSection from "../components/HeaderSection";
import Button from "@/app/components/Button";
import UserCapsule from "../components/CapsuleBlocks/UserCapsule";
import { useEffect, useState } from "react";
import axios from "axios";

type UserType = {
  name: string;
  id: string;
  email: string;
  phone: string;
};

export default function UserInformation() {
  const [userList, setUserList] = useState<UserType[]>([]);
  useEffect(() => {
    axios.get("http://localhost:3000/api/admin/getUsers").then((res) => {
      if (res.data.success) {
        console.log(res.data.data);
        setUserList(res.data.data);
      }
    });
  }, []);

  return (
    <div className=" mx-auto">
      <div>
        <HeaderSection title={"Clients"}>
          <div>
            <Button classes="bg-primary-10 text-white" label={"Message All"} />
          </div>
        </HeaderSection>
      </div>
      <div
        className={`grid grid-cols-6 text-center font-semibold text-secondary-40 py-4 ${userList.length == 0 ? "hidden" : "block"}`}
      >
        <div className="col-span-2">Full Name</div>
        <div>House</div>
        <div>Email</div>
        <div>Phone Number</div>
      </div>
      <div className={`${userList.length == 0 ? "block" : "hidden"}`}>
        No data present
      </div>
      <div className="flex flex-col gap-2">
        {userList.map((user) => {
          return <UserCapsule key={user.id} user={user} />;
        })}
      </div>
    </div>
  );
}
