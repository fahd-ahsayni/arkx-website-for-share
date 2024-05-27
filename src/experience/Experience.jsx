import { Canvas } from "@react-three/fiber";
import Earth from "./models/Earth";
import { ScrollParallax } from "react-just-parallax";
import { PresentationControls } from "@react-three/drei";

const Experience = () => {
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
};

export default Experience;
