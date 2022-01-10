import React from 'react';
import BugDataGrid from '../components/BugDataGrid';
import Bugfilter from '../components/Bugfilter';
export default function Bugs() {
  return (
    <div>
      <h1>Bugs page</h1>
      <Bugfilter />
      <BugDataGrid />
    </div>
  );
}
