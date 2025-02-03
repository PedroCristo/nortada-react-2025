import { useEffect, useState } from "react";

export function useChristmasMessage(christmasMessages = {}) {
  const { 
    christmasGreeting = "Desejamos a todos os nossos clientes e colaboradores um Feliz Natal e um próspero Ano Novo",
    newYearGreeting = "Desejamos a todos os nossos clientes e colaboradores um próspero Ano Novo"
  } = christmasMessages;

  const [message, setMessage] = useState("");
  const [christmasStyle, setChristmasStyle] = useState("none");
  const [opacityStyle, setOpacityStyle] = useState("0");
  const [positionStyle, setPositionStyle] = useState("absolute");
  const [widthStyle, setWidthStyle] = useState("50%");

  useEffect(() => {
    const dt = new Date();
    const tm = dt.getMonth();
    const tda = dt.getDate();
    const currentYear = dt.getFullYear();

    let displayMessage = "";
    let displayStyle = "none";
    let opacity = "0";
    let position = "absolute";
    let width = "0";

    if ((tm === 11 && tda >= 10) || (tm === 0 && tda <= 10)) {
      displayMessage =
        tm === 11
          ? `${christmasGreeting} de ${currentYear + 1}`
          : `${newYearGreeting} de ${currentYear}`;

      displayStyle = "block";
      opacity = "1";
      position = "absolute";
      width = "50%";
    }

    // Fade-in effect after 6 seconds
    setTimeout(() => {
      setMessage(displayMessage);
      setChristmasStyle(displayStyle);
      setOpacityStyle(opacity);
      setPositionStyle(position);
      setWidthStyle(width);
    }, 0);
  }, [christmasMessages]);

  return {
    message,
    christmasStyle,
    opacityStyle,
    positionStyle,
    widthStyle,
  };
}
