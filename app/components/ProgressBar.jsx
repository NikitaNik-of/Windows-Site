import React, { useRef } from "react";

const ProgressBar = ({ current, goal, width = 128, height = 16, barColor, className }) => {

  function blocks(now = 0, goal = 1, width = 128, height = 16) {
    if (now > goal) now = goal;

    var blockZones = Math.floor((width - 6) / (height - 5));

    var progress = Math.floor((now / goal) * blockZones);
    // console.log(progress, blockZones);
    
    return(
      <>
        {Array(progress).fill(1).map((_, i) => (
          <div key={i} style={{background: barColor || "#00007b"}} className="grow h-full"></div>
        ))}
        {Array(blockZones - progress).fill(1).map((_, i) => (
          <div key={i} className="bg-transparent grow h-full"></div>
        ))}
      </>
    )
  }

  return (
    <div className={className + " h-4 bg-white min-w-32 p-0.75 shadow-w98-pressed flex gap-px"}>
      {blocks(current, goal, width, height)}
    </div>
  );
};

export default ProgressBar;
