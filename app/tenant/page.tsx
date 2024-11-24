import Container from "../components/Container";
import InformationCard from "../components/Information/InformationCard";
import TaggedContents from "../components/Information/TaggedContents";
import { GoBell } from "react-icons/go";
import { LiaFileContractSolid } from "react-icons/lia";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineInfo } from "react-icons/ai";
import { BsTools } from "react-icons/bs";
import { RiExchangeDollarFill } from "react-icons/ri";
import PropertyInfo from "../components/PropertyInfo";
import PropertyCard from "../components/PropertyCard";

export default function TenantDashboard() {
  return (
    <Container>
      <div className="flex flex-col gap-16">
        <h2 className="text-3xl font-header">Hello, Adam</h2>
        <div className="grid grid-cols-3 grid-rows-2 gap-x-5 gap-y-3">
          <div className="col-start-1 row-span-2">
            <InformationCard
              icon={BsTools}
              title="Maintenance Requests"
              type="info"
            >
              <TaggedContents
                title="Plumbing"
                description="2024 August 23"
                tagType="normal"
                tagTitle="On Progress"
              />
              <TaggedContents
                title="Regular Maintenance"
                description="2024 August 23"
                tagType="danger"
                tagTitle="Not Seen"
              />
              <TaggedContents
                title="HAVC"
                description="2024 August 23"
                tagTitle="Done"
              />
            </InformationCard>
          </div>

          <div className="col-start-2">
            <InformationCard
              icon={LiaFileContractSolid}
              short={true}
              title="Lease Information"
              type="info"
            >
              <div className="my-2 flex flex-col gap-3">
                <div className="flex justify-between mx-4 items-center">
                  <div className="text-lg">Last Renewed</div>
                  <div className="text-gray-500 text-sm">2024 August 23</div>
                </div>
                <div className="flex justify-between mx-4 items-center">
                  <div className="text-lg">New Due Date</div>
                  <div className="text-gray-500 text-sm">2024 August 23</div>
                </div>
                <div className="flex justify-between mx-4">
                  <div className="flex items-center gap-3 w-1/2">
                    <span className="text-secondary-10 font-extrabold text-2xl">
                      3
                    </span>{" "}
                    <span className="text-gray-500 text-sm">
                      months remaining
                    </span>
                  </div>
                  <div className="flex w-[25%] justify-between">
                    <div className="cursor-pointer">
                      <div className="p-2 w-max bg-secondary-10 rounded-full ">
                        <FaPlus className="text-xl text-white" />
                      </div>
                    </div>
                    <div className="cursor-pointer">
                      <div className="p-2 w-max bg-secondary-10 rounded-full">
                        <AiOutlineInfo className="text-xl text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </InformationCard>
          </div>

          <div className="bg-secondary-10 col-start-2 row-start-2 rounded-3xl px-4 py-3 flex flex-col">
            <h1 className="text-xl font-extrabold text-white text-center">
              Quick Payment
            </h1>
            <div className="text-white flex flex-col justify-center items-center flex-1">
              <BsTools className="text-3xl" />
              <p className="text-center mt-2">
                This service is currently under development and will be
                available on future updates
              </p>
            </div>
          </div>

          <div className="col-start-3 row-start-1 row-span-2">
            <InformationCard
              icon={RiExchangeDollarFill}
              title="Transaction History"
              type="info"
            >
              <div className="mx-4 text-secondary-10 flex flex-col justify-center items-center flex-1">
                <BsTools className="text-3xl" />
                <p className="text-center mt-2">
                  This service is currently under development and will be
                  available on future updates
                </p>
              </div>
            </InformationCard>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 h-[27rem]">
          <div className="col-span-2 row-span-1 ">
            <PropertyInfo />
          </div>
          <div>
            <InformationCard
              icon={GoBell}
              title="Latest Notifications"
              type="info"
            >
              <TaggedContents
                title="Rent Remainder for September"
                description="2024 August 23"
                tagged={false}
              />
              <TaggedContents
                title="Maintenance Notification Letter"
                description="2024 August 23"
                tagged={false}
              />
              <TaggedContents
                title="Lease Renewal Letter"
                description="2024 August 23"
                tagged={false}
              />
            </InformationCard>
          </div>
        </div>

        <div>
          <h2 className="text-4xl text-secondary-10 font-header">
            You may also like
          </h2>
        </div>

        <div className="mb-20">
          <PropertyCard />
        </div>
      </div>
    </Container>
  );
}
