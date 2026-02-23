import Image from "next/image";
import { useCallback, useEffect } from "react";

const WinList = ({ className, children, list, focusedItem, setFocusedItem, ...props }) => {
  function focusClassName(id, focus) {
    if (focus == -id - 1) return "bg-[#7b7b7b] text-white";
    if (focus == id + 1) return "bg-[#00007b] text-white";
    return "text-black";
  }

  return (
    <div className={"shadow-w98-pressed bg-white " + className}>
      <div className="p-0.5 w-full h-full">
        <div
          onClickCapture={() => {
            setFocusedItem(0);
          }}
          className="h-full"
          {...props}
        >
          {list.map((item, i) => (
            <div
              key={i + 1}
              onClickCapture={() => {
                setFocusedItem(i + 1);
              }}
              onClick={() => {
                setFocusedItem(i + 1);
              }}
              className={focusClassName(i, focusedItem)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WinList;
