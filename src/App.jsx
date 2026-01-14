import "./App.css";
import Scoresheet from "./components/Scoresheet";

function App() {
  return (
    <div className="flex">
      <Scoresheet name={"Heidi"} />
      <Scoresheet name={"Greg"} />
    </div>
  );
}

export default App;
