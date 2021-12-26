import React from "react";

export default function RecentEvents() {
  let currentDate = new Date();
  let cDay = currentDate.getDate();
  let cMonth = currentDate.getMonth() + 1;
  let cYear = currentDate.getFullYear();
  let lastEvent = cDay + "/" + cMonth + "/" + cYear;
  return (
    <div className="w-96 text-blue-500 rounded-2xl bg-gray-500 p-2">
      <h2 className="text-lx pb-2">Recent Events</h2>
      <div>
        <div>
          <h3 className="text-base pl-4"> {lastEvent}</h3>
        </div>

        <div className="border-2 rounded border-gray-400 bg-gray-50 h-20 text-base p-2">
          <p>
            image of account, Steven Trumblay edited the members of this project
            timestamp
          </p>
          <p>project name</p>
          <p>image of account, steven trumblay has added as a project member</p>
        </div>
      </div>
    </div>
  );
}
