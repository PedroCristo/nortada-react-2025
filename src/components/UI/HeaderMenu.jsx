import PropTypes from "prop-types";

function HeaderMenu({ menu_title }) {
  return (
    <header
      id="header-menu"
      className="set-bg d-flex justify-content-center align-items-center"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mt-5">
            <h2 className="mt-5">{menu_title}</h2>
          </div>
        </div>
      </div>
    </header>
  );
}

HeaderMenu.propTypes = {
  menu_title: PropTypes.string.isRequired,
};

export default HeaderMenu;
