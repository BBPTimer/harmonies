import { Icon, IconButton } from "@mui/material";
import "./App.css";
import Scoresheet from "./components/Scoresheet";

function App() {
  return (
    <>
      <div className="flex">
        <Scoresheet name={"Heidi"} />
        <Scoresheet name={"Greg"} />
      </div>
      <div className="flex">
        <IconButton>
          <Icon
            sx={{ color: "white" }}
            onClick={() => window.location.reload()}
          >
            refresh
          </Icon>
        </IconButton>
      </div>
    </>
  );
}

export default App;
