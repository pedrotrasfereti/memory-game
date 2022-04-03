import React from "react";

import Footer from "./Components/Footer";
import Game from "./Components/Game";
import Settings from "./Components/Settings";
import Score from "./Components/Score";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1 id="title">Memory Game</h1>
      <Settings />
      <Game />
      <Score />
      <Footer />
    </div>
  );
}

export default App;
