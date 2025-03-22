import React from "react";
import "./Progresso.css";

function ProgressoCard({ projeto, descricao }) {
  return (
    <div className="perfil-progresso">
      <div className="project-description">
        <div style={{ alignContent: "center", margin: 20, padding: 2 }}>
          <h3>{projeto}</h3>
        </div>

        <div>
          <p className="progresso-label">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
            itaque, quaerat libero dicta repellat culpa dignissimos quia impedit
            perferendis sapiente animi delectus modi nemo architecto autem
            voluptatem veniam laborum aliquam deserunt vero tempora. Non ab
            tempore repellendus omnis molestias sunt soluta eveniet mollitia,
            consectetur praesentium inventore maiores voluptatibus suscipit a.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProgressoCard;
