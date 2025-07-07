const faqs = [
    "How can I track my package?",
    "How do I return a package?",
    "Where is my delivery subscription?"
  ]
  
  const FAQSection = () => (
    <div className="bg-white p-6 shadow rounded-lg">
      <h4 className="text-lg font-semibold text-gray-800 mb-4">FAQ</h4>
      <ul className="space-y-3">
        {faqs.map((faq, idx) => (
          <li key={idx} className="cursor-pointer text-blue-600 hover:underline">{faq}</li>
        ))}
      </ul>
    </div>
  )
  export default FAQSection;
  