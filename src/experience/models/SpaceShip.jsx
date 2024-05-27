import { useGLTF } from "@react-three/drei";

export default function SpaceShip(props) {
  const { nodes, materials } = useGLTF("./models/spaceship.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Starship_Material003_0.geometry}
        material={materials["Material.003"]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("./models/spaceship.glb");
