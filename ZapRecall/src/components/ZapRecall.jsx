import { useState } from "react";
import styled, { css } from "styled-components";
import playIcon from "../assets/seta_play.png";
import flipIcon from "../assets/seta_virar.png";
import QuestoesRepondidas from "./QuestoesRespondidas.jsx";
import logoImagem from "../assets/logo.png";
import zapIcon from "../assets/icone_certo.png";
import quaseIcon from "../assets/icone_quase.png";
import naoIcon from "../assets/icone_erro.png";


export default function ZapRecall(){
  const [iniciarContador, setIniciarContador] = useState(null);
  const [virada, setVirada] = useState(false);
  const [verResposta, setVerResposta] = useState(false);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [respostasSelecionadas, setRespostasSelecionadas] = useState([]);

  const cards = [
    {
      question: "O que é JSX?",
      answer: "Uma extensão da linguagem JavaScript",
    },
    {
      question: "O React é __",
      answer: "Uma biblioteca JavaScript para construção de interfaces",
    },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    {
      question: "O ReactDOM nos ajuda __",
      answer: "Interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      question: "Usamos o npm para __",
      answer: "Gerenciar os pacotes necessários e suas dependências",
    },
    {
      question: "Usamos props para __",
      answer: "Passar diferentes informações para componentes",
    },
    {
      question: "Usamos estado (state) para __",
      answer:
        "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

  const VirarPergunta = (index) => {
    setIniciarContador(index);
    setVirada(true);
    setVerResposta(false);
    setRespostaSelecionada(respostasSelecionadas[index] || null);
  };

  const VirarQuestao = () => {
    setVerResposta(true);
  };

  const ReacaoAResposta = (answer) => {
    const novasRespostasSelecionadas = [...respostasSelecionadas];
    novasRespostasSelecionadas[iniciarContador] = answer;
    setRespostasSelecionadas(novasRespostasSelecionadas);
    setIniciarContador(null);
    setVirada(false);
    setVerResposta(false);
  };

  const Respondido = (index) => respostasSelecionadas[index];

  const TotalDeQuestoes = cards.length;
  const QuestoesRespondidas= respostasSelecionadas.filter((answer) => answer !== null);
  const TotalDeQuestoesRespondidas = QuestoesRespondidas.length;

  return (
    <>
      <LogoDiv>
        <Logo src={logoImagem} alt="Image description" />
        <H1>ZapRecall</H1>
      </LogoDiv>
      <Perguntas className="perguntas">
        {cards.map((card, index) => (
          <div key={index}>
            {index === iniciarContador && virada ? (
              <>
                {!verResposta ? (
                  <QuestaoEscondida data-test="flashcard">
                    <PerguntaTexto data-test="flashcard-text">
                      <P>{card.question}</P>
                    </PerguntaTexto>
                    <FlipButton
                      data-test="turn-btn"
                      src={flipIcon}
                      alt="Flip"
                      onClick={VirarQuestao}
                    />
                  </QuestaoEscondida>
                ) : (
                  <RespostaEscondida data-test="flashcard">
                    <PerguntaTexto data-test="flashcard-text">
                      <P>{card.answer}</P>
                    </PerguntaTexto>
                    <RespostaBotoes>
                      {respostaSelecionada !== "Zap" ? (
                        <>
                          {respostaSelecionada !== "Quase" ? (
                            <>
                              <BotaoNao
                                data-test="no-btn"
                                onClick={() => ReacaoAResposta("Não")}
                                selected={respostaSelecionada === "Não"}
                              >
                                Não lembrei
                              </BotaoNao>
                              <BotaoQuase
                                data-test="partial-btn"
                                onClick={() => ReacaoAResposta("Quase")}
                                selected={respostaSelecionada === "Quase"}
                              >
                                Quase não lembrei
                              </BotaoQuase>
                              <BotaoZap
                                data-test="zap-btn"
                                onClick={() => ReacaoAResposta("Zap")}
                                selected={respostaSelecionada === "Zap"}
                              >
                                Zap!
                              </BotaoZap>
                            </>
                          ) : (
                            <img src={quaseIcon} alt="Quase Icon" />
                          )}
                        </>
                      ) : (
                        <img src={zapIcon} alt="Zap Icon" />
                      )}
                    </RespostaBotoes>
                  </RespostaEscondida>
                )}
              </>
            ) : (
              <PerguntaEscondida
                data-test="flashcard"
                answered={Respondido(index)}
              >
                <PerguntaNumero
                  data-test="flashcard-text"
                  answered={Respondido(index)}
                  respostaSelecionada={respostasSelecionadas[index]}
                >
                  Pergunta {index + 1}
                </PerguntaNumero>
                {respostasSelecionadas[index] !== "Zap" ? (
                  respostasSelecionadas[index] !== "Quase" ? (
                    respostasSelecionadas[index] !== "Não" ? (
                      <PlayButton
                        data-test="play-btn"
                        src={playIcon}
                        alt="Play"
                        onClick={() => VirarPergunta(index)}
                      />
                    ) : (
                      <img data-test="no-icon" src={naoIcon} alt="Não Icon" />
                    )
                  ) : (
                    <img
                      data-test="partial-icon"
                      src={quaseIcon}
                      alt="Quase Icon"
                    />
                  )
                ) : (
                  <img data-test="zap-icon" src={zapIcon} alt="Zap Icon" />
                )}
              </PerguntaEscondida>
            )}
          </div>
        ))}
      </Perguntas>
      <QuestoesRepondidas
        TotalDeQuestoes={TotalDeQuestoes}
        TotalDeQuestoesRespondidas={TotalDeQuestoesRespondidas}
      />
    </>
  );
};

const Logo = styled.img`
  width: 52px;
  height: 60px;
`;

const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0 70px -24px;
`;

const Perguntas = styled.div`
  margin-bottom: 50px;
`;

const H1 = styled.h1`
  font-family: "Righteous";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.012em;
  color: #ffffff;
  transform: rotate(0.58deg);
`;

const QuestaoEscondida= styled.div`
  width: 299px;
  height: 131px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  margin-bottom: 25px;
`;

const PerguntaEscondida= styled.div`
  width: 300px;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  margin-bottom: 16px;
  border-radius: 8px;
  transition: all 0.3s ease;

  ${(props) =>
    props.answered &&
    css`
      text-decoration: line-through;
      color: ${(props) => {
        switch (props.respostaSelecionada) {
          case "Zap":
            return "#2fbe34";
          case "Quase":
            return "#fd7f02";
          case "Não":
            return "#e60000";
          default:
            return "#333333";
        }
      }};
    `}
`;

const PerguntaNumero = styled.h1`
  height: 100%;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  margin-top: 5px;

  ${(props) =>
    props.answered &&
    props.respostaSelecionada &&
    css`
      color: ${(props) => {
        switch (props.respostaSelecionada) {
          case "Zap":
            return "#2fbe34";
          case "Quase":
            return "#fd7f02";
          case "Não":
            return "#e60000";
          default:
            return "#333333";
        }
      }};
    `}
`;

const PlayButton = styled.img`
  width: 20px;
  height: 23px;
  cursor: pointer;
`;

const FlipButton = styled.img`
  width: 30px;
  height: 20px;
  cursor: pointer;
  margin-right: 15px;
  margin-bottom: 6px;
  color: #333333;
`;

const RespostaEscondida = styled.div`
  width: 299px;
  height: 131px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  margin-bottom: 25px;
`;

const PerguntaTexto = styled.div`
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #333333;
  width: 100%;
  height: 100%;
  margin-top: 18px;
`;

const P = styled.span`
  margin-left: 15px;
`;

const RespostaBotoes = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 16px 16px 16px;
`;

const Botao = styled.button`
  width: 85.17px;
  height: 37.17px;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
`;

const BotaoZap = styled(Botao)`
  background: ${(props) => (props.selected ? "#2fbe34" : "#33a532")};
`;

const BotaoQuase = styled(Botao)`
  background: ${(props) => (props.selected ? "#fd7f02" : "#fd7f02")};
`;

const BotaoNao = styled(Botao)`
  background: #e60000;
`;