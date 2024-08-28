import React from "react";
import Welcome from "./pages/Welcome";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";
import Thanks from "./pages/Thanks";
import RegistrationPage from "./pages/RegistrationPage";
import "./styles/main.css";

const App = () => {
  return (
    <div className="App">
      <Welcome />
      <RegistrationPage />

    </div>
  );
};

export default App;
