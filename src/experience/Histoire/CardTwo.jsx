import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Sparkles } from "@react-three/drei";
import { AstroFlying } from "../models/AstroFlying";

export default function CardTwo() {
  return (
    <Canvas>
      <OrbitControls makeDefault enableZoom={false} />
      <Sparkles size={2} count={100} scale={20} />
      <directionalLight intensity={3} />

      <AstroFlying scale={0.02} />
    </Canvas>
  );
}
