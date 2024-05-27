import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
import { aoMap, colorMap, normalMap } from "../textures/earth-maps";

const Earth = () => {
  const [color, normal, ao] = useLoader(TextureLoader, [
    colorMap,
    normalMap,
    aoMap,
  ]);
  const earthRef = useRef(null);

  useFrame((state) => {
    earthRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
  });

  return (
    <mesh position={[0, 0, 0]} scale={1.5} ref={earthRef}>
      <sphereGeometry args={[1, 100, 100]} />
      <meshStandardMaterial map={color} normalMap={normal} aoMap={ao} />
    </mesh>
  );
};

export default Earth;
