import { useState } from "react";
import "./App.css";
import Chessboard from "./features/Chessboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Chessboard />
    </div>
  );
}

export default App;
