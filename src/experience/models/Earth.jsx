import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";

export default function Earth({ rotate }) {
  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "./assets/color.jpg",
    "./assets/normal.png",
    "./assets/occlusion.jpg",
  ]);
  const earthRef = useRef(null);

  useFrame((state) => {
    earthRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
  });

  return (
    <mesh position={[0, 0, 0]} scale={1.5} ref={earthRef}>
      <sphereGeometry args={[1, 100, 100]} />
      <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
    </mesh>
  );
}
