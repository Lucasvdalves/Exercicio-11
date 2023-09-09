import { useState } from 'react'
import Header from './componentes/Header/header'
import Footer from './componentes/Footer/footer';
import Conteudo from './componentes/Conteudo/Conteudo';

function Form() {
  const [count, setCount] = useState(0)

  return (

    <section>
      <Header />
      <Conteudo />
      <Footer />
    </section>
  )
}

export default Form;
