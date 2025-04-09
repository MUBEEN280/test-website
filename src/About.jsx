// import React, { useEffect } from 'react';
// import * as THREE from 'three';
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

// const About = ({ darkMode }) => {
//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75, // Field of View (adjust based on your preference)
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.getElementById('about-container').appendChild(renderer.domElement);

//     // Create neon text
//     const loader = new FontLoader();
//     loader.load(
//       'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', // Font URL
//       (font) => {
//         const textGeometry = new TextGeometry('Welcome to the About Page', {
//           font: font,
//           size: 4, // Size of the text
//           height: 0.5,
//           curveSegments: 12,
//         });

//         // Create neon effect material
//         const neonMaterial = new THREE.MeshBasicMaterial({
//           color: darkMode ? 0x00ff00 : 0x0000ff, // Neon green for dark mode, neon blue for light mode
//           emissive: darkMode ? 0x00ff00 : 0x0000ff, // Glowing effect
//           emissiveIntensity: 1.5, // Brightness of the glow
//           wireframe: true, // Gives it a wireframe 3D look
//         });

//         const textMesh = new THREE.Mesh(textGeometry, neonMaterial);
//         scene.add(textMesh);

//         // Adjust camera position based on screen size
//         camera.position.z = window.innerWidth < 768 ? 7 : 10; // Closer camera on smaller screens

//         // Position the text in the center
//         textMesh.position.set(-10, 0, 0);

//         // Animation loop
//         const animate = function () {
//           requestAnimationFrame(animate);

//           // Rotate text for dynamic effect
//           textMesh.rotation.x += 0.01;
//           textMesh.rotation.y += 0.01;

//           renderer.render(scene, camera);
//         };

//         animate();
//       }
//     );

//     // Adjust for window resizing
//     window.addEventListener('resize', () => {
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//     });

//     return () => {
//       renderer.dispose();
//     };
//   }, [darkMode]);

//   return (
//     <div
//       id="about-container"
//       style={{
//         backgroundColor: darkMode ? 'black' : 'white',
//         color: darkMode ? 'white' : 'black',
//         height: '100vh',
//         overflow: 'hidden',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <h1>{darkMode ? 'Dark Mode About Page' : 'Light Mode About Page'}</h1>
//     </div>
//   );
// };

// export default About;
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

const About = ({ darkMode }) => {
  useEffect(() => {
    // Set up the scene, camera, and renderer for the 3D text
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('about-container').appendChild(renderer.domElement);

    // Load font and create 3D text geometry
    const loader = new FontLoader();
    loader.load(
      'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', 
      (font) => {
        const textGeometry = new TextGeometry('Welcome', {
          font: font,
          size: 4,
          height: 0.5,
          curveSegments: 12,
        });

        // Create a neon effect material for the text
        const neonMaterial = new THREE.MeshBasicMaterial({
          color: darkMode ? 0x00ff00 : 0x0000ff,  // Green for dark mode, Blue for light mode
          emissive: darkMode ? 0x00ff00 : 0x0000ff,
          emissiveIntensity: 1.5,
          wireframe: true,
        });

        // Create the text mesh and add it to the scene
        const textMesh = new THREE.Mesh(textGeometry, neonMaterial);
        scene.add(textMesh);

        // Set camera position and text position
        camera.position.z = 10;
        textMesh.position.set(-10, 0, 0);

        // Animation loop
        const animate = function () {
          requestAnimationFrame(animate);
          textMesh.rotation.x += 0.01;
          textMesh.rotation.y += 0.01;
          renderer.render(scene, camera);
        };

        animate();
      }
    );

    // Adjust renderer size when window is resized
    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });

    // Cleanup when component is unmounted
    return () => {
      renderer.dispose();
    };
  }, [darkMode]);

  return (
    <div
      id="about-container"
      style={{
        backgroundColor: darkMode ? 'black' : 'white',
        color: darkMode ? 'white' : 'black',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {/* We only display the 3D text here */}
      <h1 style={{ color: darkMode ? 'white' : 'black' }}>
        {darkMode ? 'Dark Mode About Page' : 'Light Mode About Page'}
      </h1>
    </div>
  );
};

export default About;


