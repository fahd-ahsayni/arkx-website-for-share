import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { AstroFlying } from "../models/AstroFlying";
import { Suspense } from "react";

const CardTwo = () => {
  return (
    <Canvas>
      <OrbitControls makeDefault enableZoom={false} />
      <Sparkles size={2} count={100} scale={20} />
      <directionalLight intensity={3} />
      <Suspense fallback={null}>
        <AstroFlying scale={0.02} />
      </Suspense>
    </Canvas>
  );
};

export default CardTwo;
