import { useGLTF } from '@react-three/drei';
import { useRef } from 'react'; 
import { useFrame } from '@react-three/fiber';
 
export default function LogoModel(props) {
  const { nodes, materials } = useGLTF('/models/gbz_logo.glb')
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
          ref={meshRef}
          castShadow
          receiveShadow
          geometry={nodes.Curve.geometry}
          material={materials.SVGMat}
          rotation={[1.571, 0, 0.027]}
          position={[0, 0, 0.15]}
        />
      </group>
    </>
  )
}

useGLTF.preload('/models/gbz_logo.glb')