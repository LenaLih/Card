import "./App.css";
import styled, { css } from "styled-components";
import photo from "./../src/assets/images/Rectangle-1.webp";

function App() {
  return (
    <div className="App">
      <Card>
        <Photo src={photo}></Photo>
        <Box>
          <Title>Headline1</Title>
          <Text>
            Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
            ornare in venen.
          </Text>
          <BoxBtn>
            <StyledBtn primary>See more</StyledBtn>
            <StyledBtn outlined>Save</StyledBtn>
          </BoxBtn>
        </Box>
      </Card>
    </div>
  );
}

export default App;

type StyledBtnPropsType = {
  primary?: boolean
  outlined ?: boolean
  color?: string
}


const Card = styled.div`
  width: 100%;
  max-width: 300px;
  padding: 10px 10px 0 10px;
  background: rgba(255, 255, 255, 1);
  border-radius: 15px;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);

`;

const Photo = styled.img`
  width: 100%;
  height: 170px;
  overflow: hidden;
`;

const Box = styled.div`
  padding: 20px 10px;
`;

const Title = styled.h1`
  font-size: 1em;
  font-weight: 800;
  margin-bottom: 20px;
  color: rgba(0, 0, 0, 1);
`;

const Text = styled.p`
  font-size: 0.75em;
  font-weight: 500;
  line-height: 150%;
  color: rgba(171, 179, 186, 1);
  margin-bottom: 19px;

  cursor: pointer;
`;
const BoxBtn = styled.div`
  display: flex;
  gap: 12px;
`;

const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  padding: 5px 20px;
  border-radius: 5px;
  font-size: 0.625em;
  font-weight: 700;
  line-height: 150%;
  min-width: 86px;

  &: hover {
    box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
  }

  ${props => props.primary && css<StyledBtnPropsType>`
background-color: ${props => props.color || 'rgba(78, 113, 254, 1)'};
color: rgba(255, 255, 255, 1);

`}
${props => props.outlined && css<StyledBtnPropsType>`
background-color: transparent;
border: 2px solid ${props => props.color || 'rgba(78, 113, 254, 1)'};
color: rgba(78, 113, 254, 1);
`}
`;