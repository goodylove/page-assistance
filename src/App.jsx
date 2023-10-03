// export default App;
import { useRef, useState } from "react";
import Assistance from "./components/assistance";

const btnCont = [
  {
    id: 1,
    name: "React",
    text: "react framework",
    top: "1rem",
    left: "0",
  },
  {
    id: 3,
    name: "Tailwind CSS",
    text: "react framework",
    top: "0",
    left: "1rem",
  },
];

function App() {
  const [image, setImage] = useState("frontend tools");
  const [getPosition, setGetPosition] = useState({ top: 300, left: 400 });
  const assistRef = useRef(null);

  const handleClick = (item, index) => {
    const btn = document.querySelectorAll("button")[index];
    const btnRect = btn.getBoundingClientRect();
    const assistEl = assistRef.current;
    const assistRect = assistEl.getBoundingClientRect();

    console.log(btnRect);
    // Calculate the position based on the button's position and size
    const position = {
      top: btnRect.top - assistRect.height - 10 + window.scrollY,
      left: btnRect.left + window.scrollX,
    };

    setGetPosition(position);
    setImage(item.name);
  };

  return (
    <main className="h-screen bg-primary-500 relative">
      <div className="flex justify-between">
        {btnCont.map((item, index) => (
          <button
            onClick={() => handleClick(item, index)}
            key={item.id}
            className="bg-[#ffff] text-[#ab1414] rounded p-1 button"
          >
            {item.name}
          </button>
        ))}
      </div>
      <div
        ref={assistRef}
        className="absolute bg-[#ab1] rounded-md p-1"
        style={{
          top: getPosition.top + "px",
          left: getPosition.left + "px",
          transition: "top 0.3s ease, left 0.3s ease",
        }}
      >
        {image}
      </div>
    </main>
  );
}

export default App;
