import BannerSection from "../UI/BannerSection";
import BannerDataEn_1 from "../../data/en/banner-1";

function BannerEn_1() {
  return (
    <div>
      {BannerDataEn_1.map((item) => (
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

export default BannerEn_1;