import React from "react";

export default function Bugfilter() {
  return (
    <div className="w-full text-blue-500 rounded-2xl bg-gray-500 p-2">
      <div>
        <div>
          <h2 className="text-lx pb-2">Bugfliter</h2>
        </div>
        <div className="flex flex-row">
          <label htmlFor="">Status</label>{" "}
          <div className="text-base pl-2 pt-1">
            <button className="bg-blue-200 rounded-xl pl-2 pr-2 ">All</button>
            <button className="bg-blue-200 rounded-xl pl-2 pr-2 ">Open</button>
            <button className="bg-blue-200 rounded-xl pl-2 pr-2 ">
              In Progress
            </button>
            <button className="bg-blue-200 rounded-xl pl-2 pr-2 ">
              Resolved
            </button>
            <button className="bg-blue-200 rounded-xl pl-2 pr-2 ">
              Closed
            </button>
            <button className="bg-blue-200 rounded-xl pl-2 pr-2 ">
              Not Closed
            </button>
          </div>
          <span className="ml-auto bg-blue-200 text-right text-base p-2 rounded-full ">
            <button className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Report Bug
            </button>
          </span>
        </div>
        <div>
          <form action="">
            <div>
              <label htmlFor="">Assignee</label>
            </div>
            <select name="" id="" placeholder="All">
              <option value="All" label="All"></option>
              <option value="Steven Trumblay" label="Steven Trumblay"></option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}
