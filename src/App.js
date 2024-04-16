import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import Profile from "./pages/Profile";
import Player from "./pages/Player";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/player/:id" element={<Player />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
