import FormSection from "../UI/FormSection";
import FormDataPt from "../../data/pt/form";

function FormSectionPt(){
  return (
    <div>
      {FormDataPt.map((item) => (
        <FormSection
          key={item.id}
          form_name={item.form_name}
          form_email={item.form_email}
          form_subject={item.form_subject}
          form_message={item.form_message}
          form_sent_menssage={item.form_sent_menssage}
          form_btn={item.form_btn}
          recaptcha_menssage={item.recaptcha_menssage}
          recaptcha_lang={item.recaptcha_lang}
        />
      ))}
    </div>
  );
}

export default FormSectionPt;

