import { Canvas } from "@react-three/fiber";
import Earth from "./models/Earth";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { OrbitControls, PresentationControls } from "@react-three/drei";

export default function Experience() {
  return (
    <ScrollParallax>
      <Canvas>
        <directionalLight intensity={1.5} position={[2, 2, 4]} />
        <PresentationControls>
          <Earth />
        </PresentationControls>
      </Canvas>
    </ScrollParallax>
  );
}
