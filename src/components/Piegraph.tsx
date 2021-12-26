import React from "react";

export default function Piegraph() {
  return (
    <div className="w-96 h-96 text-blue-500 rounded-2xl bg-gray-500 p-2">
      <div className="flex flex-row justify-between">
        <h2 className="text-lx pb-2">Piegraph stats</h2>
      </div>
      <div className=" m-auto w-40 h-40 bg-gray-200 rounded-full"></div>
      <div className="pl-5 pt-2">
        <div className="flex flex-row items-center">
          <div className="w-4 h-4 mr-2 bg-blue-200"></div>
          <p>Closed</p>
        </div>
        <div className="flex flex-row items-center">
          <div className="w-4 h-4 mr-2 bg-red-200"></div>
          <p>In progress</p>
        </div>
        <div className="flex flex-row items-center">
          <div className="w-4 h-4 mr-2 bg-yellow-200"></div>
          <p>Open</p>
        </div>
        <div className="flex flex-row items-center">
          <div className="w-4 h-4 mr-2 bg-orange-200"></div>
          <p>Resolved</p>
        </div>
      </div>
    </div>
  );
}
