import PrimaryBtn from "@/components/button/PrimaryButton";
import Image from "next/image";

const travelData = [
  {
    date: "Monday, Arkansas",
    time: "09:25 AM",
    activity: "Package Delivered",
    place: "Arkansas, USA",
  },
  {
    date: "Monday, Arkansas",
    time: "08:13 AM",
    activity: "Dispatched from NG",
    place: "Lagos, NG",
  },
  {
    date: "Sunday, Lagos",
    time: "07:12 AM",
    activity: "Shipped",
    place: "Lagos, NG",
  },
];

const TravelHistoryTable = () => (
  <div className="bg-white p-6 shadow rounded-lg">
    <div className="flex justify-between items-center mb-4">
      <h4 className="text-lg font-semibold text-gray-800">Travel History</h4>
      {/* <button className="btn btn-outline">Download PDF</button> */}
      <PrimaryBtn variant="outline" size="lg">
        <span className="flex items-center justify-center gap-x-2">
          <Image
            src="/Images/tracking/document-download.svg"
            alt="Download"
            height={16}
            width={16}
          />
          Download PDF
        </span>
      </PrimaryBtn>
    </div>
    <table className="w-full table-auto text-sm text-left">
      <thead>
        <tr className="text-gray-500 border-b">
          <th className="py-2">Date</th>
          <th className="py-2">Time</th>
          <th className="py-2">Activity</th>
          <th className="py-2">Place</th>
        </tr>
      </thead>
      <tbody>
        {travelData.map((row, idx) => (
          <tr key={idx} className="border-b text-gray-700">
            <td className="py-2">{row.date}</td>
            <td className="py-2">{row.time}</td>
            <td className="py-2">{row.activity}</td>
            <td className="py-2">{row.place}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
export default TravelHistoryTable;
