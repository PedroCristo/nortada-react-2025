import BannerSection from "../UI/BannerSection";
import BannerDataPt_1 from "../../data/pt/banner-1";

function BannerPt_1() {
  return (
    <div>
      {BannerDataPt_1.map((item) => (
        <BannerSection
          key={item.id}
          banner_title={item.banner_title}
          banner_content={item.banner_content}
          banner_bg={"banner-bg-1"}
        />
      ))}
    </div>
  );
}

export default BannerPt_1;
