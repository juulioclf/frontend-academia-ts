import Woman from "../../Assets/images/woman.png";
import Lipe from "../../Assets/images/lipe.jpeg";
import Deadlift from "../../Assets/images/deadlift.png"

import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Header from '../../Components/Header';
import Services from "../../Components/Services";
import BackToTop from "../../Components/Buttons/BackToTop";

import {
  TextAbout,
  TextSide,
  ImageText,
  Cadastro,
  Contatos,
  Icone,
  Main,
  Img,
  ExerciseInfo,
  TextAboutExercise,
  DeadLiftDiv,
  TextAboutDeadLift,
  DivInfo
} from "./styles"


export default function Initial() {
  return (
    <div>
        <Header />

        <Main>
          <TextAbout isMaxWidth={true}>
            <h1>
              <strong>Transforme seu treino em uma experiência personalizada e eficaz.</strong>
              Vamos criar juntos um programa que se adapte aos seus objetivos e estilo de vida.
            </h1>
          </TextAbout>
        </Main>

        <ExerciseInfo>
            <Img src={Lipe} alt="Descrição_da_imagem" />
            <div style={{display: "flex", flexDirection: "column", gap: "2vw"}}>
              <TextAboutExercise>
                <h1>
                Por que fazer <strong>atividade fisica</strong> é importante para seu <strong>corpo</strong> ?
                </h1>
              </TextAboutExercise>
              <TextSide>
                “Os exercícios de resistência, como o levantamento de pesos, promovem a saúde dos ossos, 
                prevenindo a perda de densidade óssea. Além disso, contribuem para o desenvolvimento e manutenção da massa
                muscular.”
              </TextSide>
            </div>
        </ExerciseInfo>

        <DeadLiftDiv>
          <TextAboutDeadLift>
              <h2>Seu <strong>corpo pode fazer</strong> isso</h2>
              <h2>É hora de <strong>convencer sua mente</strong></h2>
            </TextAboutDeadLift>
        </DeadLiftDiv>

        <Services />


        <DivInfo>
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
        </DivInfo>

        <BackToTop/>
    </div>
  );
}
