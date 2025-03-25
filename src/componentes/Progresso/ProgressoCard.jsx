import React from "react";
import "./Progresso.css";

function ProgressoCard({ projeto, descricao, cargaHoraria}) {
  return (
    <div className="perfil-progresso">
      <div className="project-description">
        <div style={{ alignContent: "center", margin: 20, padding: 2 }}>
          <h3>{projeto}</h3>
        </div>

        <div>
          <p className="progresso-label">
            {`${cargaHoraria}`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProgressoCard;
