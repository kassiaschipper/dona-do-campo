import GlobalStyle from "../assets/style/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../context/UserContext";
import SignIn from "./authComponents/SignIn";
import Home from "./homeComponents/Home";
import Team from "./teamComponents/Team"
//import PrivatePage from "../PrivatePage";
//import Home from "./homeComponents/Home";

export default function App() {
    const [refresh, setRefresh] = useState(false)
    const [showLogout, setShowLogout] = useState(false);
 
    return (
       <>
          <GlobalStyle />
          <BrowserRouter>
             <UserContext.Provider value={{ refresh, setRefresh, showLogout, setShowLogout }}>
                <Routes>
                  <Route path="/sign-in" element={<SignIn />} />
                   <Route path="/" element={<Home />} />
                   <Route path="/team" element={<Team/>} />
                     {/*<Route path="/home" element={<PrivatePage><Home /></PrivatePage>} /> */}
                </Routes>
             </UserContext.Provider>
          </BrowserRouter>
       </>
    );
};