import { Canvas } from "@react-three/fiber";
import LogoModel from "./LogoModel";
import styled from "styled-components";

const StyledCanvas = styled(Canvas)`
  width: 33.33vw !important;
  height: 33.33vh !important;
  
  @media (max-width: 768px) {
    width: 100vw !important;
  }
`;

export default function GbzLogo(){
  return(
      <StyledCanvas  flat camera={{ position: [0, 0, 0.3], fov: 30 }}>
        <LogoModel />
      </StyledCanvas>
  )
}