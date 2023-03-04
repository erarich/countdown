import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Timer from "./pages/Timer";
import About from "./pages/About";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import CookiePolicy from "./pages/legal/CookiePolicy";
import CopyrightPolicy from "./pages/legal/CopyrightPolicy";

const AllRoutes = () => {
   return(
       <BrowserRouter>
        <Routes>
          <Route element={<Home />}  path="/" exact />
          <Route element={<Timer />} path="/timer" />
          <Route element={<About />}  path="/about" />
          <Route element={<Login />}  path="/login" />
          <Route element={<Profile />}  path="/profile" />
          <Route element={<Signup />}  path="/signup" />
          <Route element={<PrivacyPolicy />} path="/privacypolicy"/>
          <Route element={<CookiePolicy />} path="/cookiepolicy"/>
          <Route element={<CopyrightPolicy />} path="/copyrightpolicy"/>
        </Routes>
       </BrowserRouter>
   )
}

export default AllRoutes;