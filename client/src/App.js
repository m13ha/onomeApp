import Home from "./main/home";
import UserReg from "./signUp/userReg";
import ConfirmPage from "./signUp/confirmation";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

function App() {
  const isvalid = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<UserReg />} />
        <Route exact path="/home/*" element={isvalid ? (<Home />) : (<Navigate to="/"/>)}/>
        <Route exact path="/confirmation" element={
          isvalid ? (<ConfirmPage />) : (<Navigate to="/"/>)
        } />
      </Routes>
    </Router>
  );
}

export default App;
