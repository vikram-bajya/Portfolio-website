"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Icosahedron, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

export function HeroModel() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float
      speed={2} // Animation speed
      rotationIntensity={1.5} // XYZ rotation intensity
      floatIntensity={2} // Up/down float intensity
    >
      <Icosahedron ref={meshRef} args={[1.5, 3]} scale={1.5}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.4} // Amount of distortion
          speed={2} // Speed of distortion
          roughness={0.2}
          metalness={0.8}
        />
      </Icosahedron>
      {/* Additional smaller orbiting geometry */}
      <mesh position={[2.5, 1, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#06b6d4" roughness={0.1} metalness={0.8} />
      </mesh>
      <mesh position={[-2, -1.5, 1]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#f43f5e" roughness={0.2} metalness={0.5} />
      </mesh>
    </Float>
  );
}
