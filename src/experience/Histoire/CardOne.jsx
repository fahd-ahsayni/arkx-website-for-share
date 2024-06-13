import { Canvas } from "@react-three/fiber";
import UnknownObjectInSpace from "../models/UnknownObjectInSpace";
import { PresentationControls, Sparkles } from "@react-three/drei";

const CardOne = () => {
  return (
    <>
      <Canvas>
        <Sparkles count={100} size={2} scale={20} />
        <directionalLight intensity={2} />
        <PresentationControls speed={10}>
          <UnknownObjectInSpace scale={1.5} />
        </PresentationControls>
      </Canvas>
    </>
  );
};

export default CardOne;
