import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import maratona from "../assets/maratona.PNG";
import marco from "../assets/marco.png";
import robotica from "../assets/robotica.png";
import logo from "../assets/logo_veu.png";
import Footer from "../componentes/Footer.jsx";
import "./HomePage.css";

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const highlightKeywords = (text) => {
    const keywords = ["Horas/aula:", "Coordenador(a) do projeto:", "E-mail:"];
    return text.split(new RegExp(`(${keywords.join("|")})`, "g")).map((part, index) =>
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
    <div className="homePage">
      <div className="welcome-section">
        <img src={logo} alt="Logo do VEU" className="welcome-logo" />
      </div>
    <div className="carousel-wrapper">
      <div className="carousel-box">
          <Swiper
            spaceBetween={30}
            centeredSlides
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="slide-container">
                  <img src={item.image} alt={`Imagem ${item.id}`} className="slide-image" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="description-container">
            <p>{highlightKeywords(items[activeIndex].description)}</p>
          </div>
        </div>
      </div>  
      

      <Footer />
    </div>
  );
};

export default HomePage;
