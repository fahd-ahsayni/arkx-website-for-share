import { Environment, Float, OrbitControls, Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ScrollParallax } from "react-just-parallax";

const Text3dArkx = () => {
  return (
    <ScrollParallax>
      <Canvas>
        <Environment preset="city" environmentIntensity={1.5} />
        <OrbitControls makeDefault enableZoom={false} />
        <Float>
          <group position={[0, -1, 0]}>
            <Text3D
              position={[-3, 0, 0]}
              scale={1.75}
              font={"/fonts/sora.json"}
              curveSegments={24}
              brevelSegments={1}
              bevelEnabled
              bevelSize={0.08}
              bevelThickness={0.03}
              height={0.5}
              lineHeight={0.2}
              letterSpacing={0.1}
            >
              Ark
              <meshStandardMaterial color="#fff" />
            </Text3D>
            <Text3D
              position={[1.75, 1, 0.25]}
              scale={1}
              font={"/fonts/sora.json"}
              curveSegments={24}
              brevelSegments={1}
              bevelEnabled
              bevelSize={0.08}
              bevelThickness={0.03}
              height={0.5}
              lineHeight={0.2}
              letterSpacing={0.1}
            >
              x
              <meshStandardMaterial color="#FF4200" />
            </Text3D>
          </group>
        </Float>
      </Canvas>
    </ScrollParallax>
  );
};

export default Text3dArkx;
