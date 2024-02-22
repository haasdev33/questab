import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

// Componente Model3D para carregar e exibir o modelo GLTF
function Model3D() {
  // Carregar o modelo GLTF usando useGLTF hook
  const { scene } = useGLTF('/banca.glb');

  // Verificar se o objeto scene foi carregado corretamente
  if (!scene) {
    return null; // Retornar null se o objeto não estiver disponível
  }
    scene.scale.set(3, 3, 3);
  // Renderizar o modelo GLTF
  return (
    <group>
      <primitive object={scene} />
    </group>
  );
}

// Componente principal App
function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={1.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        {/* Renderizar o modelo 3D */}
        <Model3D />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
