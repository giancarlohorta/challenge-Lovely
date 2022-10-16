import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/profile" element={<Profile />} exact />
    </Routes>
  );
};

export default Router;
