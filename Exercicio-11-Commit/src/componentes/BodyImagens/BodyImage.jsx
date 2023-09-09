import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importe os estilos do carrossel
import { Carousel } from 'react-responsive-carousel';
import './portifolio.css';


function BodyImage() {
  return (
    <div className="Portifolio-content">

      {/* Carrossel de imagens */}
      <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false}>
        <div>
          <img className="imagem1" src="https://mentorama.com.br/blog/wp-content/uploads/2022/06/capa-blog-coding-iniciante.jpg" alt="Imagem 1" />
        </div>
        <div>
          <img className="imagem2" src="https://mentorama.com.br/blog/wp-content/uploads/2022/09/ARTE-CAPA-1.png" alt="Imagem 2" />
        </div>
        <div>
          <img className="imagem3" src="https://www.alura.com.br/artigos/assets/qual-e-a-melhor-linguagem-de-programacao/qual-e-a-melhor-linguagem-de-programacao.png" alt="Imagem 2" />
        </div>
        {/* Adicione mais imagens aqui */}
      </Carousel>
 


    </div>
  );
}

export default BodyImage;
