import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Issues from "./components/Issues";
import ProjectList from "./components/ProjectList";
import TeamList from "./components/TeamList"
import UserList from "./components/UserList"
import Settings from "./components/Settings"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/Issues" element={<Issues />} />
            <Route path="/Projects" element={<ProjectList />} />
            <Route path="/Teams" element={<TeamList />} />
            <Route path="/Users" element={<UserList />} />
            <Route path="Settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
