import PrimaryBtn from "@/components/button/PrimaryButton";
import Image from "next/image";

const TrackingHeader = () => (
  <>
    <div className="p-4 rounded-lg flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col">
        <div className="flex items-center gap-6">
          <h2 className="text-lg text-black ">
            Tracking ID:{" "}
            <span className="font-semibold text-primary">123456789012</span>
          </h2>
          <Image
            src="/Images/tracking/edit.svg"
            alt="edit"
            height={24}
            width={24}
          />
          <Image
            src="/Images/tracking/copy.svg"
            alt="copy"
            height={24}
            width={24}
          />
          <Image
            src="/Images/tracking/star.svg"
            alt="star"
            height={24}
            width={24}
            className="bg-blue"
          />
        </div>
      </div>

      <div className="flex">
        <PrimaryBtn
          type="submit"
          className="w-full bg-primary flex items-center justify-center gap-2"
          size="sm"
        >
          <span className="inline-flex items-center gap-2">
            View Shipment Details
            <Image
              src="/Images/tracking/arrow-right.svg"
              alt="arrow"
              height={24}
              width={24}
            />
          </span>
        </PrimaryBtn>
      </div>
    </div>

    {/* Action Buttons */}
    <div className="flex flex-col bg-gray-50 px-6 py-2">
      <div className="flex items-center gap-8 mt-2">
        {/* Status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-quaternary">
            <Image
              src="/Images/tracking/arrow-snake.svg"
              alt="Status Icon"
              width={24}
              height={24}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-tertiary font-medium">Status</span>
            <span className="text-sm text-black font-medium mt-1">
              On the Way
            </span>
          </div>
        </div>
        {/* Delivery ETA */}
        <div className="flex flex-col">
          <span className="text-xs text-tertiary font-medium">
            Delivery ETA
          </span>
          <span className="text-sm font-medium text-black mt-1">
            Monday 01/01/25
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-3">
        <div className="space-y-3 space-x-[30px] mt-3">
          <PrimaryBtn
            variant="secondary"
            size="lg"
            startIcon="/Images/tracking/edit.svg"
            iconAlt="Proof of Delivery"
            label="Proof of Delivery"
          />
          <PrimaryBtn
            variant="secondary"
            size="lg"
            startIcon="/Images/tracking/messages.svg"
            iconAlt="Chat with Us"
            label="Chat with Us"
          />
          <PrimaryBtn
            variant="secondary"
            size="lg"
            startIcon="/Images/tracking/24-support.svg"
            iconAlt="Customer Support"
            label="Customer Support"
          />
          <PrimaryBtn
            variant="secondary"
            size="lg"
            startIcon="/Images/tracking/notification.svg"
            iconAlt="Get Notification"
            label="Get Notification"
          />
        </div>
      </div>
    </div>
  </>
);

export default TrackingHeader;
