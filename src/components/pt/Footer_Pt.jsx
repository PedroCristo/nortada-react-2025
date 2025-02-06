import Footer from "../UI/Footer";

function Footer_Pt() {
    return(
        <div>
            <Footer 
                copy_1={"Restaurante Nortada"}
                copy_2={"Todos os Direitos Reservados"}
                policy_url={"/política-de-privacidade-e-cookies"}
                policy_name={"Política de Privacidade"} 
                cookies_url={"/política-de-privacidade-e-cookies#cookies"}
                cookies_name={"Cookies"}
            />
        </div>
    );
}

export default Footer_Pt;