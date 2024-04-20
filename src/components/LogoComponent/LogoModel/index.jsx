import { useGLTF } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react'; 
import { useFrame } from '@react-three/fiber';
 
export default function Model(props) {
  const { nodes, materials } = useGLTF('/ThomasGrare.glb')
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
          material={materials['Material.001']}
          position={[0, 0, 0]}
          rotation={[Math.PI / 2, 0, -Math.PI / 4]}
          scale={2.6544}
        />
        <OrbitControls />
      </group>
    </>
  )
}

useGLTF.preload('/ThomasGrare.glb')