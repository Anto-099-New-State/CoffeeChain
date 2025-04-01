"use client";
import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeJsScene = () => {
  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    const scene = new THREE.Scene();
    scene.background = null; // Removes background
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Enable transparency
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0); // Transparent background
    document.body.appendChild(renderer.domElement);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.update();

    // Create Sphere Geometry
    const geometry = new THREE.SphereGeometry(0.5, 16, 16);
    const material = new THREE.MeshNormalMaterial({ flatShading: true });

    function getBall() {
      const ball = new THREE.Mesh(geometry, material);
      ball.position.set(
        THREE.MathUtils.randFloatSpread(10),
        THREE.MathUtils.randFloatSpread(10),
        THREE.MathUtils.randFloatSpread(Math.PI)
      );
      return ball;
    }

    let numBalls = 20;
    for (let i = 0; i < numBalls; i++) {
      let ball = getBall();
      scene.add(ball);
    }

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null;
};

export default ThreeJsScene;
