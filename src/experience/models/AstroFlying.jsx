import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useScroll, useSpring } from "framer-motion";
import { motion } from "framer-motion-3d";

export function AstroFlying(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./models/astro_flying.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["metarig|metarigAction.001"].play();
  }, []);

  const { scrollYProgress } = useScroll();
  const smothScrollAnimationValue = useSpring(scrollYProgress);

  return (
    <motion.group
      scale={scrollYProgress}
      ref={group}
      {...props}
      dispose={null}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 1.8, 0, 2]}>
          <group
            name="eac333c4ad9248fd9ae1e4dccb45a1a9fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Astro13LowPoly001"
                  position={[0.928, 16.966, -1.663]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="metarig"
                  position={[-0.121, -150.811, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={145.9}
                >
                  <group name="Object_6">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials["Default.001"]}
                      skeleton={nodes.Object_9.skeleton}
                    />
                    <group
                      name="Object_8"
                      position={[0.928, 16.966, -1.663]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </motion.group>
  );
}

useGLTF.preload("./models/astro_flying.glb");
