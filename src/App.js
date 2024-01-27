import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Check Dark Mode
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Has Been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Been Enabled", "success");
    }
  };
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar
          title="TextUtils"
          aboutText=""
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          {/* <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={ */}
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
          {/* //     } */}
          {/* //   ></Route> */}
          {/* // </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
