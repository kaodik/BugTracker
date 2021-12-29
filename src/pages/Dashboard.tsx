import React from "react";
import Projects from "../components/Projects";
import BugStatus from "../components/BugStatus";
import RecentEvents from "../components/RecentEvents";
export default function Dashboard() {
  return (
    <div className="flex space-x-10">
      <div>
        <Projects />
      </div>
      <div>
        <BugStatus />
      </div>
      <div>
        <RecentEvents />
      </div>
    </div>
  );
}
