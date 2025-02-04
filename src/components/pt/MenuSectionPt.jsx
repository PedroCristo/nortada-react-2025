import MenuSection from "../UI/MenuSection";

function MenuSectionPt() {
  return (
    <div>
      <MenuSection
        menu_title={"O Nosso Menu"}
        menu_sub_title={"Veja o Nosso Delicioso Menu"}
        menu_all={"Todas"}
        menu_menu={"Ementa"}
        menu_desserts={"Sobremesas"}
        menu_wines={"Vinhos"}
        useFetchData={import.meta.env.VITE_FETCH_DATA_URL_PT}
      />
    </div>
  );
}

export default MenuSectionPt;
