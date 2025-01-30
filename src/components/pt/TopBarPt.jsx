import TopBar from "../UI/TopBar";
import TopBarDataPT from "../../data/pt/top-bar";
import companySchedule from "../../js/company-shedule";

const scheduleMessagesPT = {
  tuesdayClosed: "Estamos encerrados às Terças",
  open: "Estamos Abertos",
  closed: "Estamos Encerrados",
};

function TopBarPt() {
  const dynamically_schedule = companySchedule(scheduleMessagesPT) || { message: "", color: "" };

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

