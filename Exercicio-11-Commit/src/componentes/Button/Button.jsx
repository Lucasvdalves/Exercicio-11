import React from 'react';
import { useHistory } from 'react-router-dom';

function Button() {
  const history = useHistory();

  const handleClick = () => {
    history.push('/contato');
  };

  return (
    <button onClick={handleClick}>Ir para o Formulário</button>
  );
}

export default Button;
