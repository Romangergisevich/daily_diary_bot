import React, { useEffect } from "react";
import "./App.css";
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
      йцу
      <button onClick={onClose}>закрыть</button>
    </div>
  );
}

export default App;
