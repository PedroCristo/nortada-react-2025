import React, { useState } from "react";
import Header from "../UI/Header";
import HeaderNavDataPt from "../../data/pt/header-navabr";
import { useChristmasMessage } from "../../js/christmas-alert";

function HeaderPt() {
  const [showChristmasMessage, setShowChristmasMessage] = useState(true);

  // Chama o hook com mensagens traduzidas
  const christmasData = useChristmasMessage({
    christmasGreeting: "Desejamos a todos os nossos clientes e colaboradores um Feliz Natal e um próspero Ano Novo",
    newYearGreeting: "Desejamos a todos os nossos clientes e colaboradores um próspero Ano Novo",
  });

  return (
    <div>
      <Header 
        HeaderNavDataPt={HeaderNavDataPt} 
        initialVisibility={showChristmasMessage}
        christmasData={christmasData} // Passa os dados da mensagem traduzida
        langUrl={"/home-en"}  
        lang1={"PT"}  
        lang2={"EN"} 
      />
    </div>
  );
}

export default HeaderPt;

