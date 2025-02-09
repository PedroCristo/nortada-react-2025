import MenuSection from "../UI/MenuSection";

function MenuSectionPt() {
  return (
    <div>
      <MenuSection
        menu_title={"Ementa"}
        menu_sub_title={"Veja o Nosso Delicioso Menu"}
        menu_all={"Todas"}
        menu_menu={"Ementa"}
        menu_desserts={"Sobremesas"}
        menu_wines={"Vinhos"}
        // useFetchData={import.meta.env.VITE_FETCH_DATA_URL_PT}
        useFetchData={"https://docs.google.com/spreadsheets/d/e/2PACX-1vTPJA7vmjwDky-uUikoorHjU5KhYhmAZ1T3LZadewBBAeu8IXjRetwGJpAwQDJrS6yvCx73u7u6uxWa/pub?output=csv"}
      />
    </div>
  );
}

export default MenuSectionPt;
