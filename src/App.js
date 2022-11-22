import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminBlog from "./Admin/AdminBlog";
import AdminComments from "./Admin/AdminComments";
import AdminCreate from "./Admin/Create/AdminCreate";
import AdminHome from "./Admin/AdminHome";
import AdminNotifications from "./Admin/AdminNotifications";
import AdminSignIn from "./Admin/AdminSignIn";
import Detail from "./Components/DetailPage/Detail";
import Home from "./Components/MainPage/Home";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/admin" element={<AdminSignIn />} />
        <Route path="/admindash/home/secureID" element={<AdminHome />} />
        <Route path="/admindash/blogs/secureID" element={<AdminBlog />} />
        <Route
          path="/admindash/comments/secureID"
          element={<AdminComments />}
        />
        <Route
          path="/admindash/notifications/secureID"
          element={<AdminNotifications />}
        />
        <Route path="/admindash/create/secureID" element={<AdminCreate />} />
      </Routes>
    </Router>
  );
};

export default App;
