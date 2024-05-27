import { Float, OrbitControls, Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Text3dJobintech = () => {
  return (
    <Canvas>
      <OrbitControls makeDefault enableZoom={false} />
      <Float>
        <group scale={0.5} position={[-5, -1, 0]}>
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
            job
            <meshNormalMaterial />
          </Text3D>
          <Text3D
            position={[1.5, 0, 0]}
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
            in
            <meshNormalMaterial />
          </Text3D>
          <Text3D
            position={[4.2, 0, 0]}
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
            tech
            <meshNormalMaterial />
          </Text3D>
        </group>
      </Float>
    </Canvas>
  );
};

export default Text3dJobintech;
