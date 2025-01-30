import BannerSection from "../UI/BannerSection";
import BannerDataEn_2 from "../../data/en/banner-2";

function BannerEn_2() {
  return (
    <div>
      {BannerDataEn_2.map((item) => (
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

export default BannerEn_2;