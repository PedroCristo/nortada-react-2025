import PrivacyCookiesPolicy from "../UI/PrivacyAndCokiesPolicy";
import privacyPolicyDataEn from "../../data/en/Privacy-policy";
import cookiesPolicyDataEn from "../../data/en/cookies-policy";

function PrivacyCokiesPolicyEn() {
    return (
        <div>
            <PrivacyCookiesPolicy
                privacyPolicyDataPT={privacyPolicyDataEn}  
                cookiesPolicyDataPt={cookiesPolicyDataEn} 
                policy_title={"Privacy Policy"} 
            />
        </div>
    );
}

export default PrivacyCokiesPolicyEn;