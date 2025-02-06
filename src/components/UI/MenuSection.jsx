import React, { useState } from "react";
import useFetchCSVData from "../../data/ExternalDB/fetch-data";
import PropTypes from "prop-types";
import Preloader from "./extras/Preloader.jsx";

function MenuSection({
  menu_title,
  menu_sub_title,
  menu_all,
  menu_menu,
  menu_desserts,
  menu_wines,
  useFetchData,
}) {
  const [filter, setFilter] = useState("*");
  const { csvData, loading, error } = useFetchCSVData(useFetchData);

  if (loading)
    return (
      <div>
        <Preloader />
      </div>
    );
  if (error)
    return (
      <div className="container p-5">
        <div className="row d-flex justify-content-center align-items-center text-warning">Error: {error.message}</div>
      </div>
    );

  // Group the data by subCategory
  const groupedData = csvData.reduce((acc, item) => {
    if (!acc[item.subCategory]) {
      acc[item.subCategory] = [];
    }
    acc[item.subCategory].push(item);
    return acc;
  }, {});

  return (
    <section id="menu" className="menu section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h1>{menu_title}</h1>
          <p>{menu_sub_title}</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="menu-flters" className="list-unstyled d-flex">
              <li
                onClick={() => setFilter("*")}
                className={`filter-active mx-2 ${
                  filter === "*" ? "filter-active" : ""
                }`}
              >
                {menu_all}
              </li>
              <li
                onClick={() => setFilter("menu")}
                className={`mx-2 ${filter === "menu" ? "filter-active" : ""}`}
              >
                {menu_menu}
              </li>
              <li
                onClick={() => setFilter("desserts")}
                className={`mx-2 ${
                  filter === "desserts" ? "filter-active" : ""
                }`}
              >
                {menu_desserts}
              </li>
              <li
                onClick={() => setFilter("wines")}
                className={`mx-2 ${filter === "wines" ? "filter-active" : ""}`}
              >
                {menu_wines}
              </li>
            </ul>
          </div>
        </div>

        <div
          className="row menu-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {Object.keys(groupedData).map((subCategory, index) => {
            const filteredItems = groupedData[subCategory].filter(
              (item) =>
                (filter === "*" ||
                  (item.category &&
                    item.category.toLowerCase() === filter.toLowerCase())) &&
                item.displayOn === "TRUE"
            );

            if (filteredItems.length === 0) return null;

            return (
              <div key={index}>
                <div className="section-title">
                  <h2>{subCategory}</h2>
                </div>

                <div className="row">
                  {filteredItems.map((item, idx) => (
                    <div
                      key={idx}
                      className={`col-lg-6 menu-item ${item.category}`}
                    >
                      <div className="menu-content">
                        <span>{item.name}</span>
                        <span className="price">{item.price}</span>
                      </div>
                      <div className="menu-ingredients">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// **Define PropTypes**
MenuSection.propTypes = {
  menu_title: PropTypes.string.isRequired,
  menu_sub_title: PropTypes.string.isRequired,
  menu_all: PropTypes.string.isRequired,
  menu_menu: PropTypes.string.isRequired,
  menu_desserts: PropTypes.string.isRequired,
  menu_wines: PropTypes.string.isRequired,
  useFetchData: PropTypes.string.isRequired,
};

export default MenuSection;
