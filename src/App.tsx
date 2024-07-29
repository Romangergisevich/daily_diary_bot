import React, { useEffect } from "react";
import "./App.css";
import Button from "./components/ui/Button";
import { Routes, Route, Link } from "react-router-dom";
import SecondPage from "./components/ui/pages/SecondPage";
import FirstPage from "./components/ui/pages/FirstPage";

const tg = window.Telegram.WebApp;

const onClose = () => {
  tg.close();
};

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to={"/"}>home</Link>
          </li>
          <li>
            <Link to={"/firstPage"}>first</Link>
          </li>
          <li>
            <Link to={"/secondPage"}>second</Link>
          </li>
        </ul>
      </nav>
      HOME
      {/* <Button onClick={onClose}>Закрыть</Button> */}
      <Routes>
        <Route
          path="firstPage"
          element={<FirstPage />}
        />
        <Route
          path="secondPage"
          element={<SecondPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
