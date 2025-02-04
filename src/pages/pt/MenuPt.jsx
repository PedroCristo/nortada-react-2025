import TopBarPt from "../../components/pt/TopBarPt";
import HeaderPt from "../../components/pt/HeaderPt";
import HeaderMenu from "../../components/UI/HeaderMenu";
import MenuSectionPt from "../../components/pt/MenuSectionPt";
import FooterPt from "../../components/pt/fOOTERpT.JSX";
import CookiesAlertPt from "../../components/pt/CookiesAlertPt";

function MenuPt() {
  return (
    <div>
      <TopBarPt />
      <HeaderPt />
      <HeaderMenu menu_title={"Ementa"} />
      <MenuSectionPt />
      <FooterPt />
      <CookiesAlertPt />
    </div>
  );
}

export default MenuPt;
