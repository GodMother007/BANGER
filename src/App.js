import  React from "react";
import "./App.css";
import Checkpage from "./components/Contactus/Checkpage";
import ContactusArea from "./components/Contactus/ContactusArea";
import ContentsArea from "./components/Contents/ContentsArea";
import {
  BrowserRouter as Router,
  Routes,
  Route
  } from "react-router-dom";

const App = () => {
  return (
    <div className="Wrapper">
      <Router>
        <Routes>
          <Route path="/*" element={<ContentsArea />} />
          <Route exact path="/contactus" element={<ContactusArea />} />
          <Route exact path="/checked" element={<Checkpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
