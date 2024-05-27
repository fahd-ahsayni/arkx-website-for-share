import { useGLTF } from "@react-three/drei";

export default function AstroMask(props) {
  const { nodes, materials } = useGLTF("./models/astro.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-1.191, -0.226, -0.3]}>
        <group
          position={[-0.023, 0.106, 0.058]}
          rotation={[-0.256, 0.11, 0.373]}
          scale={[0.243, 0.23, 0.292]}
        >
          <mesh
            geometry={nodes["Material1-material"].geometry}
            material={materials["Material1-material"]}
          />
          <mesh
            geometry={nodes["Material3-material"].geometry}
            material={materials["Material3-material"]}
          />
          <mesh
            geometry={nodes["Material4-material"].geometry}
            material={materials["Material4-material"]}
          />
          <mesh
            geometry={nodes["Material5-material"].geometry}
            material={materials["Material5-material"]}
          />
        </group>
        <group
          position={[-0.028, 0.13, 0.077]}
          rotation={[-0.257, 0.11, 0.373]}
          scale={0.262}
        >
          <mesh
            geometry={nodes["Material0-material"].geometry}
            material={materials["Material0-material"]}
          />
          <mesh
            geometry={nodes["Material1-material_1"].geometry}
            material={materials["Material1-material"]}
          />
          <mesh
            geometry={nodes["Material2-material"].geometry}
            material={materials["Material2-material"]}
          />
        </group>
        <mesh
          geometry={nodes["Material6-material"].geometry}
          material={materials["Material6-material"]}
          rotation={[1.042, -1.182, -1.863]}
          scale={0.028}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/astro.glb");
