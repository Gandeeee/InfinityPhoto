import { useEffect, useRef } from "react";
import * as THREE from "three";
import heroImage from "@assets/generated_images/Hero_wedding_couple_sunset_7f3ae820.png";

// Custom shaders (GLSL)
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  uniform vec2 uMouse;
  uniform vec2 uVelo;
  uniform float uTime;
  uniform vec2 uResolution;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;

    // 1. Correct aspect ratio (cover effect)
    vec2 ratio = vec2(
      min((uResolution.x / uResolution.y) / (1920.0 / 1080.0), 1.0),
      min((uResolution.y / uResolution.x) / (1080.0 / 1920.0), 1.0)
    );
    vec2 uvCover = (uv - 0.5) * ratio + 0.5;

    // 2. Slow auto-breathing ripple (ambient background shimmer)
    float waveX = sin(uvCover.y * 8.0 + uTime * 0.8) * 0.003;
    float waveY = cos(uvCover.x * 8.0 + uTime * 0.8) * 0.003;
    vec2 ambientDistort = vec2(waveX, waveY);

    // 3. Dynamic Mouse Ripple based on distance & mouse speed (velocity)
    vec2 toMouse = uvCover - uMouse;
    float dist = length(toMouse);
    
    // Wave ripple envelope based on distance
    float ripple = sin(dist * 35.0 - uTime * 3.0) * 0.5 + 0.5;
    float strength = smoothstep(0.28, 0.0, dist); // falloff radius of the ripple
    
    // Distort direction is pushed by the mouse movement vector (velocity)
    vec2 mouseDistort = toMouse * ripple * strength * length(uVelo) * 1.5;

    // Combine distortions
    vec2 finalUv = uvCover + ambientDistort + mouseDistort;

    // Sample texture with color split chromatic aberration on hover displacement
    float r = texture2D(uTexture, finalUv + uVelo * 0.02).r;
    float g = texture2D(uTexture, finalUv).g;
    float b = texture2D(uTexture, finalUv - uVelo * 0.02).b;

    gl_FragColor = vec4(r, g, b, 1.0);
  }
`;

export default function LiquidHeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const targetMouseRef = useRef({ x: 0.5, y: 0.5 });
  const veloRef = useRef({ x: 0, y: 0 });
  const targetVeloRef = useRef({ x: 0, y: 0 });
  const lastMouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Setup Three.js
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    // Use orthographic camera for simple full-screen flat projection
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Load texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(heroImage);
    texture.minFilter = THREE.LinearFilter;
    texture.generateMipmaps = false;

    // Setup Material with Custom Shaders
    const uniforms = {
      uTexture: { value: texture },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uVelo: { value: new THREE.Vector2(0, 0) },
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(width, height) },
    };

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      depthWrite: false,
      depthTest: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Mouse Move Event Listener
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      // Invert Y coordinate for WebGL standard space
      const y = 1.0 - (e.clientY - rect.top) / rect.height;

      targetMouseRef.current = { x, y };

      // Calculate instantaneous mouse speed (velocity)
      const dx = x - lastMouseRef.current.x;
      const dy = y - lastMouseRef.current.y;
      
      targetVeloRef.current = { x: dx, y: dy };
      lastMouseRef.current = { x, y };
    };

    // Touch support for mobile devices
    const handleTouchMove = (e: TouchEvent) => {
      if (!e.touches[0]) return;
      const touch = e.touches[0];
      const rect = container.getBoundingClientRect();
      const x = (touch.clientX - rect.left) / rect.width;
      const y = 1.0 - (touch.clientY - rect.top) / rect.height;

      targetMouseRef.current = { x, y };

      const dx = x - lastMouseRef.current.x;
      const dy = y - lastMouseRef.current.y;
      
      targetVeloRef.current = { x: dx, y: dy };
      lastMouseRef.current = { x, y };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      uniforms.uResolution.value.set(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Animation loop
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      // 1. Update time
      uniforms.uTime.value = clock.getElapsedTime();

      // 2. Smoothly lerp mouse coordinate uniforms
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * 0.08;
      uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);

      // 3. Smoothly lerp mouse velocity uniforms and decay target velocity
      veloRef.current.x += (targetVeloRef.current.x - veloRef.current.x) * 0.08;
      veloRef.current.y += (targetVeloRef.current.y - veloRef.current.y) * 0.08;
      uniforms.uVelo.value.set(veloRef.current.x, veloRef.current.y);

      targetVeloRef.current.x *= 0.94; // decelerate
      targetVeloRef.current.y *= 0.94;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up WebGL resources on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      resizeObserver.disconnect();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none"
      data-testid="liquid-hero-canvas"
    />
  );
}
