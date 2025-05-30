import { BtnSave, variables } from "../../index"
import styled from "styled-components";
export function LoginTemplate() {
  return (
    <Container imagen={variables.imagenfondo}>
      <div className="contentCard">
        <span className="version">Version 1.0</span>
        <div className="contentImg shake-vertical">
          <img src={variables.logo} alt="" />
        </div>
        <Titulo>Cerdyn</Titulo>
        <p className="frase">Toma el control de tus 💵gastos e 💰ingresos</p>
        <ContainerBtn>
          <BtnSave icono={<variables.iconogoogle />} titulo={"Iniciar con Google"} bgcolor={variables.colorSecundario}/>
        </ContainerBtn>
      </div>
    </Container>
  );
}
const Container = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.imagen});
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.87);
  text-align: center;
  .contentCard{
    background-color: #131313;
    border-radius: 20px;
    gap: 30px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-shadow: 8px 5px 18px 3px rgba(0,0,0,0.35);
    .version{
      color: #727272;
      text-align: start; 
    } 
    .contentImg{
      img{
        max-width: 60%;
      }
    }
    .frase{
      color: #909090;
      font-size: 1.2rem;
    }
  }

  .shake-vertical{
    animation:shake-vertical 10s ease-in-out infinite alternate
  } 
  @keyframes shake-vertical{0%,100%{transform:translateY(0)}10%,30%,50%,70%{transform:translateY(-8px)}20%,40%,60%{transform:translateY(8px)}80%{transform:translateY(6.4px)}90%{transform:translateY(-6.4px)}}
`

const Titulo = styled.span`
  font-size: 5rem;
  font-weight: 700;
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
`