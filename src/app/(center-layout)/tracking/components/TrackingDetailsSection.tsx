import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Search } from "lucide-react";
import Image from "next/image";

const TrackingDetailsSection = () => (
  <div className="p-6 bg-gray-50  shadow rounded-lg space-y-4">
    {/* search section */}
    <div className="bg-white p-2 rounded-md border border-gray-300 w-full ">
      <div className="flex items-center gap-2">
        <Search className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="123456789"
          className="w-full outline-none text-sm text-gray-700 placeholder:text-gray-400"
        />
      </div>
    </div>

    {/* tracking code card */}
    <div className="bg-white p-2 rounded-md border border-gray-300 w-full text-black">
      <div className="flex flex-col items-start gap-2">
        <h1>Tracking Code:123456</h1>
        <p className="text-gray-400">
          Enter the tracking number for real-time updates on it’s status and
          delivery date..{" "}
          <span className="text-primary font-semibold">see more</span>
        </p>
      </div>
    </div>
 
    <Image
      src="/Images/tracking/Frame.svg"
      alt="Map"
      className="w-full  object-cover rounded"
      height={120}
      width={120}
    />
    <div className="bg-white p-4 rounded">
      <div className="flex flex-row gap-40 mt-4">
        <div className="flex flex-col space-y-3">
          <p className="text-gray-600">28 Jan 2025 | 11:18 PM </p>
          <p className="text-gray-600">Id: 12434564</p>
          <p className="text-gray-600">Invoice: 12434564 </p>
          <p className="text-gray-600">Tracking Code: 12434564</p>
        </div>
        <div className="flex flex-col">
          <p className="text-black text-lg">Weight: 0.6kg</p>
          <p className="text-primary mt-4 text-2xl">COfddD: $26</p>

          <div className="mt-4 px-4 py-2 rounded font-medium text-sm flex items-center bg-amber-100 text-amber-800">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
            </span>
            Pending
          </div>
        </div>
      </div>

      <div className="flex flex-row items-start gap-20 mt-10">
        {/* First Column */}
        <div className="flex flex-col space-y-3">
          <div className="flex gap-3">
            <Image
              src="/Images/tracking/cart.svg"
              alt="cart"
              height={20}
              width={20}
            />
            <p className="text-black">Sendor Info</p>
          </div>
          <p className="text-gray-600">Name: David Hook</p>
          <p className="text-gray-600">Address: 123 Kangaroo</p>
          <p className="text-gray-600">Street, Sydney, NSW</p>
          <p className="text-gray-600">2000, Australia</p>
          <p className="text-gray-600">Phone: 0412 345 678</p>
        </div>

        {/* Vertical Divider */}
        <div className="w-0.5 h-52 bg-prevention " />
        {/* Second Column */}
        <div className="flex flex-col space-y-3">
          <div className="flex gap-3">
            <Image
              src="/Images/tracking/gift.svg"
              alt="cart"
              height={20}
              width={20}
            />
            <p className="text-black">Receiver Info</p>
          </div>
          <p className="text-gray-600">Name: Jack Qiunn</p>
          <p className="text-gray-600">Address: 123 Kangaroo</p>
          <p className="text-gray-600">Street, Sydney, NSW</p>
          <p className="text-gray-600">2000, Australia</p>
          <p className="text-gray-600">Phone: 0412 345 678</p>
        </div>
      </div>
    </div>

    {/* rate this rider */}

    <div className="bg-white p-4 ">
      <div className="flex flex-row gap-52">
        <div className="flex flex-col space-y-3">
          <div className="flex flex-col space-y-6">
            <div className="flex gap-3">
              <Image
                src="/Images/tracking/car.svg"
                alt="cart"
                height={20}
                width={20}
              />
              <p className="text-black">Assigned To</p>
            </div>
          </div>
          <p className="text-gray-600">Name: Jack Qiunn</p>
          <p className="text-gray-600">Phone: 0412 345 678</p>
        </div>

        <div className="flex flex-col space-y-3 mt-8">
          <div className="flex items-center gap-x-2 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4" />
            ))}
            <span className="text-black">5.0</span>
          </div>
          <p className="text-primary font-semibold">Rate This Rider</p>
        </div>
      </div>
    </div>
  </div>
);
export default TrackingDetailsSection;
