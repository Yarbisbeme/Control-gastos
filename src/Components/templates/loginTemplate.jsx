import { v, BtnSave } from "../../index"
import styled from "styled-components";
export function LoginTemplate() {
  return (
    <Container>
        <div className="contentCard">
            <span>Version 1.0</span>
            <div className="contentImg">
                <img src={v.logo} alt="" />
            </div>
            <Titulo>Cerdyn</Titulo>
            <p className="frase">Toma el control de tus 💵gastos e 💰ingresos</p>
            <ContainerBtn>
              <BtnSave></BtnSave>
            </ContainerBtn>
        </div>
    </Container>
  );
}
const Container =styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  .contentCard{
    background-color: black;
    border-radius: 20px;
    gap: 30px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 20px;
  }
`

const Titulo = styled.span`
  font-size: 5rem;
  font-weight: 700;
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
`