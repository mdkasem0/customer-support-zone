import React from "react";
import { FaRegCalendarDays } from "react-icons/fa6";

const TicketCard = ({ data, ticketsClickHandler }) => {
  // Priority color mapping
  const priorityColor = {
    High: "text-red-600 font-semibold",
    Medium: "text-yellow-600 font-semibold",
    Low: "text-green-600 font-semibold",
  };

  // Status style mapping
  const statusColor = {
    Open: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Resolved: "bg-gray-100 text-gray-700",
  };

  return (
    <div
      onClick={() => ticketsClickHandler(data)}
      className="p-5 cursor-pointer bg-white rounded-2xl shadow-md flex flex-col gap-3 border border-gray-100 
                 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:border-indigo-200"
    >
      {/* Title + Status */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-800 tracking-tight">
          {data.title}
        </h3>
        <span
          className={`flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full ${statusColor[data.status]}`}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              data.status === "Open"
                ? "bg-green-600"
                : data.status === "Pending"
                ? "bg-yellow-600"
                : "bg-gray-500"
            }`}
          ></span>
          {data.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
        {data.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-gray-500 mt-3">
        <span className={priorityColor[data.priority]}>
          {data.priority.toUpperCase()} PRIORITY
        </span>
        <span className="font-medium text-gray-700">{data.customer}</span>
        <div className="flex items-center gap-1">
          <FaRegCalendarDays className="text-gray-400" />
          {new Date(data.createdAt).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
