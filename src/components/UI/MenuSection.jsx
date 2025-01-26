import React, { useState } from "react";
import useFetchCSVData from "../../data/ExternalDB/fetch-data";

function MenuSection() {
  const [filter, setFilter] = useState('*');
  const { csvData, loading, error } = useFetchCSVData('https://docs.google.com/spreadsheets/d/e/2PACX-1vRvtHuIHiy8QhygNdJZv_8s5bAga1OGFNqb5ny2qv5505uKipkxsf6hJ_Nd6p8bXXT9L1bqVwz5lKu8/pub?output=csv');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section id="menu" className="menu section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Menu</h2>
          <p>Check Our Tasty Menu</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="menu-flters" className="list-unstyled d-flex">
              <li
                onClick={() => setFilter('*')}
                className={`filter-active mx-2 ${filter === '*' ? 'filter-active' : ''}`}
              >
                All
              </li>
              <li
                onClick={() => setFilter('.filter-starters')}
                className={`mx-2 ${filter === '.filter-starters' ? 'filter-active' : ''}`}
              >
                Starters
              </li>
              <li
                onClick={() => setFilter('.filter-salads')}
                className={`mx-2 ${filter === '.filter-salads' ? 'filter-active' : ''}`}
              >
                Salads
              </li>
              <li
                onClick={() => setFilter('.filter-specialty')}
                className={`mx-2 ${filter === '.filter-specialty' ? 'filter-active' : ''}`}
              >
                Specialty
              </li>
            </ul>
          </div>
        </div>

        <div className="row menu-container" data-aos="fade-up" data-aos-delay="200">
          {csvData
            .filter(item => filter === '*' || item.category === filter)
            .map((item, index) => (
              <div key={index} className={`col-lg-6 menu-item ${item.category}`}>
                <div className="menu-content">
                  <a href="#">{item.name}</a><span>{item.price}</span>
                </div>
                <div className="menu-ingredients">
                  {item.description}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default MenuSection;


