import NavigationItem from "./NavigationItem";
import { RxDashboard } from "react-icons/rx";
import { BsTools } from "react-icons/bs";
import { LuUsers2 } from "react-icons/lu";
import { LuHome } from "react-icons/lu";
import { RiExchangeDollarFill } from "react-icons/ri";

export default function NavigationPanel() {
  return (
    <div className="px-6 border-r-2 border-secondary-30">
      <div className="flex py-5 flex-col gap-2 h-full">
        <NavigationItem label="Dashboard" link="/admin">
          <RxDashboard />
        </NavigationItem>
        <NavigationItem label="Clients" link="/admin/userInformation">
          <LuUsers2 />
        </NavigationItem>
        <NavigationItem label="Units" link="/admin/propertyInformation">
          <LuHome />
        </NavigationItem>
        <NavigationItem label="Work Orders" link="/admin/maintenanceRequests">
          <BsTools />
        </NavigationItem>
        <NavigationItem label="Transactions" link="#">
          <RiExchangeDollarFill />
        </NavigationItem>
      </div>
    </div>
  );
}
