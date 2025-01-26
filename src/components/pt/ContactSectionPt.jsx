import ContactSection from "../UI/ContactSection";
import ContactDataPt from "../../data/pt/contact-section";
import FormDataPt from "../../data/pt/form";

function ContactSectionPt() {
  return (
    <div>
      {ContactDataPt.map((item) => (
        <ContactSection
          key={item.id}
          section_title={item.section_title}
          sub_title={item.sub_title}
          location_title={item.location_title}
          location={item.location}
          openHours_title={item.openHours_title}
          openHours={item.openHours}
          email_title={item.email_title}
          email={item.email}
          phone_title={item.phone_title}
          phone={item.phone}
          phone_note={item.phone_note}
          form_error={item.form_error}
          FormData={FormDataPt}
          />
        ))}
    </div>
  );
}

export default ContactSectionPt;

