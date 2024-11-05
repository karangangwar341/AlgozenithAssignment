import React, { useState } from "react";
import {
  AiOutlineClockCircle,
  AiOutlineFileText,
  AiOutlineQuestionCircle,
  AiOutlineCode,
  AiOutlineFolder,
} from "react-icons/ai";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

const PartDetail = ({
  partId,
  partTitle,
  time,
  sheets,
  difficulty,
  completed,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div
      className={`border-[1px] w-full rounded-[16px]  bg-white border-[#A4E6FF] mb-[16px] ${
        isExpanded ? "shadow-lg shadow-black/10" : ""
      }`}
    >
      {/* Part Header */}
      <div className=" rounded-[16px] overflow-clip">
        <div
          className=" items-center py-[16px] justify-between p-4  cursor-pointer"
          onClick={toggleExpand}
        >
          <div className="flex items-center justify-between">
            <div>
              <div
                className={`text-[#17384D] text-justify [leading-trim:both] [text-edge:cap] text-2xl font-normal leading-[44px] tracking-[0.72px] capitalize`}
              >
                PART {partId}
              </div>
              <div
                className={`text-black text-justify [leading-trim:both] [text-edge:cap] text-[28px] font-semibold leading-[44px] tracking-[-0.84px] capitalize`}
              >
                {partTitle}
              </div>
            </div>
            <div className="items-center space-y-[22px]">
              <section className="flex gap-[16px] text-[24px] justify-center items-center">
                <span className="flex items-center gap-1 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      d="M18 12V18L22.5 22.5M31.5 18C31.5 19.7728 31.1508 21.5283 30.4724 23.1662C29.7939 24.8041 28.7995 26.2923 27.5459 27.5459C26.2923 28.7995 24.8041 29.7939 23.1662 30.4724C21.5283 31.1508 19.7728 31.5 18 31.5C16.2272 31.5 14.4717 31.1508 12.8338 30.4724C11.1959 29.7939 9.70765 28.7995 8.45406 27.5459C7.20047 26.2923 6.20606 24.8041 5.52763 23.1662C4.84919 21.5283 4.5 19.7728 4.5 18C4.5 14.4196 5.92232 10.9858 8.45406 8.45406C10.9858 5.92232 14.4196 4.5 18 4.5C21.5804 4.5 25.0142 5.92232 27.5459 8.45406C30.0777 10.9858 31.5 14.4196 31.5 18Z"
                      stroke="url(#paint0_linear_1_185)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_185"
                        x1="6.60936"
                        y1="4.5"
                        x2="28.7578"
                        y2="4.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#3467AE" />
                        <stop offset="1" stop-color="#0C4969" />
                      </linearGradient>
                    </defs>
                  </svg>{" "}
                  {time}
                </span>
                <span className="flex items-center gap-1 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      d="M13.5 28.5V19.5C13.5 18.7044 13.1839 17.9413 12.6213 17.3787C12.0587 16.8161 11.2956 16.5 10.5 16.5H7.5C6.70435 16.5 5.94129 16.8161 5.37868 17.3787C4.81607 17.9413 4.5 18.7044 4.5 19.5V28.5C4.5 29.2956 4.81607 30.0587 5.37868 30.6213C5.94129 31.1839 6.70435 31.5 7.5 31.5H10.5C11.2956 31.5 12.0587 31.1839 12.6213 30.6213C13.1839 30.0587 13.5 29.2956 13.5 28.5ZM13.5 28.5V13.5C13.5 12.7044 13.8161 11.9413 14.3787 11.3787C14.9413 10.8161 15.7044 10.5 16.5 10.5H19.5C20.2956 10.5 21.0587 10.8161 21.6213 11.3787C22.1839 11.9413 22.5 12.7044 22.5 13.5V28.5M13.5 28.5C13.5 29.2956 13.8161 30.0587 14.3787 30.6213C14.9413 31.1839 15.7044 31.5 16.5 31.5H19.5C20.2956 31.5 21.0587 31.1839 21.6213 30.6213C22.1839 30.0587 22.5 29.2956 22.5 28.5M22.5 28.5V7.5C22.5 6.70435 22.8161 5.94129 23.3787 5.37868C23.9413 4.81607 24.7044 4.5 25.5 4.5H28.5C29.2956 4.5 30.0587 4.81607 30.6213 5.37868C31.1839 5.94129 31.5 6.70435 31.5 7.5V28.5C31.5 29.2956 31.1839 30.0587 30.6213 30.6213C30.0587 31.1839 29.2956 31.5 28.5 31.5H25.5C24.7044 31.5 23.9413 31.1839 23.3787 30.6213C22.8161 30.0587 22.5 29.2956 22.5 28.5Z"
                      stroke="url(#paint0_linear_1_193)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_193"
                        x1="6.60936"
                        y1="4.5"
                        x2="28.7578"
                        y2="4.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#3467AE" />
                        <stop offset="1" stop-color="#0C4969" />
                      </linearGradient>
                    </defs>
                  </svg>{" "}
                  {difficulty}
                </span>
                <span className="flex items-center gap-1 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      d="M12 10.5V22.5C12 23.2956 12.3161 24.0587 12.8787 24.6213C13.4413 25.1839 14.2044 25.5 15 25.5H24M12 10.5V7.5C12 6.70435 12.3161 5.94129 12.8787 5.37868C13.4413 4.81607 14.2044 4.5 15 4.5H21.879C22.2768 4.50008 22.6583 4.65818 22.9395 4.9395L29.5605 11.5605C29.8418 11.8417 29.9999 12.2232 30 12.621V22.5C30 23.2956 29.6839 24.0587 29.1213 24.6213C28.5587 25.1839 27.7956 25.5 27 25.5H24M12 10.5H9C8.20435 10.5 7.44129 10.8161 6.87868 11.3787C6.31607 11.9413 6 12.7044 6 13.5V28.5C6 29.2956 6.31607 30.0587 6.87868 30.6213C7.44129 31.1839 8.20435 31.5 9 31.5H21C21.7956 31.5 22.5587 31.1839 23.1213 30.6213C23.6839 30.0587 24 29.2956 24 28.5V25.5"
                      stroke="url(#paint0_linear_1_189)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_189"
                        x1="7.87499"
                        y1="4.5"
                        x2="27.5625"
                        y2="4.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#3467AE" />
                        <stop offset="1" stop-color="#0C4969" />
                      </linearGradient>
                    </defs>
                  </svg>{" "}
                  {sheets}
                </span>
                {isExpanded ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="16"
                    viewBox="0 0 29 16"
                    fill="none"
                  >
                    <path
                      d="M2.79709 13.5774L2.79714 13.5775C3.47842 14.1368 4.10151 14.645 4.55643 15.0131C4.72889 15.1526 4.87666 15.2716 4.99402 15.3653C5.01797 15.3461 5.04328 15.3257 5.06991 15.3042C5.31345 15.1079 5.66391 14.8233 6.09558 14.4716C6.95873 13.7684 8.14458 12.7982 9.44475 11.7307L14.1736 7.84826L14.4909 7.58777L14.8082 7.84827L19.537 11.7309C20.8371 12.7984 22.023 13.7686 22.8862 14.4718C23.3179 14.8235 23.6683 15.108 23.9119 15.3044C23.9386 15.3259 23.9639 15.3463 23.9879 15.3655C24.1059 15.2713 24.2546 15.1515 24.4283 15.011C24.8849 14.6416 25.5102 14.1315 26.1939 13.57L26.1939 13.57L28.2121 11.9129L14.4907 0.646939L7.56262 6.33524L7.24534 5.94881L7.56261 6.33525C5.57019 7.97104 3.75903 9.45981 2.44604 10.5406C1.78951 11.0811 1.25771 11.5194 0.890121 11.823C0.851307 11.8551 0.814339 11.8856 0.77926 11.9146C0.859609 11.9813 0.949247 12.0555 1.04708 12.1364C1.49593 12.5077 2.1154 13.0179 2.79709 13.5774Z"
                      fill="#17384D"
                      stroke="white"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="16"
                    viewBox="0 0 29 16"
                    fill="none"
                  >
                    <path
                      d="M2.79709 2.42258L2.79714 2.42253C3.47842 1.86317 4.10151 1.35498 4.55643 0.986932C4.72889 0.847404 4.87666 0.72844 4.99402 0.634654C5.01797 0.653921 5.04328 0.674302 5.06991 0.695774C5.31345 0.89215 5.66391 1.17666 6.09558 1.52836C6.95873 2.23159 8.14458 3.20184 9.44475 4.26926L14.1736 8.15174L14.4909 8.41223L14.8082 8.15173L19.537 4.26908C20.8371 3.20165 22.023 2.23141 22.8862 1.52818C23.3179 1.17649 23.6683 0.891991 23.9119 0.695626C23.9386 0.674135 23.9639 0.653738 23.9879 0.634457C24.1059 0.728748 24.2546 0.848492 24.4283 0.989007C24.8849 1.35844 25.5102 1.86853 26.1939 2.42996L26.1939 2.42996L28.2121 4.08707L14.4907 15.3531L7.56262 9.66476L7.24534 10.0512L7.56261 9.66475C5.57019 8.02896 3.75903 6.54019 2.44604 5.45938C1.78951 4.91894 1.25771 4.48063 0.890121 4.17698C0.851307 4.14492 0.814339 4.11437 0.77926 4.08537C0.859609 4.01871 0.949247 3.94447 1.04708 3.86356C1.49593 3.49233 2.1154 2.98211 2.79709 2.42258Z"
                      fill="#17384D"
                      stroke="white"
                    />
                  </svg>
                )}
              </section>
            </div>
          </div>
          <section className=" w-full justify-end flex">
            <span className="inline-flex justify-end items-center gap-2.5 border [background:#EFF5FF] px-2.5 py-1 rounded-lg border-solid border-[#99E4FF]  ">
              {completed}% Completed
            </span>
          </section>
        </div>
        <div className=" w-full h-[10px] bg-[#EFF5FF]">
          <div
            className="h-[10px] bg-[#172B4DD9]/85"
            style={{ width: `${completed}%` }} // Adjust `progress` dynamically as needed
          ></div>
        </div>
      </div>

      {/* Part Details - Conditionally Rendered */}
      {isExpanded && (
        <div
          className={`text-black text-justify [leading-trim:both] [text-edge:cap] text-[24px] font-normal leading-[44px] tracking-[-0.72px] capitalize p-4 space-y-4 `}
        >
          <div className={`flex items-center justify-between `}>
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M19.6693 14.8907L15.4067 12.048C15.2057 11.9139 14.972 11.8369 14.7307 11.8253C14.4893 11.8137 14.2494 11.8679 14.0365 11.9821C13.8235 12.0963 13.6456 12.2662 13.5218 12.4737C13.398 12.6812 13.3328 12.9184 13.3333 13.16V18.844C13.3333 19.0854 13.3988 19.3223 13.5228 19.5293C13.6469 19.7364 13.8248 19.9059 14.0376 20.0198C14.2505 20.1337 14.4902 20.1877 14.7314 20.176C14.9725 20.1642 15.2059 20.0873 15.4067 19.9533L19.6693 17.1107C19.8519 16.9889 20.0017 16.8239 20.1052 16.6304C20.2088 16.4369 20.263 16.2208 20.263 16.0013C20.263 15.7818 20.2088 15.5658 20.1052 15.3722C20.0017 15.1787 19.8519 15.0124 19.6693 14.8907Z"
                  stroke="url(#paint0_linear_1_141)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28 16C28 17.5759 27.6896 19.1363 27.0866 20.5922C26.4835 22.0481 25.5996 23.371 24.4853 24.4853C23.371 25.5996 22.0481 26.4835 20.5922 27.0866C19.1363 27.6896 17.5759 28 16 28C14.4241 28 12.8637 27.6896 11.4078 27.0866C9.95189 26.4835 8.62902 25.5996 7.51472 24.4853C6.40042 23.371 5.5165 22.0481 4.91345 20.5922C4.31039 19.1363 4 17.5759 4 16C4 12.8174 5.26428 9.76516 7.51472 7.51472C9.76516 5.26428 12.8174 4 16 4C19.1826 4 22.2348 5.26428 24.4853 7.51472C26.7357 9.76516 28 12.8174 28 16Z"
                  stroke="url(#paint1_linear_1_141)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_141"
                    x1="13.8747"
                    y1="11.8238"
                    x2="19.5592"
                    y2="11.8238"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3467AE" />
                    <stop offset="1" stop-color="#0C4969" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1_141"
                    x1="5.87499"
                    y1="4"
                    x2="25.5625"
                    y2="4"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3467AE" />
                    <stop offset="1" stop-color="#0C4969" />
                  </linearGradient>
                </defs>
              </svg>{" "}
              <h1 className="font-semibold">Video 1</h1>
            </span>
            <span>10:00</span>
          </div>
          <hr
            style={{
              width: "100%",
              height: "1px",
              opacity: 0.4,
              background:
                "linear-gradient(90deg, rgba(23, 43, 77, 0) 0%, #172B4D 49.54%, rgba(5, 68, 94, 0) 100%)",
              border: "none",
            }}
          />
          <div className="flex items-center py-[16px] justify-between">
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M10.9707 12C11.7027 10.4467 13.6773 9.33333 16 9.33333C18.9467 9.33333 21.3333 11.124 21.3333 13.3333C21.3333 15.2 19.6293 16.7667 17.3253 17.2093C16.6027 17.348 16 17.9293 16 18.6667M16 22.6667H16.0133M28 16C28 17.5759 27.6896 19.1363 27.0866 20.5922C26.4835 22.0481 25.5996 23.371 24.4853 24.4853C23.371 25.5996 22.0481 26.4835 20.5922 27.0866C19.1363 27.6896 17.5759 28 16 28C14.4241 28 12.8637 27.6896 11.4078 27.0866C9.95189 26.4835 8.62902 25.5996 7.51472 24.4853C6.40042 23.371 5.5165 22.0481 4.91345 20.5922C4.31039 19.1363 4 17.5759 4 16C4 12.8174 5.26428 9.76516 7.51472 7.51472C9.76516 5.26428 12.8174 4 16 4C19.1826 4 22.2348 5.26428 24.4853 7.51472C26.7357 9.76516 28 12.8174 28 16Z"
                  stroke="url(#paint0_linear_1_153)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_153"
                    x1="5.87499"
                    y1="4"
                    x2="25.5625"
                    y2="4"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3467AE" />
                    <stop offset="1" stop-color="#0C4969" />
                  </linearGradient>
                </defs>
              </svg>{" "}
              <h1 className="font-semibold">Article 1</h1>
            </span>
            <span>10:00</span>
          </div>
          <hr
            style={{
              width: "100%",
              height: "1px",
              opacity: 0.4,
              background:
                "linear-gradient(90deg, rgba(23, 43, 77, 0) 0%, #172B4D 49.54%, rgba(5, 68, 94, 0) 100%)",
              border: "none",
            }}
          />
          <div className="flex items-center py-[16px] justify-between">
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M10.9707 12C11.7027 10.4467 13.6773 9.33333 16 9.33333C18.9467 9.33333 21.3333 11.124 21.3333 13.3333C21.3333 15.2 19.6293 16.7667 17.3253 17.2093C16.6027 17.348 16 17.9293 16 18.6667M16 22.6667H16.0133M28 16C28 17.5759 27.6896 19.1363 27.0866 20.5922C26.4835 22.0481 25.5996 23.371 24.4853 24.4853C23.371 25.5996 22.0481 26.4835 20.5922 27.0866C19.1363 27.6896 17.5759 28 16 28C14.4241 28 12.8637 27.6896 11.4078 27.0866C9.95189 26.4835 8.62902 25.5996 7.51472 24.4853C6.40042 23.371 5.5165 22.0481 4.91345 20.5922C4.31039 19.1363 4 17.5759 4 16C4 12.8174 5.26428 9.76516 7.51472 7.51472C9.76516 5.26428 12.8174 4 16 4C19.1826 4 22.2348 5.26428 24.4853 7.51472C26.7357 9.76516 28 12.8174 28 16Z"
                  stroke="url(#paint0_linear_1_130)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_130"
                    x1="5.87499"
                    y1="4"
                    x2="25.5625"
                    y2="4"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3467AE" />
                    <stop offset="1" stop-color="#0C4969" />
                  </linearGradient>
                </defs>
              </svg>{" "}
              <h1 className="font-semibold">Quiz 1</h1>
            </span>
            <span>10:00</span>
          </div>
          <hr
            style={{
              width: "100%",
              height: "1px",
              opacity: 0.4,
              background:
                "linear-gradient(90deg, rgba(23, 43, 77, 0) 0%, #172B4D 49.54%, rgba(5, 68, 94, 0) 100%)",
              border: "none",
            }}
          />
          <div className="flex items-center py-[16px] justify-between">
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M13.3333 26.6667L18.6667 5.33333M24 10.6667L29.3333 16L24 21.3333M8 21.3333L2.66667 16L8 10.6667"
                  stroke="url(#paint0_linear_1_164)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_164"
                    x1="4.74999"
                    y1="5.33333"
                    x2="26.625"
                    y2="5.33333"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3467AE" />
                    <stop offset="1" stop-color="#0C4969" />
                  </linearGradient>
                </defs>
              </svg>{" "}
              <h1 className="font-semibold">Coding Exercise 1</h1>
             
            </span>
            <span>10:00</span>
          </div>
          <hr
            style={{
              width: "100%",
              height: "1px",
              opacity: 0.4,
              background:
                "linear-gradient(90deg, rgba(23, 43, 77, 0) 0%, #172B4D 49.54%, rgba(5, 68, 94, 0) 100%)",
              border: "none",
            }}
          />
          <div className="flex items-center py-[16px] justify-between">
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M10.6667 9.33333V20C10.6667 20.7072 10.9476 21.3855 11.4477 21.8856C11.9478 22.3857 12.6261 22.6667 13.3333 22.6667H21.3333M10.6667 9.33333V6.66667C10.6667 5.95942 10.9476 5.28115 11.4477 4.78105C11.9478 4.28095 12.6261 4 13.3333 4H19.448C19.8016 4.00008 20.1407 4.1406 20.3907 4.39067L26.276 10.276C26.5261 10.526 26.6666 10.8651 26.6667 11.2187V20C26.6667 20.7072 26.3857 21.3855 25.8856 21.8856C25.3855 22.3857 24.7072 22.6667 24 22.6667H21.3333M10.6667 9.33333H7.99999C7.29275 9.33333 6.61447 9.61428 6.11438 10.1144C5.61428 10.6145 5.33333 11.2928 5.33333 12V25.3333C5.33333 26.0406 5.61428 26.7189 6.11438 27.219C6.61447 27.719 7.29275 28 7.99999 28H18.6667C19.3739 28 20.0522 27.719 20.5523 27.219C21.0524 26.7189 21.3333 26.0406 21.3333 25.3333V22.6667"
                  stroke="url(#paint0_linear_1_175)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_175"
                    x1="6.99998"
                    y1="4"
                    x2="24.5"
                    y2="4"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3467AE" />
                    <stop offset="1" stop-color="#0C4969" />
                  </linearGradient>
                </defs>
              </svg>{" "}
           <h1 className="font-semibold">Combined Resource 1</h1>
            </span>
            <span>10:00</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartDetail;
