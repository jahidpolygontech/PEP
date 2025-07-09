"use client";

import { useState } from "react";
import * as Select from "@radix-ui/react-select";
import Image from "next/image";
import PrimaryBtn from "@/components/button/PrimaryButton";

interface TravelHistoryItem {
  date: string;
  time: string;
  activity: string;
  place: string;
}

const travelData: TravelHistoryItem[] = [
  {
    date: "Sunday, 01/09/2024",
    time: "3:55 AM",
    activity: "Shipment information sent to Centurion",
    place: "",
  },
  {
    date: "Monday, 01/10/2024",
    time: "4:55 AM",
    activity: "On Centurion Vehicle for delivery",
    place: "XYZ Place",
  },
  {
    date: "",
    time: "5:55 AM",
    activity: "Delivered",
    place: "ABC Place",
  },
  {
    date: "Tuesday, 01/11/2024",
    time: "6:55 AM",
    activity: "Delivered",
    place: "MNO Place",
  },
  {
    date: "Wednesday, 01/12/2024",
    time: "7:55 AM",
    activity: "Delivery Expectation",
    place: "QRST Place",
  },
  {
    date: "Monday, 01/01/2025",
    time: "3:55 AM",
    activity: "On Centurion vehicle for delivery",
    place: "Place Name",
  },
];


const CheckIcon = () => <span className="text-green-600">✓</span>;

export default function TravelHistory() {
  const [timeZone, setTimeZone] = useState("Local Scan Time");

  return (
    <div className="mx-auto p-6 bg-gray-50 mb-[515px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-tertiary">Travel History</h1>
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

      {/* Time Zone Selector */}
      <div className="mb-5">

        <Select.Root value={timeZone} onValueChange={setTimeZone}>
          <Select.Trigger
            aria-label="Time zone"
            className="inline-flex items-center justify-between px-4 py-3 gap-4 border border-gray-300 rounded-md bg-white text-gray-900 cursor-pointer select-none"
          >
            <Select.Value />
            <Select.Icon >
            <Image src="/Images/tracking/down.svg" alt="down" width={20} height={20}/>
            </Select.Icon>
          </Select.Trigger>

          <Select.Portal>
            <Select.Content className="overflow-hidden rounded-md border border-gray-300 bg-white shadow-md">
              <Select.ScrollUpButton className="flex items-center justify-center h-6 bg-gray-100 cursor-default">
               {/* this is for up */}
              </Select.ScrollUpButton>
              <Select.Viewport className="p-2">
                {["Local Scan Time", "UTC", "EST"].map((zone) => (
                  <Select.Item
                    key={zone}
                    value={zone}
                    className="relative flex items-center px-8 py-2 text-gray-900 rounded-md select-none cursor-pointer data-[highlighted]:bg-gray-200"
                  >
                    <Select.ItemText className="font-bold"> <span className="text-gray-600">Time zone</span> {zone}</Select.ItemText>
                    <Select.ItemIndicator className="absolute left-4 inline-flex items-center">
                      <CheckIcon />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.Viewport>

              <Select.ScrollDownButton className="flex items-center gap-6 justify-center h-6 bg-gray-100 cursor-default">
              <Image src="/Images/tracking/down.svg" alt="down" width={20} height={20}/>
              </Select.ScrollDownButton>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-12 gap-0 text-sm  text-gray-600 font-bold border border-gray-200 bg-white">
        <div className="col-span-3 border-r border-gray-200 p-4">Date</div>
        <div className="col-span-5 border-r border-gray-200 p-4">Activity</div>
        <div className="col-span-4 p-4">Place</div>
      </div>

      {/* Travel History Items */}
      <div className="border-x border-b border-gray-200 divide-y divide-gray-100 bg-white">
        {travelData.map((item, index) => (
          <div key={index} className="grid grid-cols-12">
            {/* Date Column */}
            <div className="col-span-3 border-r border-gray-200 p-4 ">
              {item.date && (
                <div className="text-sm text-gray-900 font-normal">
                  {item.date}
                </div>
              )}
            </div>

            {/* Activity Column */}
            <div className="col-span-5 border-r border-gray-200 p-3 z-10">
              <div className="flex items-start gap-3 relative">
                {/* Timeline Dot + Line */}
                <div className="flex flex-col items-center">
                  {/* vertical line */}
                  {index > 0 && (
                    <div className="absolute top-[-60px] left-[4px] bottom-10 w-px bg-black z-10" />
                  )}
                  {/* dot */}
                  <div className="w-2 h-2 bg-black rounded-full z-10 mt-1" />
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-1">{item.time}</div>
                  <div className="text-sm text-gray-900">{item.activity}</div>
                </div>
              </div>
            </div>

            {/* Place Column */}
            <div className="col-span-3 p-4">
              {item.place && (
                <div className="text-sm text-gray-900">{item.place}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>


  );
}
