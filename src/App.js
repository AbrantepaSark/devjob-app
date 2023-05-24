import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import { SingleJob } from "./pages/SingleJob";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobdetails/:id" element={<SingleJob />} />
      </Routes>
    </Router>
  );
}

export default App;
