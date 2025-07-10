"use client";
import PrimaryBtn from "@/components/button/PrimaryButton";
import FAQItem from "@/components/faq/FaqItem";

const faqs = [
  {
    question: "What does my shipment status mean?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Can I request proof of delivery?",
    answer:
      "Yes, you can request proof of delivery by contacting our customer support or through your account dashboard.",
  },
  {
    question: "What should I do if I can’t track my shipment?",
    answer:
      "If you can’t track your shipment, please verify the tracking number or contact customer support for assistance.",
  },
  {
    question: "How can I update my delivery address?",
    answer:
      "To update your delivery address, please visit your account settings or contact our support team before the shipment is dispatched.",
  },
];

const FAQSection = () => {
  return (
    <div className="w-full py-6 border-b border-t mt-8">
      <h4 className="text-xl font-semibold text-accent mb-8 text-start uppercase text-tertiary">
        FAQ
      </h4>
      <div className="flex flex-col gap-4">
        {faqs.map(({ question, answer }, index) => (
          <FAQItem key={index} question={question} answer={answer} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-6 mt-8">
        <PrimaryBtn variant="outline" size="lg">
          View All FAQs
        </PrimaryBtn>

        <PrimaryBtn variant="outline" size="lg">
          Customer Support
        </PrimaryBtn>
      </div>
    </div>
  );
};

export default FAQSection;
