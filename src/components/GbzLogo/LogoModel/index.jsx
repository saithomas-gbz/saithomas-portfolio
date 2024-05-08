import { useGLTF } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react'; 
import { useFrame } from '@react-three/fiber';
 
export default function LogoModel(props) {
  const { nodes, materials } = useGLTF('/gbz.glb')
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z -= 0.01;
    }
  });

  return (
    <>
      <group {...props} dispose={null}>
        <ambientLight intensity={0.5}/>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve.geometry}
          material={materials.SVGMat}
          rotation={[1.571, 0, 0.027]}
        />
        <OrbitControls />
      </group>
    </>
  )
}

useGLTF.preload('/gbz.glb')