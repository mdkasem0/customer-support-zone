import React from "react";
import leftImg from "../assets/left.png";
import rightImg from "../assets/right.png"; // make sure you actually have right.png

const StatsSection = ({resolveTask,processTask}) => {
  const stats = [
    { title: "In-Progress", value:processTask, gradient: "bg-gradient-to-r from-purple-500 to-violet-500" },
    { title: "Resolved", value: resolveTask, gradient: "bg-gradient-to-r from-green-500 to-teal-500" },
  ];

  return (
    <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${stat.gradient} relative rounded-xl p-6 text-white flex flex-col items-center justify-center shadow-lg overflow-hidden`}
        >
          {/* Background pattern */}
          <img
            src={leftImg}
            alt="pattern-left"
            className="absolute top-0 right-0 w-24 opacity-20"
          />
          <img
            src={rightImg}
            alt="pattern-right"
            className="absolute top-0 right-0 w-24 opacity-20"
          />

          {/* Stat Content */}
          <div className="relative z-10 text-center">
            <h2 className="text-lg font-medium">{stat.title}</h2>
            <p className="text-4xl font-bold mt-2">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
