import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home/Home";
import Success from "./Pages/Success/Success";
import NotFound from "./Pages/NotFound/NotFound";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/success" element={<Success></Success>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Toaster></Toaster>
      </Router>
    </>
  );
};

export default App;
