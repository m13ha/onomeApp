import Home from "./main/home";
import UserReg from "./signUp/userReg";
import ConfirmPage from "./signUp/confirmation";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<UserReg />} />
        <Route exact path="/home/*" element={<Home />}>
        </Route>
        <Route exact path="/confirmation" element={<ConfirmPage />} />
      </Routes>
    </Router>
  );
}

export default App;
