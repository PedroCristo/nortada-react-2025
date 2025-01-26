import FormSection from "../UI/FormSection";

function FormSectionPt( { FormData }){
  return (
    <div>
      {FormData.map((item) => (
        <FormSection
          key={item.id}
          recaptcha_menssage={item.recaptcha_menssage}
          form_name={item.form_name}
          form_email={item.form_email}
          form_subject={item.form_subject}
          form_message={item.form_message}
          form_sent_menssage={item.form_sent_menssage}
          form_btn={item.form_btn}
        />
      ))}
    </div>
  );
}

export default FormSectionPt;

