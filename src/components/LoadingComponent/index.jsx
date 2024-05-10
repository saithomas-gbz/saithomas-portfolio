import { Canvas, useFrame } from "@react-three/fiber";
import LogoModel from "../LogoComponent/LogoModel";
import styled from "styled-components";
import { useRef } from "react";

const StyledCanvas = styled(Canvas)`
  width: 33.33vw !important;
  height: 33.33vh !important;

  @media (max-width: 768px) {
    width: 100vw !important;
  }
`;

export default function LogoComponent() {
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <StyledCanvas flat camera={{ position: [0, 0, 0.3], fov: 30 }}>
      <LogoModel ref={mesh} />
    </StyledCanvas>
  );
}
