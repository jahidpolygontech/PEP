import { Search } from "lucide-react";
import Image from "next/image";

const TrackingDetailsCard = () => (
    <div className="p-6 bg-gray-50  shadow rounded-lg space-y-4">
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
      <Image src="/Images/tracking/Frame.svg" alt="Map" className="w-full  object-cover rounded" height={120} width={120} />
      <div>
        <h4 className="font-semibold text-sm text-gray-600">Tracking Number</h4>
        <p className="text-blue-600 font-bold text-lg">CODC 526</p>
      </div>
      <div className="flex flex-col space-y-1 text-sm text-gray-700">
        <p>From: Lagos, NG</p>
        <p>To: Arkansas, USA</p>
        <p>Estimated Arrival: Monday, 03/01/2025</p>
      </div>
    </div>
  )
  export default TrackingDetailsCard;
  