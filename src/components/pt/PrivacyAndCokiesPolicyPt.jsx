import PrivacyCookiesPolicy from "../UI/PrivacyAndCokiesPolicy";
import privacyPolicyDataPT from "../../data/pt/Privacy-cookies-policy";

function PrivacyCokiesPolicyPt() {
    return (
        <div>
            <PrivacyCookiesPolicy
                privacyPolicyDataPT={privacyPolicyDataPT}  // Pass the prop as expected
            />
        </div>
    );
}

export default PrivacyCokiesPolicyPt;