import TopBarPt from "../../components/pt/TopBarPt";
import HeaderPt from "../../components/pt/HeaderPt";
import HeaderMenu from "../../components/UI/HeaderMenu";
import Footer_Pt from "../../components/pt/Footer_Pt";
import CookiesAlertPt from "../../components/pt/CookiesAlertPt";
import PrivacyCokiesPolicyPt from "../../components/pt/PrivacyAndCokiesPolicyPt";

function PrivacyCokkiesPolicyPt() {
  return (
    <div>
      <TopBarPt />
      <HeaderPt />
      <HeaderMenu menu_title={"Política de Privacidade e Cookies"}/>
      <PrivacyCokiesPolicyPt />
      <Footer_Pt />
      <CookiesAlertPt />
    </div>
  );
}

export default PrivacyCokkiesPolicyPt;