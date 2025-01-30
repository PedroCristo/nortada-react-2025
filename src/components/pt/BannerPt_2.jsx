import BannerSection from "../UI/BannerSection";
import BannerDataPt_2 from "../../data/pt/banner-2";

function BannerPt_2() {
  return (
    <div>
      {BannerDataPt_2.map((item) => (
        <BannerSection
          key={item.id}
          banner_title={item.banner_title}
          banner_content={item.banner_content}
          banner_bg={"banner-bg-2"}
        />
      ))}
    </div>
  );
}

export default BannerPt_2;
