import Woman from "../../Assets/images/woman.png";
import Lipe from "../../Assets/images/lipe.jpeg";
import Deadlift from "../../Assets/images/deadlift.png"

import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Header from '../../Components/Header';
import Services from "../../Components/Services";
import BackToTop from "../../Components/Buttons/BackToTop";

import {
  Image,
  TextAbout,
  TextSide,
  ImageText,
  Cadastro,
  Contatos,
  Icone
} from "./styles"


export default function Initial() {
  return (
    <div className="App">
        <Header />

        <section id="home">
          <Image src={Woman} alt="Mulher levantando peso" />
            <TextAbout>
            <h1><strong>Transforme seu treino em uma experiência personalizada e eficaz.</strong>Vamos criar juntos um 
            programa que se adapte aos seus objetivos e estilo de vida.</h1>
          </TextAbout>
        </section>

        <section id="sobre">
          <TextAbout>Por que fazer <strong>atividade fisica</strong> é importante para seu <strong>corpo</strong> ?</TextAbout>
            <img src={Lipe} alt="Descrição_da_imagem" />
            <TextSide>
              “Os exercícios de resistência, como o levantamento de pesos, promovem a saúde dos ossos, 
              prevenindo a perda de densidade óssea. Além disso, contribuem para o desenvolvimento e manutenção da massa
               muscular.”
            </TextSide>
        </section>

        <section id='sobre2'>
            <ImageText>
                <img src={Deadlift} alt='um_homem_fazendo_levantamento_de_peso' />
                <TextAbout>
                    <h2>Seu <strong>corpo pode fazer</strong> isso</h2>
                    <h2>É hora de <strong>convencer sua mente</strong></h2>
                </TextAbout>
            </ImageText>
        </section>

        <section id="servicos">
          <Services />
        </section>

        <section id="contatos">
          <Cadastro>
                <label htmlFor="nome"></label>
                <input type="text" id='nome' placeholder="Digite seu nome" required></input>
                <label htmlFor="e-mail"></label>
                <input type="email" id='email' placeholder="Digite seu e-mail" required></input>
            </Cadastro>
            <Contatos>
                <p>Número de contato:(92) 99245-2675</p>
                <Icone>Me siga: <FaInstagram />, <FaXTwitter />
                    @DicoPersonal
                    </Icone>
            </Contatos>
        </section>

        <BackToTop/>
    </div>
  );
}
