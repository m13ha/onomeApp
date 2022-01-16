import Home from "./main/home";
import UserReg from "./signUp/userReg";
import ConfirmPage from "./signUp/confirmation";
import { UserContext } from "./utils/user";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

function App() {
  let storage = sessionStorage;
  let [user, setUser] = useState({
    user: false,
    email: null,
    isVerfied: false,
  });
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    let currentUser = JSON.parse(storage.getItem("onomeUser"));
    if (currentUser) {
      setUser(currentUser);
    }
    console.log(currentUser);
  }, []);

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
