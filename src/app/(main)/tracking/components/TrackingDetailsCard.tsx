import Image from "next/image";

const TrackingDetailsCard = () => (
    <div className="p-6 bg-white shadow rounded-lg space-y-4">
      <Image src="/map-placeholder.png" alt="Map" className="w-full h-40 object-cover rounded" height={120} width={120} />
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
  