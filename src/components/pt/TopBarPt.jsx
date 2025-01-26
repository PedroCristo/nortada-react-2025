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
          lang="pt" // You can also replace this with a dynamic value
        />
      ))}
    </div>
  );
}

export default TopBarPt;
