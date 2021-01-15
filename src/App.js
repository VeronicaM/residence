import React, { useState } from "react";

import "./App.scss";

function App() {
  const defaultState = {
    residences: [],
  };

  const [state, setState] = useState(defaultState);

  return (
    <div className="app__container">
      <header>
        <h1> Residence App </h1>
      </header>
      <main>
      </main>
      <footer>Created by @Veronica Mihai 2020 with ☕ and 🎵</footer>
    </div>
  );
}

export default App;
