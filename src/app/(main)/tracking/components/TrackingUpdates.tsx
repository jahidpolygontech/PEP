import { Circle } from "lucide-react";
import Image from "next/image";

export default function Timeline() {
  const timelineItems = [
    {
      time: "11:18 AM",
      date: "28 Jan",
      title: "Order Received",
      description: "Delivery man successfully deliver product to Jack man.",
      image: "/Images/tracking/Group.svg",
      iconColor: "bg-secondary mb-10",
    },
    {
      time: "11:18 AM",
      date: "28 Jan",
      title: "",
      description: "Your order is being processed in warehouse",
      iconColor: "bg-primary mb-10",
    },
    {
      time: "11:18 AM",
      date: "28 Jan",
      title: "",
      description: "Your order is ready to be shipped from warehouse",
      iconColor: "bg-primary mb-12",
    },
    {
      time: "11:18 AM",
      date: "28 Jan",
      title: "Order Received",
      description: "Delivery man successfully deliver product to Jack man.",
      image: "/Images/tracking/Group.svg",
      iconColor: "bg-primary mb-12",
    },
    {
      time: "11:18 AM",
      date: "28 Jan",
      title: "",
      description: "Your order is being processed in warehouse",
      iconColor: "bg-primary mb-12",
    },
    {
      time: "11:18 AM",
      date: "28 Jan",
      title: "",
      description: "Your order is being processed in warehouse",
      iconColor: "bg-primary mb-12",
    },
    {
      time: "11:18 AM",
      date: "28 Jan",
      title: "",
      description: "Your order is being processed in warehouse",
      iconColor: "bg-primary mb-12",
    },
    {
      time: "11:18 AM",
      date: "28 Jan",
      title: "Successfully Delivered",
      description: "Delivery man successfully deliver product to Jack man.",
      image: "/Images/tracking/Green.svg",
      iconColor: "bg-green-500",
    },
  ];

  return (
    <section>
      <h1 className="text-2xl text-black mb-2">Tracking Update</h1>

      <div className="max-w-2xl mx-auto bg-gray-50 rounded p-4">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-26 bottom-10 top-2 w-0.5 bg-primary" />

          {timelineItems.map((item, index) => (
            <div
              key={index}
              className="relative flex items-start mb-16 last:mb-0"
            >
              {/* Time & Date */}
              <div className="flex flex-col items-center w-20 mr-4">
                <span className="text-sm font-medium text-gray-700">{item.time}</span>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>

              {/* Icon/Image */}
              <div
                className={`relative z-10 flex items-center justify-center rounded-full w-4 h-4 mr-4 mt-2 ${
                  item.image ? "bg-gray-300" : item.iconColor
                }`}
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt="Timeline icon"
                    width={18}
                    height={18}
                    className="object-contain z-10"
                  />
                ) : (
                  <Circle className="w-2 h-2 text-white fill-current" />
                )}
              </div>

              {/* Title & Description */}
              <div className="flex-1 pt-0.5">
                {item.title && (
                  <h3
                    className={`font-semibold mb-1 text-2xl ${
                      item.title === "Successfully Delivered"
                        ? "text-green-600"
                        : "text-gray-800"
                    }`}
                  >
                    {item.title}
                  </h3>
                )}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
