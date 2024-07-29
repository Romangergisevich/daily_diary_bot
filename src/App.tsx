import React, { useEffect } from "react";
import "./App.css";
import Button from "./components/ui/Button";
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
      <Button onClick={onClose}>Закрыть</Button>
    </div>
  );
}

export default App;
