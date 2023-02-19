import React from "react";

const Icons = ({ setContent, content }) => {
  const reactions = [
    "🙂",
    "😅",
    "😂",
    "🤣",
    "😊",
    "☺️",
    "😌",
    "😉",
    "😏",
    "😍",
    "😘",
    "😗",
    "😙",
    "😚",
    "🤗",
    "😳",
    "😖",
    "🙃",
    "😇",
    "😛",
    "😝",
    "😜",
    "😋",
    "🤤",
    "🤓",
    "😎",
    "🤑",
    "😒",
    "🙁",
    "☹️",
    "😔",
    "😡",
    "😰",
    "😑",
    "😟",
    "😯",
    "😴",
    "🤡",
    "😈",
    "😣",
    "😲",
    "😫",
    "😕",
    "💀",
    "👹",
    "😭",
    "😢",
    "😓",
    "😐",
    "🤐",
    "😶",
    "😷",
    "😞",
    "🤒",
    "😠",
    "🤧",
    "💩",
    "🎃",
    "😧",
    "👿",
    "🤠",
    "🤢",
    "😱",
    "👻",
    "😨",
    "😩",
    "🤔",
    "😬",
    "🤥",
    "🤖",
    "👾",
    "😪",
    "🙄",
    "😤",
    "👽",
    "🤕",
    "😵",
    "👺",
  ];

  return (
    <div className="nav-item dropdown relative ">
      <span
        className="nav-link  px-1"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span style={{ opacity: 1 }}>🙂</span>
      </span>

      <div
        className="dropdown-menu absolute h-[300px] w-[340px] overflow-y-auto mr-[260px] mb-[10px]"
        aria-labelledby="navbarDropdown"
      >
        <div className="reactions">
          {reactions.map((icon) => (
            <span key={icon} onClick={() => setContent(content + icon)}>
              {icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Icons;
