import React from "react";
import Projects from "../components/Projects";
import BugStatus from "../components/BugStatus";
export default function Dashboard() {
  return (
    <div>
      <h1 className="text-blue-500">hello from dashboard page</h1>
      <Projects />
      <BugStatus />
    </div>
  );
}
