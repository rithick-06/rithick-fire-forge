import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const AnimatedCube: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y += hovered ? 0.02 : 0.01;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={hovered ? "#ff6b35" : "#ffa500"}
        emissive={hovered ? "#ff4500" : "#ff6b35"}
        emissiveIntensity={0.3}
        roughness={0.3}
        metalness={0.8}
      />
      {/* Inner core */}
      <mesh scale={0.6}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#ffff00"
          emissive="#ffa500"
          emissiveIntensity={0.5}
          transparent
          opacity={0.8}
        />
      </mesh>
    </mesh>
  );
};

export const Logo3D: React.FC = () => {
  return (
    <motion.div
      className="w-12 h-12 cursor-pointer"
      whileHover={{ 
        scale: 1.1,
        rotateY: 15,
        rotateX: 15
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ff6b35" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffa500" />
        <AnimatedCube />
      </Canvas>
    </motion.div>
  );
};