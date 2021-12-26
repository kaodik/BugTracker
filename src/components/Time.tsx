import React from "react";

export default function TimeSheet() {
  return (
    <div className="w-full min-h-screen text-blue-500 rounded-2xl bg-gray-500 p-2">
      <div className="flex flex-row justify-between">
        <h2 className="text-lx pb-2">TimeSheet</h2>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mt-1 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>{" "}
          Add Time
        </div>
      </div>
      <div className="flex flex-row text-center min-h-screen p-4 ">
        <div className="bg-gray-400 border-gray-500 border-r-2 w-52  rounded-l-xl">
          <div className="bg-gray-300 rounded-tl-xl">Sun</div>
          <div className="rounded-xl h-20 bg-gray-200 m-2"></div>
        </div>
        <div className="bg-gray-400 border-gray-500 border-r-2 w-52 ">
          <div className="bg-gray-300 ">Mon</div>
          <div className="rounded-xl h-20 bg-gray-200 m-2"></div>
        </div>
        <div className="bg-gray-400 border-gray-500 border-r-2 w-52 ">
          <div className="bg-gray-300 ">Tue</div>
          <div className="rounded-xl h-20 bg-gray-200 m-2"></div>
        </div>
        <div className="bg-gray-400 border-gray-500 border-r-2 w-52 ">
          <div className="bg-gray-300 ">Wen</div>
          <div className="rounded-xl h-20 bg-gray-200 m-2"></div>
        </div>
        <div className="bg-gray-400 border-gray-500 border-r-2 w-52 ">
          <div className="bg-gray-300 ">Thu</div>
          <div className="rounded-xl h-20 bg-gray-200 m-2"></div>
        </div>
        <div className="bg-gray-400 border-gray-500 border-r-2 w-52 ">
          <div className="bg-gray-300 ">Fri</div>
          <div className="rounded-xl h-20 bg-gray-200 m-2"></div>
        </div>
        <div className="bg-gray-400 border-gray-500 w-52 rounded-tr-xl rounded-r-xl">
          <div className="bg-gray-300 rounded-tr-xl">Sat</div>
          <div className="rounded-xl h-20 bg-gray-200 m-2"></div>
        </div>
      </div>
    </div>
  );
}
