import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../Loader'

const Computers = ( isMobile ) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
         <hemisphereLight  groundColor="black" intensity={0.15} />
      <pointLight intensity={1} />
      <spotLight 
      position={[-20,50,10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapsize={1024}/>
      <primitive object={computer.scene}
      scale={isMobile ? 0.7 : 0.75}
      position={isMobile ? [0,-3,-2.2] : [0,-3.25,-1.5]}
      rotation={[-0.008,-0.1,-0.01]} />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile,setIsMobile] =useState(false);

  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width:500px)');
    setIsMobile(mediaQuery.matches);
  
  
    const handleMediaQueryChange=(event) =>{
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change',handleMediaQueryChange);

    return () =>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange)
    }
  },[])
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/> {/* Fixed: Uppercase component name */}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
