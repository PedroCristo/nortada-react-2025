import CookieAlert from "../UI/extras/CookiesAlert";

function CookiesAlertPt() {
  const handleAccept = () => {
    console.log("Cookies accepted!");
    // Add logic to set a cookie or save user preference
  };

  const handleDecline = () => {
    console.log("Cookies declined!");
    // Add logic to handle declined cookies
  };

  return (
    <div>
      {/* Portuguese Version */}
      <CookieAlert
        message={
          "Utilizamos pequenos arquivos de texto denominados cookies, para fins de navegação,\
           performance, funcionalidade e marketing. Ao pressionar “Aceitar” está a consentir o\
           alojamento de cookies do nosso website no seu computador ou dispositivo móvel."
        }
        acceptButtonText={"Aceitar"}
        declineButtonText={"Recusar"}
        onAccept={handleAccept}
        onDecline={handleDecline}
      />
    </div>
  );
}

export default CookiesAlertPt;
