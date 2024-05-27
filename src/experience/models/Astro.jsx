import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Astro(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./models/astro.glb");
  const { actions } = useAnimations(animations, group);

  useGSAP(() => {
    // gsap.to(group.current.position, {
    //   scrollTrigger: {
    //     scrub: 2,
    //   },
    //   z: 2,
    //   y: -2,
    // });
    // gsap.to(group.current.rotation, {
    //   scrollTrigger: {
    //     scrub: 2,
    //   },
    //   y: `${Math.PI * 2 + 4}`,
    // });
  });

  useEffect(() => {
    actions.Animation.play();
  }, []);

  return (
    <group position={[-4, -3, 0]} scale={1.5} ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.323}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Walking_astronaut_94">
                <group name="Walking_astronaut_Skeleton_93" scale={0.01}>
                  <group name="geo1_0">
                    <group name="astronaut2_1" />
                  </group>
                  <group name="skeletal3_2">
                    <group name="GLTF_created_0">
                      <primitive object={nodes.GLTF_created_0_rootJoint} />
                      <skinnedMesh
                        name="Object_102"
                        geometry={nodes.Object_102.geometry}
                        material={materials.material0}
                        skeleton={nodes.Object_102.skeleton}
                      />
                      <skinnedMesh
                        name="Object_103"
                        geometry={nodes.Object_103.geometry}
                        material={materials.material0}
                        skeleton={nodes.Object_103.skeleton}
                      />
                      <skinnedMesh
                        name="Object_106"
                        geometry={nodes.Object_106.geometry}
                        material={materials.material1}
                        skeleton={nodes.Object_106.skeleton}
                      />
                      <skinnedMesh
                        name="Object_109"
                        geometry={nodes.Object_109.geometry}
                        material={materials.material2}
                        skeleton={nodes.Object_109.skeleton}
                      />
                      <group name="node3_95_correction">
                        <group name="node3_95" />
                      </group>
                      <group name="node4_96_correction">
                        <group name="node4_96" />
                      </group>
                      <group name="node5_97_correction">
                        <group name="node5_97" />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/astro.glb");
