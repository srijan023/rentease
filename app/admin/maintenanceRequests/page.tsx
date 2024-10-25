import MaintenanceCapsule from "@/app/components/CapsuleBlocks/MaintenanceCapsule";

export default function MaintenanceRequests() {
  return (
    <div>
      <table className="rounded-md w-3/4 mx-auto outline-0 border-spacing-y-4 border-separate capsule-table">
        <thead className="text-gray-600">
          <tr>
            <th></th>
            <th>Reported By</th>
            <th>Created Date</th>
            <th>Title</th>
            <th>Status</th>
            <th>Urgency</th>
          </tr>
        </thead>
        <tbody>
          <MaintenanceCapsule />
          <MaintenanceCapsule />
        </tbody>
      </table>

    </div>
  )
}
