import React, { useState } from "react";
import Header from "../UI/Header";
import HeaderNavDataEn from "../../data/en/header-nav";
import { useChristmasMessage } from "../../js/christmas-alert";

function HeaderEn() {
  const [showChristmasMessage, setShowChristmasMessage] = useState(true);

  // Call the hook with translated messages
  const christmasData = useChristmasMessage({
    christmasGreeting: "We wish all our customers and employees a Merry Christmas and a Happy New Year",
    newYearGreeting: "We wish all our customers and employees a prosperous New Year",
  });

  return (
    <div>
      <Header 
        HeaderNavDataPt={HeaderNavDataEn} 
        initialVisibility={showChristmasMessage}
        christmasData={christmasData}  // Pass the translated message data
      />
    </div>
  );
}

export default HeaderEn;
