import React, { useState } from 'react';

function ContatoForm() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso');
  };

  return (
    <div>
      <h2>Formulário de Contato</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        <br />

        <label>Telefone:</label>
        <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        <br />

        <label>E-mail:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />

        <label>Mensagem:</label>
        <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
        <br />

        <button type="submit">Enviar Mensagem</button>
      </form>
    </div>
  );
}

export default ContatoForm;
