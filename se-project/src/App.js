import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./Pages/Main";
import PlacementTest from "./Pages/PlacementTest";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Navbar">
          <div>
            <h1 className="Title">SE-Project</h1>
          </div>
          <div className="nav-right">
            <h2 className="nav-link">Learning</h2>
            <h2 className="nav-link">Get Started</h2>
          </div>
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/placement-test" element={<PlacementTest />}/>
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
