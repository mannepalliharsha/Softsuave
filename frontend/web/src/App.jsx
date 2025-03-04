import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const arr = [
    {
      color: "blue",
    },
    {
      color: "black",
    },
    {
      color: "red",
    },
  ];
  const [color, setColor] = useState(arr);

  return (
    <div>
      {color.map(function (item, id) {
        return (
          <div
            key={id}
            style={{
              height: "100px",
              width: "100px",
              backgroundColor: `${item.color}`,
            }}
          ></div>
        );
      })}
    </div>
  );
}

export default App;
