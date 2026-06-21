import MenuSection from "../UI/MenuSection";

function MenuSectionEn() {
  return (
    <div>
      <MenuSection
        menu_title={"Our Menu"}
        menu_sub_title={"Check Out Our Delicious Menu"}
        menu_all={"All"}
        menu_menu={"Menu"}
        menu_desserts={"Desserts"}
        menu_wines={"Wines"}
        useFetchData={import.meta.env.VITE_FETCH_DATA_URL_EN}
      />
    </div>
  );
}

export default MenuSectionEn;
