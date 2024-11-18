import Image from "next/image";
import TableElement from "./TableElement";
import Avatar from "@/app/components/Avatar";
import Tag from "@/app/components/Tag";

type PropertyCardProps = {
  property: {
    unit: string;
    location: string;
    expiry: string | null;
    area: string;
    price: string;
    status: string;
    leasedBy: string | null;
    image: string;
  };
};
export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className=" flex flex-col border-2 p-3 bg-white border-secondary-80 rounded-xl">
      <div className="h-[10rem] w-[20rem]">
        <Image
          height={500}
          width={500}
          className="h-full w-full rounded-xl object-cover "
          src={
            "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Home sweet home"
        />
      </div>
      <div>
        <table className="my-5 border-collapse border-y w-full">
          <tbody className="border-collapse">
            <TableElement title={"Location"} value={property.location} />
            <TableElement title={"Price"} value={property.price} />
            <TableElement title={"Area"} value={property.area} />
            {property.leasedBy ? (
              <TableElement title={"Expiry"} value={property.expiry} />
            ) : (
              ""
            )}
          </tbody>
        </table>
      </div>
      {property.leasedBy ? (
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div>
              <Avatar />
            </div>
            <div>
              <p className="text-secondary-50">Leased By:</p>
              <p>Ren Gill</p>
            </div>
          </div>
          <div>
            <Tag type="normal" title={"Leased"} />
          </div>
        </div>
      ) : (
        <div className="flex-grow flex items-center justify-center">
          <Tag type="danger" title={"Not leased"} />
        </div>
      )}
    </div>
  );
}
