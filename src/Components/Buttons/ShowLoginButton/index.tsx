import React, { useState, useEffect, useRef } from 'react';
import styles from './BotaoLogin.module.css';
import { useNavigate } from "react-router-dom";

export default function ShowLoginButton() {
  const [mostrarOpcoes, setMostrarOpcoes] = useState(false);
  const botaoRef = useRef(null);
  const navigate = useNavigate();

  const toggleOpcoes = () => {
    setMostrarOpcoes(!mostrarOpcoes);
  };

  const handleOpcaoSelecionada = (opcao: any) => {
    console.log(`Opção selecionada: ${opcao}`);
    // Adicione a lógica que deseja executar quando uma opção for selecionada
    toggleOpcoes();
  };

  const handleClickForaOpcoes = (event: any) => {
    // if (botaoRef.current && !botaoRef.current.contains(event.target)) {
    //   // Fechar as opções se o clique não estiver no botão
    //   setMostrarOpcoes(false);
    // }
  };

  useEffect(() => {
    // Adiciona um ouvinte de clique ao documento para fechar as opções quando clicar fora do botão
    document.addEventListener('click', handleClickForaOpcoes);

    // Remove o ouvinte de clique quando o componente é desmontado
    return () => {
      document.removeEventListener('click', handleClickForaOpcoes);
    };
  }, []);

  function goToLogin() {
    navigate("/login")
  }

  function goToTeacher() {
   navigate("/Protocolo")
  }

  return (
    <div>
      <button ref={botaoRef} className={styles.botao} type="button" onClick={toggleOpcoes}>LOGIN</button>
      {mostrarOpcoes && (
        <div className={styles.opcao}>
          <button onClick={() => goToLogin()}>Area do aluno</button>
          <button onClick={() => goToTeacher()}>Area do professor</button>
        </div>
      )}
    </div>
  );
}

