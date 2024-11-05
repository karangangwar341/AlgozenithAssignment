import React from "react";

function ChapterList({ selectedChapter, setSelectedChapter }) {
  const chapters = [
    { id: 1, title: "Chapter 1", duration: "05:00:00" },
    { id: 2, title: "Chapter 2", duration: "03:30:00" },
    { id: 3, title: "Chapter 3", duration: "02:45:00" },
    { id: 4, title: "Chapter 4", duration: "05:00:00" },
    { id: 5, title: "Chapter 5", duration: "03:30:00" },
    
    // Additional chapters
  ];

  return (
    <div className="w-auto px-4">
      {chapters.map((chapter) => (
        <div>
          <div
            key={chapter.id}
            className={`rounded-[8px] focus:bg-[#EFF5FF] gap-[44px] flex items-center justify-between cursor-pointer px-[16px] py-[25px] ${
              selectedChapter === chapter.id ? "bg-[#EFF5FF]" : ""
            }`}
            onClick={() => setSelectedChapter(chapter.id)}
          >
            <span className="text-[24px] text-nowrap font-medium text-black">
              {chapter.title}
            </span>
            <div className="flex w-auto items-center justify-end pl-6 gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M16 10.6667V16L20 20M28 16C28 17.5759 27.6896 19.1363 27.0866 20.5922C26.4835 22.0481 25.5996 23.371 24.4853 24.4853C23.371 25.5996 22.0481 26.4835 20.5922 27.0866C19.1363 27.6896 17.5759 28 16 28C14.4241 28 12.8637 27.6896 11.4078 27.0866C9.95189 26.4835 8.62902 25.5996 7.51472 24.4853C6.40042 23.371 5.5165 22.0481 4.91345 20.5922C4.31039 19.1363 4 17.5759 4 16C4 12.8174 5.26428 9.76516 7.51472 7.51472C9.76516 5.26428 12.8174 4 16 4C19.1826 4 22.2348 5.26428 24.4853 7.51472C26.7357 9.76516 28 12.8174 28 16Z"
                  stroke="#608AD2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="text-[#608AD2]  text-[22px]">
                {chapter.duration}
              </span>
            </div>
          </div>

          <hr className="mb-4"
            style={{
              width: "100%",
              height: "1px",
              opacity: 0.4,
              background:
                "linear-gradient(90deg, rgba(23, 43, 77, 0) 0%, #A4E6FF 49.54%, rgba(5, 68, 94, 0) 100%)",
              border: "none",
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default ChapterList;
