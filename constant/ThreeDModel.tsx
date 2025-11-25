"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

const ThreeDModel = () => {
    const isMobile = useMediaQuery({maxWidth:853})
  return (
    <div>
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Model scale={isMobile ? 0.23 : undefined} position={isMobile ? [0, -1.5, 0] : undefined}></Model>
          <OrbitControls></OrbitControls>
        </Canvas>
      </figure>
    </div>
  );
};

export default ThreeDModel;
