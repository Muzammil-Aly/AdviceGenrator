import React, { useEffect, useState } from "react";
import "./AdviceLayout.css";
const AdviceLayout = () => {
  const url = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState("");
  const [adviceNum, setAdviceNum] = useState("");

  useEffect(() => {
    fetchAdvice();
  }, []);
  //   console.log(adviceNum);

  const fetchAdvice = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        setAdviceNum(data.slip.id);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div className="quotes-main-container w-screen h-screen flex flex-col items-center justify-center  ">
      <div className="sub-container  w-[80vw] h-[55vh] flex flex-col justify-center items-center gap-8 rounded-lg   md:w-[30vw]  md:h-[40vh]  ">
        <h1 className=" sm:text-sm  font-manrope font-bold text-limeGreen ">
          A D V I C E # {adviceNum}
        </h1>
        <div className="w-[60vw] h-[20vh] md:w-[20vw] ">
          <p className="text-lg font-bold md:text-2xl">"{advice}"</p>
        </div>
        <div class="flex  flex-col items-center justify-center w-full h-auto  lg:w-[400px] overflow-hidden  ">
          <div className="line  ">
            <div className="">
              <div className="w-[100vw] md:w-[60vw]">
                <svg
                  className="h-auto mx-12    sm:w-auto      "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 444 16"
                >
                  <g fill="none" fillRule="evenodd">
                    <path
                      fill="hsl(193, 38%, 86%)"
                      d="M0 8h196v1H0zM248 8h196v1H248z"
                    />
                    <g transform="translate(212)" fill="#CEE3E9">
                      <rect width="6" height="16" rx="3" />
                      <rect x="14" width="6" height="16" rx="3" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative bottom-6   dice  rounded-full bg-limeGreen  grid place-items-center  hover:shadow-[0_0_15px_5px_limeGreen] transition duration-300 ease-in-out ">
        <button onClick={fetchAdvice}>
          <svg
            className="w-12 h-12  p-3 fill-current text-darkblue    "
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AdviceLayout;
