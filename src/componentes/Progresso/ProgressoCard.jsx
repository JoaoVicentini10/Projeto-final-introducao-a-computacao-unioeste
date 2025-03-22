import React from "react";
import "./Progresso.css";

function ProgressoCard({ projeto, progresso }) {
  return (
    <div className="perfil-progresso">
      <div
        className="progresso-roda"
        style={{
          background: `conic-gradient(#4caf50 ${progresso}%, #e0e0e0 ${progresso}% 100%)`,
        }}
      >
        <div className="progresso-texto">{progresso}%</div>
      </div>
      <div className="project-description">
        <h3>{projeto}</h3>
        <p className="progresso-label">{`${progresso}% das horas completadas`}</p>
      </div>
    </div>
  );
}

export default ProgressoCard;
