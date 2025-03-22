import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import maratona from "../assets/maratona.PNG"; // Caminho corrigido
import marco from "../assets/marco.png"; // Caminho corrigido
import robotica from "../assets/robotica.png"; // Caminho corrigido
import logo from "../assets/logo_veu.png"; // Caminho corrigido
import "./HomePage.css";

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Estado para controlar o slide ativo

  // Função para destacar as palavras-chave
  const highlightKeywords = (text) => {
    const keywords = ["Horas/aula:", "Coordenador(a) do projeto:", "E-mail:"];

    // Divide o texto em partes com base nas palavras-chave
    const parts = text.split(new RegExp(`(${keywords.join("|")})`, "g"));

    return parts.map((part, index) =>
      keywords.includes(part) ? (
        <strong key={index} className="highlight">
          {part}
        </strong>
      ) : (
        part
      )
    );
  };

  const items = [
    {
      id: 1,
      image: maratona,
      description: `A Maratona de Programação trata-se de uma competição que promove a criatividade, a capacitação de alunos ao trabalho em equipe, a busca de novas soluções de software e a habilidade de resolver problemas sob pressão.
      Este projeto tem como finalidade o desenvolvimento de um conjunto de atividades necessárias para a participação nas competições da Maratona de Programação e na realização de competições locais preparatórias para a Maratona de Programação.
      Horas/aula: xxxxxx
      Coordenador(a) do projeto: Antonio Marcos Massao Hachisuca.
      E-mail: antonio.hachisuca@unioeste.br`,
    },
    {
      id: 2,
      image: marco,
      description: `O Marco Zero trata-se de um projeto de extensão que possui por finalidade ministrar aulas de nivelamento, tendo como público os novos alunos matriculados em cursos da área de exatas, preparando-os assim para as principais disciplinas que terão de lidar nos próximos anos.

      As aulas são ofertadas a cada início de um ano letivo, e são abordados tópicos relacionados (mas não restritos) às seguintes disciplinas:
      - Matemática Básica
      - Geometria Analítica e Álgebra Linear
      - Probabilidade e Estatística
      - Cálculo Diferencial e Integral
      - Introdução à Programação
      - Lógica e Matemática Discreta.

      Horas/aula: 20 horas / total.
      Coordenador(a) do projeto: Katiani Pereira.
      E-mail: katiani.conceicao@unioeste.br`,
    },
    {
      id: 3,
      image: robotica,
      description: `O projeto de extensão em robótica é uma jornada de inovação e aprendizado.

      Jovens talentos unem teoria e prática, criando soluções tecnológicas que impactam a comunidade.

      Cada robô construído é um passo rumo ao futuro, mostrando que a educação transforma vidas e inspira mudanças.
      Horas/aula: xxxxxxxx.
      Coordenador(a) do projeto: Eliane Nascimento Pereira.
      E-mail: xxxxxxxxxxx`,
    },
  ];

  return (
    <div>
      {/* Seção da logo e boas-vindas */}
      <div style={{ backgroundColor: "#1b0043" }} className="welcome-wrapper">
        <div className="welcome-section">
          {/*<h1>Bem-vindo ao VEU</h1> */}
          <img src={logo} alt="Logo do VEU" className="welcome-logo" />
        </div>
      </div>

      {/* Caixa que envolve o carrossel e a descrição */}
      <div
        style={{ backgroundColor: "#fff", padding: 20 }} // Mudar para backgroundColor: "#1b0043" se desejar
        className="content-wrapper"
      >
        <div className="carousel-box">
          {/* Carrossel */}
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{ nextEl: "#custom-next", prevEl: "#custom-prev" }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Atualiza o slide ativo
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="slide-container">
                  <img
                    src={item.image}
                    alt={`Imagem ${item.id}`}
                    className="slide-image"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Botões flutuantes */}
          <button id="custom-prev" className="floating-button prev-button">
            &#8249; {/* HTML para "seta para a esquerda" */}
          </button>
          <button id="custom-next" className="floating-button next-button">
            &#8250; {/* HTML para "seta para a direita" */}
          </button>

          {/* Descrição correspondente ao slide ativo */}
          <div className="description-container">
            <p>{highlightKeywords(items[activeIndex].description)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
