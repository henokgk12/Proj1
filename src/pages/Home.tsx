import { NavLink } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { Mesh } from "three";
import logo from "../assets/logo.png" ;

export default function Home() {
  const cubeRef = useRef<Mesh>(null);

  // Rotate cube slowly
  useEffect(() => {
    const animate = () => {
      if (cubeRef.current) {
        cubeRef.current.rotation.x += 0.005;
        cubeRef.current.rotation.y += 0.005;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  // Labels positions around cube
  const labels = [
    { text: "CAD", position: [2, 0, 0] },
    { text: "SolidWorks", position: [-2, 0, 0] },
    { text: "3D Printing", position: [0, 2, 0] },
    { text: "Simulation", position: [0, -2, 0] },
    { text: "Design", position: [0, 0, 2] },
  ];
  return (
    <section className="min-h-screen flex flex-col items-center justify-center max-w-6xl mx-auto px-6 py-16 text-center md:text-left">
      
      {/* Logo Showcase */}
      <div className="mb-8 flex justify-center">
        <img 
          src={logo} 
          alt="Mechena Logo" 
          className="w-32 md:w-48 animate-pulse drop-shadow-lg"
        />
      </div>

      {/* Hero Content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        
        {/* Text content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Hi, I’m <span className="text-blue-600 dark:text-blue-400">Mechena</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            I design, build, and optimize machines for the future. Bringing innovative mechanical solutions to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
            <NavLink
              to="/projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              View Projects
            </NavLink>
            <NavLink
              to="/contact"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Contact Me
            </NavLink>
          </div>
        </div>
</div>


      {/* 3D Cube */}
      <div className="flex-1 mb-12 md:mb-0 w-full h-96">
        <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <mesh ref={cubeRef}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#3B82F6" />
          </mesh>
          

          {/* Labels */}
          {labels.map((label, i) => (
            <Text
              key={i}
              position={label.position as [number, number, number]}
              fontSize={0.9}
              color="#1D4ED8"
              anchorX="center"
              anchorY="middle"
            >
              {label.text}
            </Text>
          ))}

          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </section>
  );
}
