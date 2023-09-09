import React from 'react';
import './header.css';
import Button from '../Button/ButtonGit';
import BodyImage from '../BodyImagens/BodyImage';
import lucasImage from './lucas-damasceno.jpg'; // Importe a imagem

function Header() {
  const redirectToGitHub = () => {
    window.location.href = 'https://github.com/Lucasvdalves?tab=repositories';
  };

  return (
    <div>
      <header className="header-container">
        <div className="header-content">
          <div className="header-info">
            <img src={lucasImage} alt="Lucas Damasceno" className="profile-image" /> 
            
            <h1 className='nome'>Lucas Damasceno </h1>
          </div>
          <nav>
            <ul>
              <li><a href="/">Sobre mim</a></li>
              <Button />

              <li><a href="/">Contato</a></li>
              



            </ul>
          </nav>
        </div>
        <BodyImage />
      </header>
    </div>
  );
}

export default Header;
