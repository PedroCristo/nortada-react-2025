import ContactSection from "../UI/ContactSection";
import ContactDataEn from "../../data/en/contact-section";
import FormDataEn from "../../data/en/form";

function ContactSectionEn() {
  return (
    <div>
      {ContactDataEn.map((item) => (
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
          FormData={FormDataEn}
          />
        ))}
    </div>
  );
}

export default ContactSectionEn;