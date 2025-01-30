import TopBarEn from "../../components/en/TopBarEn";
import HeaderEn from "../../components/en/HeaderEn";
import HeaderMenu from "../../components/UI/HeaderMenu";
import PrivacyCokiesPolicyEn from "../../components/en/PrivacyAndCookiesPolicyEn";
import FooterEn from "../../components/en/FooterEn";
import CookiesAlertEn from "../../components/en/CookiesAlertEn";

function PrivacyCokkiesPolicyEn() {
  return (
    <div>
      <TopBarEn />
      <HeaderEn />
      <HeaderMenu menu_title={"Privacy Policy"} />
      <PrivacyCokiesPolicyEn />
      <FooterEn />
      <CookiesAlertEn />
    </div>
  );
}

export default PrivacyCokkiesPolicyEn;
