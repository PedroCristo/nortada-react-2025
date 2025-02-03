import TopBar from "../UI/TopBar";
import TopBarDataEN from "../../data/en/top-bar";
import companySchedule from "../../js/company-shedule";

const scheduleMessagesEN = {
  tuesdayClosed: "We Are closed on Tuesdays",
  open: "We are Open",
  closed: "We are Closed",
};

function TopBarEn() {
  const dynamically_schedule = companySchedule(scheduleMessagesEN);

  return (
    <div>
      {TopBarDataEN.map((item) => (
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
