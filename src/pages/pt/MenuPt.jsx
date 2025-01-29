import TopBarPt from "../../components/pt/TopBarPt";
import HeaderPt from "../../components/pt/HeaderPt";
import HeaderMenuPt from "../../components/pt/HeaderMenuPt";
import MenuSection from "../../components/UI/MenuSection";
import FooterPt from "../../components/pt/fOOTERpT.JSX";
import CookiesAlertPt from "../../components/pt/CookiesAlertPt";

function MenuPt() {
  return (
    <div>
      <TopBarPt />
      <HeaderPt />
      <HeaderMenuPt />
      <MenuSection />
      <FooterPt />
      <CookiesAlertPt />
    </div>
  );
}

export default MenuPt;
