import { IoFilterSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
export default function HeaderSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-10 flex justify-between items-center">
      <h1 className="text-3xl font-header">{title}</h1>
      <div className="px-2 rounded-full text-xl py-2 border border-primary-10 flex items-center">
        <p className="text-2xl">
          <IoSearch />
        </p>
        <input
          type="text"
          className="px-2 bg-background placeholder:text-black focus:outline-none text-sm"
          id="search"
          placeholder="Search"
        />
      </div>
      <div className="flex gap-5 items-center">
        <p className="text-2xl font-bold">
          <IoFilterSharp />
        </p>
        <p>Filter</p>
      </div>
      {children}
    </div>
  );
}
