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
          <span className="ml-auto">
            <button>Report Bug</button>
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
