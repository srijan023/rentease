import UserCapsule from "@/app/components/CapsuleBlocks/UserCapsule";

export default function UserInformation() {
  return (
    <div>
      <table className="rounded-md w-3/4 mx-auto outline-0 border-spacing-y-4 border-separate capsule-table">
        <thead className="text-gray-600">
          <tr>
            <th></th>
            <th>Full Name</th>
            <th>House</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <UserCapsule />
          <UserCapsule />
        </tbody>
      </table>

    </div>
  )
}

