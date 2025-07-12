import FAQSection from "./components/FAQSection";
import TrackingDetailsSection from "./components/TrackingDetailsSection";
import TrackingHeader from "./components/TrackingHeader";
import TrackingUpdates from "./components/TrackingUpdates";
import TravelHistoryTable from "./components/TravelHistoryTable";
 
export default function TrackingPage() {
  return (
    <div className="max-w-screen-xl mx-auto space-y-5">
      <TrackingHeader />

      <div className="grid md:grid-cols-2 gap-6">
        <TrackingDetailsSection />
        <TrackingUpdates />
      </div>
      <FAQSection />
      <TravelHistoryTable />
    </div>
  )
}
