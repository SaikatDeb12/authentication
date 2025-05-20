import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
