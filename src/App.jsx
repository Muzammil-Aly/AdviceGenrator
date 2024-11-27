import { useState } from "react"; // Only import what you need
import "./App.css";
import AdviceLayout from "./Components/adviceLayout";

function App() {
  const [count, setCount] = useState(0); // Placeholder for potential interactivity

  return (
    <div className="App">
      <AdviceLayout />
    </div>
  );
}

export default App;
