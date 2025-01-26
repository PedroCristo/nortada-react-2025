import AboutSection from "../UI/AboutSection";
import AboutsectionDataPt from "../../data/pt/about-section";

function AboutSectionPt() {
  return (
    <div>
      {AboutsectionDataPt.map((item) => (
        <AboutSection 
        key={item.id} 
        section_title={item.section_title} 
        paragraph_1={item.paragraph_1}
        paragraph_2={item.paragraph_2}
        paragraph_3={item.paragraph_3}
        paragraph_4={item.paragraph_4}
        paragraph_5={item.paragraph_5}
        />
      ))}
    </div>
  );
}

export default AboutSectionPt;
