import React from "react";
import './App.css';
import Header from './components/header/Header'
import RightPanel from "./components/left_side/RightPanel";
import LeftPanel from "./components/right_side/LeftPanel";

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
