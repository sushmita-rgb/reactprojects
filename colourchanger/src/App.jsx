import React, { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-300"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-11 inset-x-2">
          <div className="flex flex-wrap justify-center gap-3 rounded-xl bg-white px-2 py-2">
            <button
              onClick={() => {
                setColor("red");
              }}
              className="outline-none px-4 py-3 rounded-2xl shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>

            <button
              onClick={() => setColor("violet")}
              className="outline-none px-4 py-3 rounded-2xl shadow-lg"
              style={{ backgroundColor: "violet" }}
            >
              Violet
            </button>

            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-3 rounded-2xl shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>

            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 py-3 rounded-2xl shadow-lg"
              style={{ backgroundColor: "orange" }}
            >
              orange
            </button>

            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-3 rounded-2xl shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              green
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
