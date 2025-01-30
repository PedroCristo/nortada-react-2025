import CookieAlert from "../UI/extras/CookiesAlert";

function CookiesAlertEn() {
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
      {/* English Version */}
      <CookieAlert
        message={
          "We use small text files called cookies for navigation, performance, functionality, and marketing purposes.\
           By clicking 'Accept', you consent to the storage of cookies from our website on your computer or mobile device."
        }
        acceptButtonText={"Accept"}
        declineButtonText={"Decline"}
        onAccept={handleAccept}
        onDecline={handleDecline}
        policy_name={"Privacy Policy"}
        policy_url={"/privacy-policy-and-cookies"}
      />
    </div>
  );
}

export default CookiesAlertEn;
