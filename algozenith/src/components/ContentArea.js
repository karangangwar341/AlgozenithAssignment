import React, { useState } from "react";
import ChapterList from "./ChapterList";
import PartList from "./PartList";

function ContentArea() {
  const [selectedChapter, setSelectedChapter] = useState(1);

  return (
    <div className="flex-1 p-8 border-[1px] bg-white rounded-[16px] space-y-[40px] border-[#A4E6FF] ">
      <div
        style={{
          borderRadius: "14.667px",
          background:
            "linear-gradient(180deg, #EFF5FF 0%, rgba(239, 245, 255, 0) 100%)",
        }}
        className="flex items-center w-fit space-x-4 mb-6 px-[10px] py-[10px]"
      >
         <button
          onFocus={(e) => e.currentTarget.style.boxShadow = '0px 3px 6px rgba(41, 83, 155, 0.3)'}
          onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
          className={`inline-flex justify-center items-center gap-3 focus:[background:#FFF] focus:shadow-[0px_3.667px_3.667px_0px_rgba(41,83,155,0.30)] px-5 py-3 rounded-[11px] text-[22px] focus:font-semibold focus:border-[0.917px] border-solid border-[#05445E]`}
        >  {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
          >
            <path
              d="M10.6667 9.83333V4.5M21.3333 9.83333V4.5M9.33333 15.1667H22.6667M6.66667 28.5H25.3333C26.0406 28.5 26.7189 28.219 27.219 27.719C27.719 27.2189 28 26.5406 28 25.8333V9.83333C28 9.12609 27.719 8.44781 27.219 7.94772C26.7189 7.44762 26.0406 7.16667 25.3333 7.16667H6.66667C5.95942 7.16667 5.28115 7.44762 4.78105 7.94772C4.28095 8.44781 4 9.12609 4 9.83333V25.8333C4 26.5406 4.28095 27.2189 4.78105 27.719C5.28115 28.219 5.95942 28.5 6.66667 28.5Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Mentor Sessions
        </button>
        <button
          onFocus={(e) => e.currentTarget.style.boxShadow = '0px 3px 6px rgba(41, 83, 155, 0.3)'}
          onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
          className={`inline-flex justify-center items-center focus:font-semibold gap-3 focus:[background:#FFF] text-[22px] focus:shadow-[0px_3.667px_3.667px_0px_rgba(41,83,155,0.30)] px-5 py-3 rounded-[11px] focus:border-[0.917px] border-solid border-[#05445E]`}
        > 
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
          >
            <path
              d="M28 18.1733C24.1873 19.715 20.1126 20.505 16 20.5C11.756 20.5 7.70667 19.6733 4 18.1733M21.3333 8.49999V5.83332C21.3333 5.12608 21.0524 4.4478 20.5523 3.9477C20.0522 3.44761 19.3739 3.16666 18.6667 3.16666H13.3333C12.6261 3.16666 11.9478 3.44761 11.4477 3.9477C10.9476 4.4478 10.6667 5.12608 10.6667 5.83332V8.49999M16 16.5H16.0133M6.66667 27.1667H25.3333C26.0406 27.1667 26.7189 26.8857 27.219 26.3856C27.719 25.8855 28 25.2072 28 24.5V11.1667C28 10.4594 27.719 9.78114 27.219 9.28104C26.7189 8.78094 26.0406 8.49999 25.3333 8.49999H6.66667C5.95942 8.49999 5.28115 8.78094 4.78105 9.28104C4.28095 9.78114 4 10.4594 4 11.1667V24.5C4 25.2072 4.28095 25.8855 4.78105 26.3856C5.28115 26.8857 5.95942 27.1667 6.66667 27.1667Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Learning Material
        </button>
      </div>
      <hr style={{
  opacity: 0.4,
  backgroundColor: '#A4E6FF',
  height: '1px',
  border: 'none'
}} />

      <div className="flex">
        <ChapterList
          selectedChapter={selectedChapter}
          setSelectedChapter={setSelectedChapter}
        />
        <PartList selectedChapter={selectedChapter} />
      </div>
    </div>
  );
}

export default ContentArea;
