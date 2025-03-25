import React from "react";
import "./Perfil.css"; // Importando o arquivo CSS para estilização
import "../componentes/Progresso/Progresso.css";
import foto from "../assets/foto_perfil.png"; // Importando a imagem local
import ProgressoCard from "../componentes/Progresso/ProgressoCard";

function Perfil() {
  // Dados fictícios do usuário
  const usuario = {
    nome: "João Silva",
    foto: foto, // Usando a imagem importada
    email: "joao.silva@example.com",
    localizacao: "São Paulo, Brasil",
    Ano: "2° ano",
  };

  return (
    <div className="perfil-container" style={{marginTop: "120px"}}>
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
              <span className="info-label">Ano:</span>
              <span className="info-valor">{usuario.Ano}</span>
            </div>
          </div>
        </div>

        <div
          className="progresso-roda"
          style={{
            background: `conic-gradient(#b7d3eb ${usuario.progresso}%, #e0e0e0 ${usuario.progresso}% 100%)`,
          }}
        >
          <div className="progresso-texto">{usuario.progresso}80%</div>
        </div>
      </div>
      <ProgressoCard projeto={"Robotica"} descricao={"Abc"} cargaHoraria={20} />
      <ProgressoCard projeto={"Marco Zero"} descricao={"Dce"} cargaHoraria={30} />
      <ProgressoCard projeto={"Maratona de Programação"} descricao={"Texto"}  cargaHoraria={40}/>
    </div>
  );
}

export default Perfil;
