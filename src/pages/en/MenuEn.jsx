import TopBarEn from "../../components/en/TopBarEn";
import HeaderEn from "../../components/en/HeaderEn";
import HeaderMenu from "../../components/UI/HeaderMenu";
import MenuSectionEn from "../../components/en/MenuSectionEn";
import FooterEn from "../../components/en/FooterEn";
import CookiesAlertEn from "../../components/en/CookiesAlertEn";

function MenuEn() {
    return(
        <div>
            <TopBarEn />
            <HeaderEn />
            <HeaderMenu menu_title={"Menu"} />
            <MenuSectionEn />
            <FooterEn />
            <CookiesAlertEn />
        </div>
    )
}

export default MenuEn;