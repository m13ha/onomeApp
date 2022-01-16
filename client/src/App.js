import Home from "./main/home";
import UserReg from "./signUp/userReg";
import ConfirmPage from "./signUp/confirmation";
import { UserContext } from "./utils/user";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useMemo, useState } from "react";

function App() {
  const [user, setUser] = useState({});

  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <UserContext.Provider value={providerValue}>
        <Routes>
          <Route exact path="/" element={<UserReg />} />
          <Route exact path="/confirmation" element={<ConfirmPage />} />
          <Route exact path="/home/*" element={<Home />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
