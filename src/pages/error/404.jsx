import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="page404 set-bg">
        <div className="content-box">
          <h1 className="title">404</h1>
          <div className="content-item">
            <img
              src="../public/images/extras/flags/pt-flag.jpg"
              alt="Flag Image"
            />
            <h2>Página Não Encontrada</h2>
          </div>
          <div className="content-item">
            <img
              src="../public/images/extras/flags/gb-flag.png"
              alt="Flag Image"
            />
            <h2>Page Not Foud</h2>
          </div>
        </div>
        <div className="btn-box">
          <Link to="/" className="btn">
            <i class="bi bi-arrow-left"></i> Voltar
          </Link>
          <Link to="/home-en" className="btn">
          <i class="bi bi-arrow-left"></i> Go Back
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
