import Home from "./main/home";
import UserReg from "./signUp/userReg";
import ConfirmPage from "./signUp/confirmation";
import { UserContext } from "./utils/user";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

function App() {
  let storage = sessionStorage;
  let [user, setUser] = useState(() => {
    let currentUser = JSON.parse(storage.getItem("onomeUser"));
    if (currentUser) {
      storage.setItem("onomeUser", JSON.stringify(currentUser));
      return currentUser;
    } else {
      storage.setItem("onomeUser", JSON.stringify(
        {
          user: null,
          email: null,
          isVerfied: false,
          isMod: false,
          isCompany: false,
          notifications: false,
        }
      ));
      return {
        user: null,
        email: null,
        isVerfied: false,
        isMod: false,
        isCompany: false,
        notifications: false,
      };
    }
  });


  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    let viewLogs = JSON.parse(storage.getItem("onoViewLogs"));
    let likeLogs = JSON.parse(storage.getItem("onoLikeLogs"));
    //let postLogs = JSON.parse(storage.getItem("onoPostLogs"));

    // check for the presense of view and like Logs
    if (viewLogs) {
      storage.setItem("onoViewLogs", JSON.stringify(viewLogs));
    } else {
      storage.setItem("onoViewLogs", JSON.stringify([]));
    }

    if (likeLogs) {
      storage.setItem("onoLikeLogs", JSON.stringify(likeLogs));
    } else {
      storage.setItem("onoLikeLogs", JSON.stringify([]));
    }

    // if (postLogs) {
    //   storage.setItem("onoPostLogs", JSON.stringify(postLogs));
    // } else {
    //   storage.setItem("onoPostLogs", JSON.stringify([]));
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
