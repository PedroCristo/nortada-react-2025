import zarcoLogo from "./assets/zarco_logo_1.png";
import "./ZarcoFooter.css";

export default function ZarcoFooter({ lang}) {
  return (
    <div className="zarco-footer">
      <span className="zarco-footer-text">
        {lang === "pt"
          ? "Desenvolvido por Zarco Studios"
          : "Developed by Zarco Studios"}
      </span>

      <a
        href="https://zarcostudios.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Zarco Studios"
        className="zarco-footer-link"
      >
        <img
          className="zarco-footer-logo"
          src={zarcoLogo}
          alt="Zarco Studios"
        />
      </a>
    </div>
  );
}