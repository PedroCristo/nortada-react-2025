import HeroSection from "../UI/HeroSection";
import HeroSectionDataPt from "../../data/pt/hero-sectio";

function HeroSectionPt() {
  return (
    <div>
      {HeroSectionDataPt.map((item) => (
        <HeroSection
          key={item.id}
          title={item.title}
          sub_title={item.sub_title}
          btn_menu_link={item.btn_menu_link}
          btn_menu={item.btn_menu}
          btn_booking_link={item.btn_booking_link}
          btn_booking={item.btn_booking}
        />
      ))}
    </div>
  );
}

export default HeroSectionPt;
