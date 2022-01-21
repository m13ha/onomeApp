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
    let viewLogs = JSON.parse(storage.getItem("onoViewLogs"));
    let likeLogs = JSON.parse(storage.getItem("onoLikeLogs"));

    // check for the presense of view and like Logs
    if(viewLogs){
      storage.setItem('onoViewLogs', JSON.stringify(viewLogs));
    }else{
      storage.setItem('onoViewLogs', JSON.stringify([]));
    }

    if(likeLogs){
      storage.setItem('onoLikeLogs', JSON.stringify(likeLogs));
    }else{
      storage.setItem('onoLikeLogs', JSON.stringify([]));
    }

    
    let currentUser = JSON.parse(storage.getItem("onomeUser"));
    if (currentUser) {
      setUser(currentUser);
    }
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
