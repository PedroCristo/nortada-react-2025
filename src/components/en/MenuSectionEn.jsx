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
        // useFetchData={import.meta.env.VITE_FETCH_DATA_URL_EN}
        useFetchData={"https://docs.google.com/spreadsheets/d/e/2PACX-1vTPJA7vmjwDky-uUikoorHjU5KhYhmAZ1T3LZadewBBAeu8IXjRetwGJpAwQDJrS6yvCx73u7u6uxWa/pub?gid=1256592981&single=true&output=csv"}
      />
    </div>
  );
}

export default MenuSectionEn;
