import React from "react";
import "./Perfil.css"; // Importando o arquivo CSS para estilização
import foto from "../assets/foto_perfil.png"; // Importando a imagem local
import ProgressoCard from "../componentes/Progresso/ProgressoCard";

function Perfil() {
  // Dados fictícios do usuário
  const usuario = {
    nome: "João Silva",
    foto: foto, // Usando a imagem importada
    email: "joao.silva@example.com",
    localizacao: "São Paulo, Brasil",
    habilidades: ["React", "JavaScript", "CSS", "HTML"],
  };

  return (
    <div className="perfil-container">
      <div className="perfil-topo">
        <div className="perfil-foto">
          <img src={usuario.foto} alt="Foto do usuário" />
          <h1 className="perfil-nome">{usuario.nome}</h1>
        </div>

        <div className="perfil-detalhes">
          <p className="perfil-bio">{usuario.bio}</p>
          <div className="perfil-info">
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-valor">{usuario.email}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Localização:</span>
              <span className="info-valor">{usuario.localizacao}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Habilidades:</span>
              <span className="info-valor">
                {usuario.habilidades.join(", ")}
              </span>
            </div>
          </div>
        </div>
      </div>
      <ProgressoCard projeto={"Robotica"} progresso={68} />
      <ProgressoCard projeto={"Marco Zero"} progresso={23} />
      <ProgressoCard projeto={"Maratona de Programação"} progresso={100} />
    </div>
  );
}

export default Perfil;
