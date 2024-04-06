import { useState } from "react";
import { Header } from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header score={4} highScore={9}></Header>
    </>
  );
}

export default App;
