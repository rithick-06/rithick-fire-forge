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
      meshRef.current.rotation.y += hovered ? 0.03 : 0.015;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.3 : 1}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={hovered ? "#00ffff" : "#0066ff"}
        emissive={hovered ? "#00ffff" : "#0066ff"}
        emissiveIntensity={0.4}
        roughness={0.2}
        metalness={0.9}
        wireframe={hovered}
      />
      {/* Inner core */}
      <mesh scale={0.6}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#ff00ff"
          emissive="#ff00ff"
          emissiveIntensity={0.6}
          transparent
          opacity={0.9}
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
        scale: 1.2,
        rotateY: 15,
        rotateX: 15
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.6} color="#ff00ff" />
        <AnimatedCube />
      </Canvas>
    </motion.div>
  );
};