import React from "react";
import { useSelector } from "react-redux";

import Footer from "./components/Footer";
import Game from "./components/Game";
import Settings from "./components/Settings";
import Score from "./components/Score";

import "./App.scss";
import { RootState } from "./app/store";

function App() {
  const { inProgress } = useSelector((state: RootState) => state.game);

  return (
    <div className="App">
      <h1 id="title">Memory Game</h1>
      <Settings disabled={inProgress} />
      <Game />
      <Score />
      <Footer />
    </div>
  );
}

export default App;
