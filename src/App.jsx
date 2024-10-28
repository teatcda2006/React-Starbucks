import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/Routes";
import Header from "./components/header/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </>
  );
};

export default App;
