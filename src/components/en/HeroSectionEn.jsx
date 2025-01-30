import HeroSection from "../UI/HeroSection";
import HeroSectionDataEn from "../../data/en/HeroSection";

function HeroSectionEn() {
  return (
    <div>
      {HeroSectionDataEn.map((item) => (
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

export default HeroSectionEn;
