// export default App;
import { useRef, useState } from "react";
import Assistance from "./components/assistance";
import Earth from "./assets/earth.gif";

const btnCont = [
  {
    id: 1,
    name: "React",
    text: "React is a declarative, efficient, and flexible JavaScript library for building user interfaces or UI components",
    top: "1rem",
    left: "0",
  },

  {
    id: 2,
    name: "Tailwind CSS",
    text: "css  framework for styling and positioning elements in our application",
    top: "0",
    left: "1rem",
  },
  {
    id: 3,
    name: "next-js",
    text: "react framework for easy routing and navigation ",
    top: "0",
    left: "1rem",
  },
];

function App() {
  const [image, setImage] = useState("frontend tools");
  const [getPosition, setGetPosition] = useState({ top: 350, left: 10 });

  const handleClick = (item, index) => {
    const btn = document.querySelectorAll("button")[index];
    const btnRect = btn.getBoundingClientRect();

    const position = {
      top: btnRect.bottom,
      left: btnRect.left,
    };

    setGetPosition(position);
    setImage(item.text);
  };

  return (
    <main className="h-screen bg-primary-500 relative  w-[100%] pt-20 text-[20px] font-inter ">
      <div className="flex justify-around  w-full ">
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
        className={`px-4 mx-3 absolute top-[${getPosition.top}px] left-[${getPosition.left}px] z-10 text-black p-2.5 rounded-md w-[200px] h-[200px] text-[#ffff]`}
        style={getPosition}
      >
        <img src={Earth} alt="" />

        <p className="text-[13px]">{image}</p>
      </div>
    </main>
  );
}

export default App;
