import PrimaryBtn from "@/components/button/PrimaryButton";
import Image from "next/image";

const faqs = [
  "What does my shipment status mean?",
  "Can I request proof of delivery?",
  "What should I do if I can’t track my shipment?",
  "How can I update my delivery address?",
];

const FAQSection = () => {
  return (
    <div className="w-full py-6  border-b border-t mt-8" >
      <h4 className="text-xl font-semibold text-accent mb-8 text-start uppercase text-tertiary">
        FAQ
      </h4>
      <div className="flex flex-col gap-4">
        {faqs.map((question, index) => (
          <div
            key={index}
            className="w-full px-4 rounded-lg cursor-pointer bg-tertiary"
          >
            <div className="flex items-center w-full gap-4">
              <button className="py-4 flex justify-center items-center">
                <Image
                  src="/Images/tracking/add-square.svg"
                  alt="Collapse"
                  width={22}
                  height={22}
                />
              </button>
              <div className="text-black lg:text-base text-sm">{question}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-6 mt-8">
        <PrimaryBtn
          variant="outline"
          size="lg"
        >
          view All FAQs
        </PrimaryBtn>

        <PrimaryBtn
          variant="outline"
          size="lg"
        >
          Customer Support
        </PrimaryBtn>
       
      </div>
    </div>
  );
};

export default FAQSection;
