const updates = [
    { time: '09:25 AM', date: 'Mon, 03 Jan', title: 'Order Received', location: 'Arkansas, USA' },
    { time: '08:13 AM', date: 'Mon, 03 Jan', title: 'Order Received', location: 'Lagos, NG' },
    { time: '07:12 AM', date: 'Sun, 02 Jan', title: 'Successfully Delivered', location: 'Arkansas, USA' }
  ]
  
  const TrackingUpdates = () => (
    <div className="p-6 bg-white shadow rounded-lg">
      <h4 className="font-semibold text-lg text-gray-800 mb-4">Tracking Updates</h4>
      <div className="space-y-4 border-l-2 border-blue-600 pl-4">
        {updates.map((item, idx) => (
          <div key={idx} className="relative pl-4">
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-blue-600 rounded-full border-2 border-white"></div>
            <p className="text-sm font-medium text-gray-800">{item.title}</p>
            <p className="text-xs text-gray-500">{item.time} • {item.date}</p>
            <p className="text-xs text-gray-400">{item.location}</p>
          </div>
        ))}
      </div>
    </div>
  )
  export default TrackingUpdates;
  