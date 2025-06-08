import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./pages/Home";
import { Jobs } from "./pages/Jobs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </>
  );
}

export default App;
