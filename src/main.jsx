import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HthPage from "./pages/HthPage.jsx";
import IndexRita from "./pages/rita/IndexRita.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<IndexRita />} />
      {/* <Route path="/hth" element={<HthPage />} /> */}
    </Routes>
  </Router>
);
