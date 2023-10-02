import { useState } from "react";

function App() {
  const [imge, setImage] = useState();

  const btnCont = [
    {
      id: 1,
      name: "React",
      text: "react framework",
      top: "1ren",
      right: "0",
    },
    {
      id: 2,
      name: "javascript",
      text: "react framework",
      top: "2rem",
      left: "0",
    },

    {
      id: 3,
      name: "Tailwind css",
      text: "react framework",
      top: "0",
      left: "3rem",
    },
  ];

  const handleClick = (id) => {
    console.log(id);
  };
  return (
    <main
      className="h-screen   bg-primary-500 relative
    "
    >
      <div className=" flex justify-between">
        {btnCont.map((item) => {
          return (
            <button
              key={item.id}
              className={`bg-[#ffff]  text-[#ab1414] rounded p-1 `}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <div className="">
        <img alt="" className="w-[100px]" />
      </div>
    </main>
  );
}

export default App;
