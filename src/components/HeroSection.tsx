import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Box, Torus, Text3D, Center } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin, Mail, Zap, Cpu, Brain } from 'lucide-react';
import { useRef, useState } from 'react';

// Enhanced 3D Scene Components
const AnimatedSphere = () => {
  const meshRef = useRef<any>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} visible args={[1, 100, 200]}>
      <MeshDistortMaterial
        color="#00ffff"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.9}
      />
    </Sphere>
  );
};

const FloatingCube = ({ position, color, speed }: any) => {
  const meshRef = useRef<any>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed * 0.01;
      meshRef.current.rotation.y += speed * 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime + position[1]) * 0.5 + position[1];
    }
  });

  return (
    <Box ref={meshRef} position={position} args={[0.5, 0.5, 0.5]}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        transparent
        opacity={0.8}
      />
    </Box>
  );
};

const HolographicTorus = () => {
  const meshRef = useRef<any>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.02;
    }
  });

  return (
    <Torus ref={meshRef} args={[2, 0.2, 16, 100]} position={[0, 0, -2]}>
      <meshStandardMaterial
        color="#ff00ff"
        emissive="#ff00ff"
        emissiveIntensity={0.5}
        transparent
        opacity={0.6}
        wireframe
      />
    </Torus>
  );
};

// Matrix Rain Effect
const MatrixRain = () => {
  const characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
  const columns = 50;
  const drops: number[] = [];

  for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: columns }, (_, i) => (
        <motion.div
          key={i}
          className="absolute text-cyan-400 text-xs font-mono opacity-30"
          style={{
            left: `${(i / columns) * 100}%`,
            top: `${drops[i]}%`,
          }}
          animate={{
            y: [0, 1000],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "linear",
          }}
        >
          {characters[Math.floor(Math.random() * characters.length)]}
        </motion.div>
      ))}
    </div>
  );
};

// Enhanced Particle Field
const ParticleField = () => {
  const particles = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    size: Math.random() * 3 + 1,
    color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00'][Math.floor(Math.random() * 4)],
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
          }}
          animate={{
            y: [-20, 20],
            x: [-10, 10],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Scanning Line Effect
const ScanningLine = () => (
  <motion.div
    className="absolute inset-0 pointer-events-none"
    animate={{ y: [-100, 1000] }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
  </motion.div>
);

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-3d">
      {/* Cyber Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, hsl(220 25% 5%), hsl(220 25% 10%), hsl(220 25% 5%))'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
      </div>

      {/* Matrix Rain */}
      <MatrixRain />

      {/* Scanning Line */}
      <ScanningLine />

      {/* Particle Field */}
      <ParticleField />

      {/* Enhanced 3D Scene */}
      <div className="absolute top-10 right-10 w-80 h-80 opacity-80">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
          <AnimatedSphere />
          <HolographicTorus />
          <FloatingCube position={[-3, 2, 0]} color="#00ff00" speed={1} />
          <FloatingCube position={[3, -2, 0]} color="#ff00ff" speed={1.5} />
          <FloatingCube position={[0, 3, 2]} color="#ffff00" speed={0.8} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Tech Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center gap-6 mb-8"
          >
            {[Brain, Cpu, Zap].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 rounded-full cyber-gradient flex items-center justify-center electric-glow"
              >
                <Icon className="w-8 h-8 text-white" />
              </motion.div>
            ))}
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-cyan-400 font-mono tracking-wider"
          >
            &gt; INITIALIZING SYSTEM...
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-7xl md:text-9xl font-bold cyber-gradient-text animate-cyber-pulse glitch"
          >
            RITHICK M K
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-3xl md:text-5xl font-semibold text-white/90 font-mono"
          >
            AI & ML DEVELOPER
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg md:text-xl text-cyan-300/80 max-w-3xl mx-auto leading-relaxed font-mono"
          >
            Building intelligent systems with{' '}
            <span className="text-cyan-400 font-bold">Generative AI</span>,{' '}
            <span className="text-purple-400 font-bold">LLMs</span>, and{' '}
            <span className="text-green-400 font-bold">Computer Vision</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button
              size="lg"
              className="electric-glow group relative overflow-hidden bg-cyan-600 hover:bg-cyan-500 text-white font-mono"
              onClick={() => window.open('https://github.com/rithick-06', '_blank')}
            >
              <span className="relative z-10 flex items-center gap-2">
                &gt; EXPLORE PROJECTS
                <ArrowDown className="w-4 h-4 group-hover:animate-bounce" />
              </span>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="group border-cyan-400/50 hover:border-cyan-400 hover:cyber-glow text-cyan-400 font-mono neon-border"
            >
              <span className="flex items-center gap-2">
                <Download className="w-4 h-4 group-hover:animate-bounce-slow" />
                DOWNLOAD RESUME
              </span>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex justify-center gap-6 pt-8"
          >
            {[
              { icon: Github, href: "https://github.com/rithick-06", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/rithick-m-k/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:rithick06@yahoo.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.2, y: -5, rotate: 360 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-full border border-cyan-400/30 hover:border-cyan-400 hover:cyber-glow transition-all duration-300 electric-glow"
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-6 h-6 text-cyan-400" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-8 border-2 border-cyan-400 rounded-full flex items-center justify-center cursor-pointer cyber-glow hover:scale-110"
          onClick={() => scrollToSection('about')}
        >
          <ArrowDown className="w-4 h-4 text-cyan-400" />
        </motion.div>
      </motion.div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
    </section>
  );
};