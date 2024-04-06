import { useState } from "react";
import { Header } from "./components/Header";
import "./App.css";
import { Score } from "./components/Score";

function App() {
  return (
    <>
      <Header />

      <Score score={0} highScore={5} />
    </>
  );
}

export default App;
