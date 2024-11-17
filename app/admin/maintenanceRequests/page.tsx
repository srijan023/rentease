import MaintenanceCapsule from "@/app/components/CapsuleBlocks/MaintenanceCapsule";
import HeaderSection from "../components/HeaderSection";

export default function MaintenanceRequests() {
  return (
    <div className="max-w-[1000px] min-h-[90vh] mx-auto">
      <div>
        <HeaderSection title={"Maintenance Requests"}>
          <div className="hidden"></div>
        </HeaderSection>
      </div>
      <div className="grid grid-cols-5 text-center font-semibold text-secondary-40 py-4">
        <div>Reported By</div>
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
