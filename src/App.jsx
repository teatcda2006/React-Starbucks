import React from "react";
import Header from './components/header/Header'
import RightPanel from "./components/right_side/RightPanel";
import LeftPanel from "./components/left_side/LeftPanel";

const App = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <LeftPanel />
        <RightPanel />
      </div>
    </>
  );
};

export default App;
