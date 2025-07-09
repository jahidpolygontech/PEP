import Image from 'next/image';
import React from 'react';

const Page = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center px-4 py-3">
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 cursor-pointer">
          <span className="text-primary font-semibold">Shipments</span>
          <Image src="/Images/dashboard/arrow-right.svg" alt="arrow" width={16} height={16} />
          <span className="text-gray-500 ">Create</span>
        </div>

        {/* Search bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search with Con-note ID/ Reference ID..."
            className="border border-gray-300 text-gray-600 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Image src="/Images/dashboard/search-normal.svg" alt="search" width={20} height={20} />
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Page;
