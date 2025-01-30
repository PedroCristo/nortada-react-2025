import PrivacyCookiesPolicy from "../UI/PrivacyAndCokiesPolicy";
import privacyPolicyDataPT from "../../data/pt/privacy-policy";
import cookiesPolicyDataPt from "../../data/pt/cookies-policy";

function PrivacyCokiesPolicyPt() {
    return (
        <div>
            <PrivacyCookiesPolicy
                privacyPolicyDataPT={privacyPolicyDataPT}  
                cookiesPolicyDataPt={cookiesPolicyDataPt} 
                policy_title={"Política de Privacidade"} 
            />
        </div>
    );
}

export default PrivacyCokiesPolicyPt;