import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState("black");

  const setBGnT = (option) => {
    switch (option) {
      case "1":
        setBgColor("gray");
        setTextColor("white");
        break;
      case "2":
        setBgColor("white");
        setTextColor("gray");
        break;
      case "3":
        setBgColor("orange");
        setTextColor("green");
        break;
      case "4":
        setBgColor("green");
        setTextColor("orange");
        break;
      case "5":
        setBgColor("#a13941ff"); // This may not work without custom CSS
        setTextColor("gold");
        break;
      case "6":
        setBgColor("gold");
        setTextColor("#a13941ff"); // This may not work without custom CSS
        break;
      default:
        setBgColor("white");
        setTextColor("black");
    }
  };
  let [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  let darkStyle = { backgroundColor: bgColor, color: textColor };
  let buttonStyle = { backgroundColor: textColor, color: bgColor };

  return (
    <div className="app" style={darkStyle}>
      <Router>
        <Navbar
          title="Textutils"
          darkStyle={darkStyle}
          setBGnT={setBGnT}
          buttonStyle={buttonStyle}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/TextUtils/about"
            element={<About darkStyle={darkStyle} />}
          />
          <Route
            exact
            path="/TextUtils"
            element={
              <TextForm
                darkStyle={darkStyle}
                showAlert={showAlert}
                buttonStyle={buttonStyle}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
