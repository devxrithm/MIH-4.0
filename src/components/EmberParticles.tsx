'use client';

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

// Creates a neon red dot texture matching Valorant's aesthetic
const createDotTexture = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");

  if (!ctx) return new THREE.Texture();

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  // Outer glow (soft, wide)
  const outerGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 32);
  outerGlow.addColorStop(0, "rgba(255, 40, 40, 0.6)");
  outerGlow.addColorStop(0.4, "rgba(220, 38, 38, 0.25)");
  outerGlow.addColorStop(1, "rgba(220, 38, 38, 0)");
  ctx.fillStyle = outerGlow;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Inner bright core
  const innerCore = ctx.createRadialGradient(cx, cy, 0, cx, cy, 10);
  innerCore.addColorStop(0, "rgba(255, 200, 200, 1)");
  innerCore.addColorStop(0.3, "rgba(255, 60, 60, 1)");
  innerCore.addColorStop(1, "rgba(220, 38, 38, 0)");
  ctx.fillStyle = innerCore;
  ctx.beginPath();
  ctx.arc(cx, cy, 10, 0, Math.PI * 2);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

// Main component for the animated background
export const EmberParticles = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 10;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    const dotTexture = createDotTexture();
    const totalParticleCount = 500;

    const positions = new Float32Array(totalParticleCount * 3);
    const velocities = new Float32Array(totalParticleCount * 3);

    for (let i = 0; i < totalParticleCount; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      velocities[i * 3]     = (Math.random() - 0.5) * 0.0005;
      velocities[i * 3 + 1] = 0.001 + Math.random() * 0.002;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.0005;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      size: 0.22,
      transparent: true,
      opacity: 2,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      map: dotTexture,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Resize handler
    const handleResize = () => {
      if (currentMount) {
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      }
    };
    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      const pos = geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < pos.length; i += 3) {
        pos[i]     += velocities[i];
        pos[i + 1] += velocities[i + 1];
        pos[i + 2] += velocities[i + 2];

        if (pos[i + 1] > 10) {
          pos[i]     = (Math.random() - 0.5) * 20;
          pos[i + 1] = -10;
          pos[i + 2] = (Math.random() - 0.5) * 20;
        }
      }

      geometry.attributes.position.needsUpdate = true;
      points.rotation.y += 0.0001;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      geometry.dispose();
      dotTexture.dispose();
      material.dispose();
      renderer.dispose();
      if (currentMount) {
        currentMount.innerHTML = '';
      }
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};