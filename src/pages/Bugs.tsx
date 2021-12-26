import React from "react";
import BugDataGrid from "../components/BugDataGrid";
import Bugfiler from "../components/Bugfilter";
export default function Bugs() {
  return (
    <div>
      <h1>Bugs page</h1>
      <Bugfiler />
      <BugDataGrid />
    </div>
  );
}
