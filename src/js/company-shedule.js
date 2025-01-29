import React, { useEffect, useState } from "react";

export default function companySchedulePt() {
  const [schedule, setSchedule] = useState({
    isOpen: false,
    message: "",
    color: "",
  });

  useEffect(() => {
    const dt = new Date();
    const th = dt.getHours() + dt.getMinutes() / 60; // Get precise time
    const td = dt.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    let message = "";
    let color = "";

    if (td === 2) { // Tuesday (Terça-feira)
      message = "Estamos encerrados às Terças";
      color = "#CE3333";
    } else if (td === 3 || td === 4 || td === 5 || td === 6 || td === 0 || td === 1) { 
      // Open Wednesday to Monday from 12:00 to 22:30
      if (th >= 12 && th < 22.5) {
        message = "Estamos Abertos";
        color = "#15EB07";
      } else {
        message = "Estamos Encerrados";
        color = " #f70000";
      }
    }

    setSchedule({
      isOpen: th >= 12 && th < 22.5 && td !== 2, // Open if within hours and not Tuesday
      message,
      color,
    });
  }, []);

  return schedule;
}

export function useChristmasMessage() {
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

    let christmasMessage = "";
    let displayStyle = "none";
    let opacity = "0";
    let position = "absolute";
    let width = "0%";

    if ((tm === 11 && tda >= 10) || (tm === 0 && tda <= 10)) {
      christmasMessage =
        tm === 11
          ? `Desejamos a todos os nossos clientes e colaboradores um Feliz Natal e um próspero Ano Novo de ${currentYear + 1}`
          : `Desejamos a todos os nossos clientes e colaboradores um próspero Ano Novo de ${currentYear}`;

      // Show Christmas message
      displayStyle = "block";
      opacity = "1";
      position = "relative";
      width = "100%";
    }

    // Fade-in effect after 6 seconds
    setTimeout(() => {
      setMessage(christmasMessage);
      setChristmasStyle(displayStyle);
      setOpacityStyle(opacity);
      setPositionStyle(position);
      setWidthStyle(width);
    }, 6000);
  }, []);

  return {
    message,
    christmasStyle,
    opacityStyle,
    positionStyle,
    widthStyle,
  };
}
