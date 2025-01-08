import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.modules.js";

import { OrbitControls } from "https://cdn.skypack.dev/three@0.0129.0/examples/jsm/controls/OrbitControls.js";

import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.Perspectivecamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let object;

let controls;

let objToRender = "scibe";

const loader = new GLTFLoader();

//Load the file
loader.load (
    `models/${objToRender}/scene.gltf`,
    function (gltf) {
        object = gltf.scene;
        scene.add(object);
    },
    funciton (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.error(error);
    };
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("container3d").appendChild(renderer.domElement);

camera.position.z = objToRender === "dino" ? 25 : 500;

const topLight = new THREE.DirectionalLight(0xffffff, 1); 
topLight.position.set(500, 500, 500),
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.Ambientlight(0x333333, objToRender === "dino" ? 5 : 1);
scene.add(ambientLight);

if (objToRender === "dino") {
    controls = new OrbitControls(camera, renderer.domElement);
}

function animate() {
    requestAnimationFrame(animate);

    if (object && objToRender === "scibe") {
        object.rotation.y = -3 + mouseX / window.innerWidth * 3;
        object.rotation.x = -1.2 + mouseY * 2.5 / w.innerHeight;
    }
    renderer.render(scene, camera);
}

window.addEventListener("resize", function() {
    camera.aspect = this.window.innerWidth / this.window.innerHeight;
    camera.updateProjectMatrix();
    renderer.setSize(window.innerWidth, this.window.innerHeight);
});

document.onmousemove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
}

animate();