import TopBarPt from "../../components/pt/TopBarPt";
import HeaderPt from "../../components/pt/HeaderPt";
import HeaderMenu from "../../components/UI/HeaderMenu";
import MenuSectionPt from "../../components/pt/MenuSectionPt";
import Footer_Pt from "../../components/pt/Footer_Pt";
import CookiesAlertPt from "../../components/pt/CookiesAlertPt";

function MenuPt() {
  return (
    <div>
      <TopBarPt />
      <HeaderPt />
      <HeaderMenu menu_title={"Ementa"} />
      <MenuSectionPt />
      <Footer_Pt />
      <CookiesAlertPt />
    </div>
  );
}

export default MenuPt;
