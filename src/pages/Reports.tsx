import React from "react";
import Piegraph from "../components/Piegraph";
import ReportStats from "../components/ReportStats";
export default function Reports() {
  return (
    <div className="flex space-x-10">
      <Piegraph />
      <ReportStats />
    </div>
  );
}
