import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const Main = () => {
  return (
    <section>
      <Navigation />
      <Outlet />
      <Footer />
    </section>
  );
};

export default Main;
