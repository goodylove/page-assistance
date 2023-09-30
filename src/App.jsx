import { useEffect, useState } from "react";

function App() {
  const [toggleCameraBtn, setToggleCameraBtn] = useState(false);
  const [toggleAudioBtn, setToggleAudioBtn] = useState(false);

  function startRecord() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // send a message to the content js to listen for

      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "request_recording" },
        function (resposne) {
          if (!chrome.runtime.lastError) {
            console.log(resposne);
          } else {
            console.log(chrome.runtime.lastError, "error line 17");
          }
        }
      );
    });
  }

  function stopRecord() {
    // get active tabs
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // send a message to the content js to listen for

      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "stopvideo" },
        function (resposne) {
          if (!chrome.runtime.lastError) {
            console.log(resposne);
          } else {
            console.log(chrome.runtime.lastError, "error line 37");
          }
        }
      );
    });
  }

  useEffect(() => {
    startRecord();
  }, []);

  return (
    <main className="w-[300px] px-6 pt-6 pb-8 space-y-4 rounded-3xl shadow-2xl bg-[#fff]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <g clipPath="url(#clip0_502_2163)">
              <path
                d="M21.7983 11.7894C21.4065 10.4385 20.6937 9.20245 19.7207 8.18669C18.7477 7.17092 17.5434 6.40563 16.2106 5.95612C14.8938 5.57283 13.5097 5.47865 12.1532 5.68001C10.7966 5.88138 9.49958 6.37354 8.35091 7.12278C8.25639 7.2175 8.13787 7.28469 8.00805 7.31714C7.87824 7.3496 7.74204 7.34609 7.61407 7.30699C7.35607 7.22341 7.12362 7.07549 6.93863 6.87717C6.80397 6.63419 6.76042 6.35114 6.81582 6.07892C6.85101 5.94826 6.9128 5.82628 6.99733 5.72062C7.08186 5.61495 7.1873 5.52789 7.30705 5.46489C10.5614 3.56138 13.7544 3.07015 16.8246 4.05261C18.3361 4.55536 19.7161 5.38974 20.8635 6.49466C22.0109 7.59959 22.8968 8.9471 23.4562 10.4386H27.5702C26.729 7.12031 24.7011 4.22526 21.8701 2.30077C19.039 0.376283 15.601 -0.444251 12.206 -0.00569532C8.81093 0.43286 5.69423 2.10011 3.44514 4.68083C1.19605 7.26155 -0.0295595 10.5769 3.54369e-05 14C3.54369e-05 14.5526 0.0614389 15.0438 0.0614389 15.5965H5.28074C5.48007 15.5852 5.67768 15.6389 5.8438 15.7497C6.00992 15.8604 6.13556 16.0222 6.20179 16.2105C6.60284 17.5568 7.31887 18.7881 8.29059 19.8025C9.2623 20.817 10.4617 21.5853 11.7895 22.0438C13.1063 22.4271 14.4903 22.5213 15.8469 22.3199C17.2035 22.1186 18.5005 21.6264 19.6492 20.8772C19.7437 20.7825 19.8622 20.7153 19.992 20.6828C20.1218 20.6504 20.258 20.6539 20.386 20.693C20.644 20.7765 20.8765 20.9245 21.0614 21.1228C21.1961 21.3658 21.2397 21.6488 21.1842 21.921C21.1491 22.0517 21.0873 22.1737 21.0027 22.2793C20.9182 22.385 20.8128 22.4721 20.693 22.5351C18.8421 23.7805 16.6608 24.4434 14.4299 24.4386C13.3272 24.4303 12.2314 24.2649 11.1755 23.9473C9.65762 23.4566 8.27154 22.6264 7.12247 21.5199C5.9734 20.4134 5.09156 19.0596 4.5439 17.5614H0.491263C1.37895 20.8251 3.41814 23.6571 6.23189 25.5339C9.04565 27.4107 12.4437 28.2054 15.798 27.7712C19.1523 27.3369 22.2359 25.703 24.4789 23.1715C26.722 20.64 27.9727 17.3821 28 14C28.0115 13.4875 27.991 12.9748 27.9386 12.4649H22.7807C22.5714 12.4511 22.3696 12.381 22.1967 12.2621C22.0238 12.1433 21.8862 11.98 21.7983 11.7894Z"
                fill="#100A42"
              />
              <path
                d="M14.0594 20.1247C15.2682 20.1131 16.4466 19.744 17.4461 19.064C18.4455 18.3839 19.2214 17.4233 19.676 16.3031C20.1305 15.183 20.2435 13.9533 20.0005 12.7691C19.7576 11.5849 19.1696 10.499 18.3107 9.6483C17.4518 8.79759 16.3604 8.22006 15.1739 7.98846C13.9874 7.75686 12.7589 7.88154 11.6432 8.34681C10.5274 8.81208 9.57424 9.59712 8.90379 10.6031C8.23333 11.609 7.87554 12.7908 7.87549 13.9997C7.87545 14.809 8.03581 15.6104 8.3473 16.3573C8.65878 17.1043 9.11522 17.7822 9.69023 18.3517C10.2652 18.9212 10.9474 19.3712 11.6974 19.6755C12.4473 19.9798 13.2501 20.1325 14.0594 20.1247Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_502_2163">
                <rect width="28" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>HelpMeOut</p>
        </div>

        <div className="flex items-center gap-x-3">
          <svg
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
              stroke="#120B48"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.6665 10.7334V9.2667C1.6665 8.40003 2.37484 7.68336 3.24984 7.68336C4.75817 7.68336 5.37484 6.6167 4.6165 5.30836C4.18317 4.55836 4.4415 3.58336 5.19984 3.15003L6.6415 2.32503C7.29984 1.93336 8.14984 2.1667 8.5415 2.82503L8.63317 2.98336C9.38317 4.2917 10.6165 4.2917 11.3748 2.98336L11.4665 2.82503C11.8582 2.1667 12.7082 1.93336 13.3665 2.32503L14.8082 3.15003C15.5665 3.58336 15.8248 4.55836 15.3915 5.30836C14.6332 6.6167 15.2498 7.68336 16.7582 7.68336C17.6248 7.68336 18.3415 8.3917 18.3415 9.2667V10.7334C18.3415 11.6 17.6332 12.3167 16.7582 12.3167C15.2498 12.3167 14.6332 13.3834 15.3915 14.6917C15.8248 15.45 15.5665 16.4167 14.8082 16.85L13.3665 17.675C12.7082 18.0667 11.8582 17.8334 11.4665 17.175L11.3748 17.0167C10.6248 15.7084 9.3915 15.7084 8.63317 17.0167L8.5415 17.175C8.14984 17.8334 7.29984 18.0667 6.6415 17.675L5.19984 16.85C4.4415 16.4167 4.18317 15.4417 4.6165 14.6917C5.37484 13.3834 4.75817 12.3167 3.24984 12.3167C2.37484 12.3167 1.6665 11.6 1.6665 10.7334Z"
              stroke="#120B48"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <svg
            className="stroke-[#928FAB] hover:stroke-[#120B48] cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9.99984 18.3334C14.5832 18.3334 18.3332 14.5834 18.3332 10.0001C18.3332 5.41675 14.5832 1.66675 9.99984 1.66675C5.4165 1.66675 1.6665 5.41675 1.6665 10.0001C1.6665 14.5834 5.4165 18.3334 9.99984 18.3334Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.6416 12.3583L12.3583 7.6416"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.3583 12.3583L7.6416 7.6416"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <p className="mb-4 text-primary-400 text-sm font-workSans font-normal w-[90%]">
        This extension helps you record and share help videos with ease.
      </p>

      <div className="flex items-center justify-between px-8 pt-4">
        <button
          type="submit"
          className={`hover:stroke-[#120B48] hover:text-primary-500 flex flex-col justify-center items-center gap-2 cursor-pointer text-primary-50 stroke-primary-50`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M8.5865 2.66675H23.3998C28.1465 2.66675 29.3332 3.85341 29.3332 8.58675V17.0267C29.3332 21.7734 28.1465 22.9467 23.4132 22.9467H8.5865C3.85317 22.9601 2.6665 21.7734 2.6665 17.0401V8.58675C2.6665 3.85341 3.85317 2.66675 8.5865 2.66675Z"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 22.96V29.3333"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.6665 17.3333H29.3332"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 29.3333H22"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-sm font-workSans font-semibold">Full Screen</p>
        </button>

        <button
          type="submit"
          className={`
           hover:stroke-[#120B48] hover:text-primary-500 flex flex-col justify-center items-center gap-2 cursor-pointer stroke-primary-500`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M21.3332 17.2001V22.8001C21.3332 27.4667 19.4665 29.3334 14.7998 29.3334H9.19984C4.53317 29.3334 2.6665 27.4667 2.6665 22.8001V17.2001C2.6665 12.5334 4.53317 10.6667 9.19984 10.6667H14.7998C19.4665 10.6667 21.3332 12.5334 21.3332 17.2001Z"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M29.3332 9.20008V14.8001C29.3332 19.4667 27.4665 21.3334 22.7998 21.3334H21.3332V17.2001C21.3332 12.5334 19.4665 10.6667 14.7998 10.6667H10.6665V9.20008C10.6665 4.53341 12.5332 2.66675 17.1998 2.66675H22.7998C27.4665 2.66675 29.3332 4.53341 29.3332 9.20008Z"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-sm font-workSans font-semibold">Current Tab</p>
        </button>
      </div>

      <div className="py-3 pl-4 pr-3 border border-primary-500 text-primary-500 font-workSans rounded-xl text-sm font-medium flex justify-between items-center">
        <p className="flex items-center gap-x-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.75 10.5L20.4697 5.78033C20.9421 5.30786 21.75 5.64248 21.75 6.31066V17.6893C21.75 18.3575 20.9421 18.6921 20.4697 18.2197L15.75 13.5M4.5 18.75H13.5C14.7426 18.75 15.75 17.7426 15.75 16.5V7.5C15.75 6.25736 14.7426 5.25 13.5 5.25H4.5C3.25736 5.25 2.25 6.25736 2.25 7.5V16.5C2.25 17.7426 3.25736 18.75 4.5 18.75Z"
                stroke="#0F172A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>Camera</span>
        </p>

        <button
          type="submit"
          onClick={() => setToggleCameraBtn((prev) => !prev)}
          className={`flex ${
            toggleCameraBtn
              ? "bg-primary-500 justify-end"
              : "bg-primary-50 justify-start"
          } items-center border border-primary-500 rounded-[14px] p-[2px] w-10 transition-all duration-500`}
        >
          <svg
            className={`${
              toggleCameraBtn ? "fill-primary-50" : "fill-primary-500"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <g filter="url(#filter0_dd_358_4063)">
              <circle cx="11" cy="10" r="8" />
            </g>
            <defs>
              <filter
                id="filter0_dd_358_4063"
                x="0"
                y="0"
                width="22"
                height="22"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_358_4063"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_358_4063"
                  result="effect2_dropShadow_358_4063"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_358_4063"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </button>
      </div>

      <div className="py-3 pl-4 pr-3 border border-primary-500 text-primary-500 font-workSans rounded-xl text-sm font-medium flex justify-between items-center">
        <p className="flex items-center gap-x-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 18.75C15.3137 18.75 18 16.0637 18 12.75V11.25M12 18.75C8.68629 18.75 6 16.0637 6 12.75V11.25M12 18.75V22.5M8.25 22.5H15.75M12 15.75C10.3431 15.75 9 14.4069 9 12.75V4.5C9 2.84315 10.3431 1.5 12 1.5C13.6569 1.5 15 2.84315 15 4.5V12.75C15 14.4069 13.6569 15.75 12 15.75Z"
                stroke="#0F172A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>Audio</span>
        </p>

        <button
          type="submit"
          onClick={() => setToggleAudioBtn((prev) => !prev)}
          className={`flex ${
            toggleAudioBtn
              ? "bg-primary-500 justify-end"
              : "bg-primary-50 justify-start"
          } items-center border border-primary-500 rounded-[14px] p-[2px] w-10 transition-all duration-500`}
        >
          <svg
            className={`${
              toggleAudioBtn ? "fill-primary-50" : "fill-primary-500"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <g filter="url(#filter0_dd_358_4063)">
              <circle cx="11" cy="10" r="8" />
            </g>
            <defs>
              <filter
                id="filter0_dd_358_4063"
                x="0"
                y="0"
                width="22"
                height="22"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_358_4063"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_358_4063"
                  result="effect2_dropShadow_358_4063"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_358_4063"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </button>
      </div>

      <button
        type="submit"
        onClick={startRecord}
        className="p-4 w-full text-[#fff] rounded-xl bg-primary-500 font-workSans"
      >
        Start Recording
      </button>
    </main>
  );
}
export default App;
