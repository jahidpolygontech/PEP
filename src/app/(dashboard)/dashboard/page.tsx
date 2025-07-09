import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center px-4 py-3">

        <div className="flex items-center gap-3 cursor-pointer">
          <span className="text-primary font-semibold">Shipments</span>
          <Image
            src="/Images/dashboard/arrow-right.svg"
            alt="arrow"
            className="w-4 h-4"
            height={20}
            width={20}
          />
          <span className="text-gray-500">Create</span>
        </div>

        {/* Search bar */}
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Search with Con-note ID/ Reference ID..."
            className="w-full border border-gray-300 rounded-md text-gray-500 text-sm pl-10 pr-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Image
              src="/Images/dashboard/search-normal.svg"
              alt="search"
              className="w-5 h-5"
              height={20}
              width={20}
            />
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Page;
