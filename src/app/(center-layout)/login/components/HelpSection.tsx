import PrimaryBtn from "@/components/button/PrimaryButton"
import Image from "next/image"

export function HelpSection() {
  return (
    <div className="mt-8 p-4 bg-gray-50 rounded-lg">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <Image src="/Images/login/contacticon.svg" alt="" height={50} width={50} />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-900 mb-1">Need Help?</h3>
          <p className="text-xs text-gray-600 mb-3">
            Our customer support team is here to help you with account setup, service inquiries, login issues, or any
            other questions you might have.
          </p>
          <PrimaryBtn variant="outline" size="xs">
            Customer Support
          </PrimaryBtn>
        </div>
      </div>
    </div>
  )
}
