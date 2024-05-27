import {
  Float,
  OrbitControls,
  PresentationControls,
  Sparkles,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import SpaceShip from "../models/SpaceShip";

export default function CardThree() {
  return (
    <>
      <Canvas>
        <Sparkles scale={20} count={100} size={2} />
        <directionalLight intensity={2} />
        <OrbitControls makeDefault />
        <Float>
          <SpaceShip
            scale={0.2}
            rotation-y={Math.PI}
            rotation-x={Math.PI * 0.1}
          />
        </Float>
      </Canvas>
    </>
  );
}
