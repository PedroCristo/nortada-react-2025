import React, { useEffect } from "react";

function Preloader() {
  useEffect(() => {
    const preloader = document.querySelector("#preloader");

    const removePreloader = () => {
      setTimeout(() => {
        preloader?.remove();
      }, 2000); // Delay of 2 seconds (2000ms) before removing the preloader
    };

    window.addEventListener("load", removePreloader);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("load", removePreloader);
    };
  }, []);

  return (
    <div
      id="preloader"
      className="d-flex justify-content-center align-items-center"
    >
      <img
        src="/images/extras/nortada_logo_no_bg.png"
        alt="Nortada Logo"
        className="img-fluid w-25"
      />
    </div>
  );
}

export default Preloader;
