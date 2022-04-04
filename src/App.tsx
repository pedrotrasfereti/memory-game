import React from "react";
import { useSelector } from "react-redux";

import Footer from "./Components/Footer";
import Game from "./Components/Game";
import Settings from "./Components/Settings";
import Score from "./Components/Score";

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
