import TopBar from "../UI/TopBar";
import TopBarDataPT from "../../data/pt/top-bar";
import companySchedulePt from "../../js/company-shedule";

function TopBarPt() {
  const dynamically_schedule = companySchedulePt()
  return (
    <div>
      {TopBarDataPT.map((item) => (
        <TopBar 
          key={item.id}
          phone_number={item.phone_number}
          time_shedule={item.time_shedule}
          lang1="PT" 
          lang2="EN" 
          langUrl="/home-en" 
          dynamically_schedule={dynamically_schedule}
        />
      ))}
    </div>
  );
}

export default TopBarPt;
