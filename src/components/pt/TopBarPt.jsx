import TopBar from "../UI/TopBar";
import TopBarDataPT from "../../data/pt/top-bar";

function TopBarPt() {
  return (
    <div>
      {TopBarDataPT.map((item) => (
        <TopBar 
          key={item.id}
          phone_number={item.phone_number}
          shedule={item.shedule}
          lang1="PT" 
          lang2="EN" 
          langUrl="/home-en" 
        />
      ))}
    </div>
  );
}

export default TopBarPt;
