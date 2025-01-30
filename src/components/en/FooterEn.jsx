import Footer from "../UI/Footer";

function FooterEn() {
    return(
        <div>
            <Footer 
                copy_1={"Restaurant Nortada"}
                copy_2={"All Rights Reserved"}
                policy_url={"/privacy-policy-cookies"}
                policy_name={"Privacy Policy"} 
                cookies_url={"/privacy-policy-cookies#cookies"}
                cookies_name={"Cookies"}
            />
        </div>
    );
}

export default FooterEn;
