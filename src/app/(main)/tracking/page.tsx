import FAQSection from "./components/FAQSection";
import TrackingDetailsCard from "./components/TrackingDetailsCard";
import TrackingHeader from "./components/TrackingHeader";
import TrackingUpdates from "./components/TrackingUpdates";
import TravelHistoryTable from "./components/TravelHistoryTable";

// app/tracking/[id]/page.tsx
export default function TrackingPage() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 space-y-10">
      <TrackingHeader />

      <div className="grid md:grid-cols-2 gap-6">
        <TrackingDetailsCard />
        <TrackingUpdates />
      </div>

      <FAQSection />
      <TravelHistoryTable />
    </div>
  )
}
