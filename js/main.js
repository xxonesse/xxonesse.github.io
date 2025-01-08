import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

// Setup scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;  // Adjust camera position for better visibility

// Variables for mouse position
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let object;

// GLTFLoader to load model
const loader = new GLTFLoader();

// Load the GLB file
loader.load(
    'models/scifiCube_test.glb',  // Make sure this path is correct
    function (gltf) {
        object = gltf.scene;
        object.position.set(0, 0, 0);  // Ensure the object is centered
        scene.add(object);
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.error('An error happened', error);
    }
);

// Setup renderer
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container3d").appendChild(renderer.domElement);

// Add lighting
const topLight = new THREE.DirectionalLight(0xffffff, 1.5);  // Increased intensity
topLight.position.set(5, 5, 5);
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, 1);  // Adjusted intensity
scene.add(ambientLight);

// Setup OrbitControls for camera
const controls = new OrbitControls(camera, renderer.domElement);

// Handle window resizing
window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Track mouse movement
document.onmousemove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
};

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    if (object) {
        object.rotation.y = -3 + (mouseX / window.innerWidth) * 3;
        object.rotation.x = -1.2 + (mouseY * 2.5 / window.innerHeight);
    }

    // Update the controls
    controls.update();

    // Render the scene
    renderer.render(scene, camera);
}

animate();
