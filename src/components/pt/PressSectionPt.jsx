import React from "react";
import PressSection from "../UI/PressSection"; // Import the PressSection component
import PressSectionDataPt from "../../data/pt/press-section"; // Import the Portuguese data

function PressSectionPt() {
    return(
        <PressSection data={PressSectionDataPt} />  
    )
}

export default PressSectionPt;