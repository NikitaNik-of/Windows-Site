import React, { useState } from "react";
import WinButton from "./WinButton";


const Tabs = ({ tabList = ["Tab 1", "Tab 2", "Tab 4"], tabContentList = [<div className="bg-amber-400">а</div>, "ху", "еть"], className }) => {
  const [curTab, setCurTab] = useState(0)
  function selectTab(i) {
    setCurTab(i)
  }

  return (
    <div className={className}>
      <div className="flex -mb-0.5">
        {tabList.map((tab, i) => (
          <WinButton onClick={() => selectTab(i)} key={i} state={curTab == i ? "tabSel" : "tab"}>{tab}</WinButton>
        ))}
      </div>
      <div className="shadow-w98-def p-2 min-h-fit">
        {tabContentList.map((tabCont, i) => (
          (curTab == i) ? <div key={i}>{tabCont}</div> : null
        ))}
      </div>
    </div>
  );
};

export default Tabs;
