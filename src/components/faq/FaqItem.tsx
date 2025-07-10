"use client";
import Image from "next/image";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => setIsActive((prev) => !prev);

  return (
    <div
      className="w-full px-4 rounded-lg cursor-pointer bg-tertiary"
      onClick={toggle}
    >
      <div className="flex items-center w-full gap-4">
        <button className="py-4 flex justify-center items-center" aria-expanded={isActive} aria-controls="faq-answer">
          <Image
            src="/Images/tracking/add-square.svg"
            alt={isActive ? "Collapse" : "Expand"}
            width={22}
            height={22}
          />
        </button>
        <div className="text-black lg:text-base text-sm">{question}</div>
      </div>
      {isActive && (
        <div id="faq-answer" className="mt-2 text-gray-700 text-sm px-10 pb-4">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
