import { Title, Subtitle } from "../shared/Title";
import { Canvas } from "@react-three/fiber";
import LogoModel from "../components/LogoModel";
import styled from "styled-components";

const StyledCanvas = styled(Canvas)`
  width: 33.33vw !important;
  height: 33.33vh !important;
  
  @media (max-width: 768px) {
    width: 100vw !important;
  }
`;

function Home () {
  return (
    <>
      <StyledCanvas  flat camera={{ position: [0, 0, 0.3], fov: 30 }}>
        <LogoModel />
      </StyledCanvas>
      <Title>GRARE THOMAS</Title>
      <Subtitle>Web developer based in France, Paris</Subtitle>
    </>
  );
}

export default Home;