import styled, { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
`;
export default function ItemAssento ({ selecionado, disponivel, idAssento, onClick }){
    return (
      <>
      <FontStyles/>
      <Assento
        data-test="assento"
        selecionado={selecionado}
        disponivel={disponivel}
        onClick={onClick}
      >
        {idAssento}
      </Assento>
      </>
    );
  };
  
  const Assento = styled.div`
    background-color: ${(props) =>
      props.selecionado ? "#FADBC5" : props.disponivel ? "#9DB899" : "#2B2D36"};
    border: 1px solid
      ${(props) =>
        props.selecionado ? "#EE897F" : props.disponivel ? "#808F9D" : ""};
    height: 26px;
    width: 26px;
    border-radius: 12px;
    font-family: 'Roboto', sans-serif;
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
    cursor: ${(props) => (props.disponivel ? "pointer" : "default")};
  `;
