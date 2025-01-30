import TopBar from "../UI/TopBar";
import TopBarDataEn from "../../data/en/top-bar";
import companySchedulePt from "../../js/company-shedule";

function TopBarEn() {
  const dynamically_schedule = companySchedulePt()
  return (
    <div>
      {TopBarDataEn.map((item) => (
        <TopBar 
          key={item.id}
          phone_number={item.phone_number}
          time_shedule={item.time_shedule}
          lang1="EN" 
          lang2="PT" 
          langUrl="/" 
          dynamically_schedule={dynamically_schedule}
        />
      ))}
    </div>
  );
}

export default TopBarEn;