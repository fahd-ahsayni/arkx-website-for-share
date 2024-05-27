import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";

export default function UnknownObjectInSpace(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "./models/unknown_object_in_space.glb"
  );

  useFrame((state) => {
    group.current.rotation.y = state.clock.getElapsedTime() * 0.8;
  });

  
  return (
    <motion.group whileHover={{scale: 2.2}} ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Icosphere_0">
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={materials["Material.001"]}
                />
                <mesh name="Object_5" geometry={nodes.Object_5.geometry}>
                  <meshBasicMaterial color="#ff4200" />
                </mesh>
              </group>
            </group>
          </group>
        </group>
      </group>
    </motion.group>
  );
}

useGLTF.preload("./models/unknown_object_in_space.glb");
