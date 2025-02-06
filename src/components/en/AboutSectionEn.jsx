import AboutSection from "../UI/AboutSection";
import AboutsectionDataEn from "../../data/en/about-section";

function AboutSectionEn() {
  return (
    <div>
      {AboutsectionDataEn.map((item) => (
        <AboutSection 
        key={item.id} 
        section_title={item.section_title} 
        sub_title={item.sub_title}
        paragraph_1={item.paragraph_1}
        paragraph_2={item.paragraph_2}
        paragraph_3={item.paragraph_3}
        paragraph_4={item.paragraph_4}
        paragraph_5={item.paragraph_5}
        paragraph_6={item.paragraph_6}
        />
      ))}
    </div>
  );
}

export default AboutSectionEn;