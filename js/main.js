
  // Create a scene, camera, and renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('container3d').appendChild(renderer.domElement);

  // Add a light source
  const light = new THREE.AmbientLight(0x404040); // Ambient light
  scene.add(light);

  // Set up the camera position
  camera.position.z = 5;

  // Load the GLTF model
  const loader = new THREE.GLTFLoader();
  loader.load('models/scifiCube_test.glb', (gltf) => {
    // Add the loaded model to the scene
    scene.add(gltf.scene);
  }, undefined, (error) => {
    console.error(error);
  });

  // Animation loop to render the scene
  function animate() {
    requestAnimationFrame(animate);

    // You can add rotation or any animation here
    renderer.render(scene, camera);
  }

  animate();

