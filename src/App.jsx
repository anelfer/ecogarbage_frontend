import { Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";

import "./assets/styles/reset.css";
import "./assets/styles/index.css";

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
  );
}

export default App;
