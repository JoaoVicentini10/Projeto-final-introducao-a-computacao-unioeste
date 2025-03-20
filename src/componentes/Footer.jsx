import React from "react";
import "./Footer.css"; // Arquivo de estilos para o rodapé

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} VEU - Unioeste.</p>
        <p>
          Desenvolvido por <strong>Carlos Eduardo, Joao vicentini e Papa</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;