"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import Model from "./Model";
import { Float, OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "./Loader";

const ThreeDModel = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <div>
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader></Loader>}>
            <Float>
            {" "}
            <Model
              scale={isMobile ? 0.23 : undefined}
              position={isMobile ? [0, -1.5, 0] : undefined}
            ></Model>
          </Float></Suspense>
          
          {/* <OrbitControls></OrbitControls> */}
          <Rig />
        </Canvas>
      </figure>
    </div>
  );
};

interface RigProps {
  intensity?: number;
  damping?: number;
}
function Rig({ intensity = 2, damping = 0.3 }: RigProps) {
  useFrame((state, delta) => {
    const targetPosition: [number, number, number] = [
      (state.mouse.x / 10) * intensity,
      1 + (state.mouse.y / 10) * intensity,
      3,
    ];
    easing.damp3(state.camera.position, targetPosition, damping, delta);
  });
  return null;
}

export default ThreeDModel;
