import MaintenanceCapsule from "../components/CapsuleBlocks/MaintenanceCapsule";
import HeaderSection from "../components/HeaderSection";

export default function MaintenanceRequests() {
  return (
    <div className="min-h-[90vh] mx-auto">
      <div>
        <HeaderSection title={"Maintenance Requests"}>
          <div className="hidden"></div>
        </HeaderSection>
      </div>
      <div className="grid grid-cols-6 text-center font-semibold text-secondary-40 py-4">
        <div className="col-span-2">Reported By</div>
        <div>Created Date</div>
        <div>Title</div>
        <div>Status</div>
        <div>Urgency</div>
      </div>
      <div className="flex flex-col gap-2">
        <MaintenanceCapsule />
      </div>
    </div>
  );
}
