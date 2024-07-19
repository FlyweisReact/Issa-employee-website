/** @format */

import NavBar from "./components/NavBar";
import { AllRoutes } from "./routes/AllRoutes";
import "./App.css";
import { Footer } from "./components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./MediaQuery.css";

function App() {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <>
      <NavBar />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
