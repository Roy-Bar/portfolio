"use client";

import { useMemo, useRef, useSyncExternalStore } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

/* Deterministic PRNG (mulberry32) — pure, so particle placement is stable
   across renders and safe to compute during render. */
function seededRandom(seed: number) {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function FloatingShape() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.08;
    ref.current.rotation.y += delta * 0.12;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} scale={1.6} position={[1.4, 0.2, 0]}>
        <icosahedronGeometry args={[1, 6]} />
        <MeshDistortMaterial
          color="#22d3ee"
          emissive="#a855f7"
          emissiveIntensity={0.25}
          distort={0.45}
          speed={1.4}
          roughness={0.25}
          metalness={0.6}
        />
      </mesh>
    </Float>
  );
}

function Particles({ count = 220 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const rand = seededRandom(count * 7919);
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (rand() - 0.5) * 14;
      arr[i * 3 + 1] = (rand() - 0.5) * 8;
      arr[i * 3 + 2] = (rand() - 0.5) * 6 - 2;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#ffffff"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onChange: () => void) {
  const m = window.matchMedia(REDUCED_MOTION_QUERY);
  m.addEventListener("change", onChange);
  return () => m.removeEventListener("change", onChange);
}

export default function HeroScene() {
  const reduced = useSyncExternalStore(
    subscribeToReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  );

  if (reduced) return null;

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.1} color="#ffffff" />
      <pointLight position={[-5, -3, -2]} intensity={1.4} color="#a855f7" />
      <pointLight position={[4, 3, 2]} intensity={0.9} color="#22d3ee" />

      <Particles />
      <FloatingShape />
    </Canvas>
  );
}
