import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { Sky } from 'three/addons/objects/Sky.js';
import Spaceship from './src/spaceship.js';
import Planet from './src/planet.js';
import CannonDebugger from 'cannon-es-debugger'
import Asteroid from './src/asteroid.js';

var KEYS = {
    "W": 87,
    "A": 65,
    "S": 83,
    "D": 68,
    "SPACE": 32,
    "SHIFT": 16,
    "CTRL": 17,
    "ALT": 18,
    "TAB": 9,
    "ENTER": 13,
    "ESC": 27,
}

// keyboard listeners
var keyboard = {};
document.addEventListener('keydown', onDocumentKeyDown, false);
document.addEventListener('keyup', onDocumentKeyUp, false);

function onDocumentKeyDown(event) {
    keyboard[event.keyCode] = true;
}
function onDocumentKeyUp(event) {
    keyboard[event.keyCode] = false;
}

// resize window listener
window.addEventListener('resize', onWindowResize);
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// mancósmico
let renderer, camera, scene, controls;
let sceneGraph = {};
let player, world;
const playRadius = 800;

var debugRenderer;

function touchOfGod(object, key) {
    if (key) sceneGraph[key] = object;
    scene.add(object.system);
    world.addBody(object.body);
}

function init() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    scene = new THREE.Scene();
    const backgroundTexture = new THREE.TextureLoader().load("/background.jpg");
    scene.background = backgroundTexture;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    const htmlElement = document.querySelector("#manquisse");
    htmlElement.appendChild(renderer.domElement);

    let fov = 70;
    camera = new THREE.PerspectiveCamera(fov, width / height, 1, 5000);
    camera.position.set(0, 20, 0);

    // starDome();
    const ambientLight = new THREE.AmbientLight('rgb(255, 255, 255)', 0.25);
    scene.add(ambientLight);
    const spotLight = new THREE.SpotLight('rgb(255, 255, 255)', 0.8);
    spotLight.position.set(0, 1000, 10000);
    scene.add(spotLight);

    const axesHelper = new THREE.AxesHelper(1000);
    // scene.add(axesHelper);

    world = new CANNON.World({
        gravity: new CANNON.Vec3(0, 0, 0), // because space
    });

    debugRenderer = CannonDebugger(scene, world);

    // controls = new OrbitControls(camera, renderer.domElement);

    renderer.localClippingEnabled = true;

    window.addEventListener("resize", () => onWindowResize(), false);
}

function sky() {
    let sky, sun;
    sky = new Sky();
    sky.scale.setScalar(450000);
    sun = new THREE.Vector3();
    const effectController = {
        turbidity: 7,
        rayleigh: 3.5,
        mieCoefficient: 0.035,
        mieDirectionalG: 0.84,
        elevation: 0,
        azimuth: 0,
        exposure: 0.0536,
    };

    const uniforms = sky.material.uniforms;
    uniforms['turbidity'].value = effectController.turbidity;
    uniforms['rayleigh'].value = effectController.rayleigh;
    uniforms['mieCoefficient'].value = effectController.mieCoefficient;
    uniforms['mieDirectionalG'].value = effectController.mieDirectionalG;

    const phi = THREE.MathUtils.degToRad(90 - effectController.elevation);
    const theta = THREE.MathUtils.degToRad(effectController.azimuth);
    sun.setFromSphericalCoords(1, phi, theta);
    uniforms['sunPosition'].value.copy(sun);
    renderer.toneMappingExposure = effectController.exposure;

    scene.add(sky);
}

function starDome() {
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];
    const radius = 5;

    const particleCount = 1000;

    for (let i = 0; i < particleCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
        positions.push(x, y, z);

        const color = new THREE.Color();
        color.setHSL(Math.random(), 1.0, 0.5);
        colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({ size: 0.1, vertexColors: true });

    stardome = new THREE.Points(geometry, material);
    stardome.renderOrder = 1000;
    scene.add(stardome);
}

function asteroidRing(num, inner, outer, center) {
    // meshes
    const ring = new THREE.Group();
    const asteroids = [];
    for (let i = 0; i < num; i++) {
        const innerRadius = inner;
        const outerRadius = outer;

        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.sqrt(Math.random() * (outerRadius * outerRadius - innerRadius * innerRadius) + innerRadius * innerRadius);
    
        const radius = Math.floor(Math.random() * 7) + 3;
        const x = Math.cos(angle) * distance;
        const y = Math.random() * 8 - 4;
        const z = Math.sin(angle) * distance;

        var shade = Math.floor(Math.random() * 256);
        var hex = shade.toString(16);
        if (hex.length < 2) hex = "0" + hex;
        var color = "#" + hex + hex + hex;

        var asteroid = new Asteroid(new THREE.Vector3(x, y, z), radius, color);
        ring.add(asteroid.mesh);
        asteroids.push(asteroid);
    }

    ring.position.set(center.x, center.y, center.z);
    scene.add(ring);

    return ring;
}

function playArea(radius) {
    const bodies = [];
    const circleCenter = new CANNON.Vec3(0, 0, 0);
    const circleRadius = radius;
    const numBodies = 50;

    const angleStep = (2 * Math.PI) / numBodies;

    for (let i = 0; i < numBodies; i++) {
        var angle = i * angleStep;
        var x = circleCenter.x + circleRadius * Math.cos(angle);
        var z = circleCenter.z + circleRadius * Math.sin(angle);

        var body = new CANNON.Body({
            mass: 0,
            position: new CANNON.Vec3(x, 0, z),
            shape: new CANNON.Box(new CANNON.Vec3(50, 4, 4)),
        });
        var direction = circleCenter.vsub(body.position);
        body.quaternion.setFromVectors(new CANNON.Vec3(0, 0, 1), direction);
        world.addBody(body);
        bodies.push(body);
    }
}

function mancosmico() {
    // asteroid rings
    var ring1 = asteroidRing(1500, 800, 900, new THREE.Vector3(0, 0, 0));
    sceneGraph["ring1"] = ring1;
    var ring2 = asteroidRing(1000, 420, 550, new THREE.Vector3(0, -50, 0));
    sceneGraph["ring2"] = ring2;
    var ring3 = asteroidRing(550, 110, 260, new THREE.Vector3(0, -70, 0));
    sceneGraph["ring3"] = ring3;

    // demeter - ring and a moon
    var demeter = new Planet(50, new THREE.Vector3(475, 0, 475), 0xaaaaff, 0.0004, "./texture/jup0vss1.jpg");
    demeter.addParticleRing(70, 100, Math.PI / 6, 5000, 0xffffff);
    demeter.addParticleRing(80, 90, Math.PI / 6, 2000, 0xffffff);
    var moon = new Planet(10, new THREE.Vector3(-20, 0, -80), 0xfff000, 0.002, "./texture/earth.jpg");
    moon.system.rotateZ(-0.2);
    world.addBody(moon.body);
    demeter.addMoon(moon);
    touchOfGod(demeter, "demeter");

    // // lots of moons
    // var artemis = new Planet(30, new THREE.Vector3(170, 0, -170), 0xaaffaa, -0.0009, "./texture/jup1vss2.jpg");
    // artemis.addParticleRing(45, 55, 2 * Math.PI / 6, 5000, 0xffaa55);
    // artemis.addParticleRing(40, 50, Math.PI / 6, 5000, 0xffaa11);
    // touchOfGod(artemis, "artemis");

    // big planet - 2 moons
    var hades = new Planet(900, new THREE.Vector3(-3333, 0, 3333), 0x880000, 0.0003, "./texture/jup3vss2.jpg");
    touchOfGod(hades, "hades");
}

function initplayer() {
    player = new Spaceship();
    scene.add(player.mesh);
    world.addBody(player.body);

    player.body.position.set(0, 0, 0);
}

function thirdPersonCamera() {
    const q = new THREE.Quaternion()

    const cameraOffset = new THREE.Vector3(-7, 10, -25)
    cameraOffset.applyQuaternion(player.mesh.getWorldQuaternion(q))
    cameraOffset.add(player.mesh.position)

    const cameraLookat = new THREE.Vector3(0, 5, 10)
    cameraLookat.applyQuaternion(player.mesh.getWorldQuaternion(q))
    cameraLookat.add(player.mesh.position)

    const step = 0.17;
    camera.position.lerp(cameraOffset, step)
    camera.lookAt(cameraLookat)
}

const timeStep = 1 / 60;
function animate() {
    player.update(keyboard);
    sceneGraph["demeter"].update();
    // sceneGraph["artemis"].update();
    sceneGraph["hades"].update();

    sceneGraph["ring1"].rotateY(-0.0003);
    sceneGraph["ring2"].rotateY(0.00003);
    sceneGraph["ring3"].rotateY(-0.0003);

    thirdPersonCamera();

    world.step(timeStep);
    renderer.render(scene, camera);
    // debugRenderer.update();

    // console.log(player.body.position);

    window.requestAnimationFrame(animate);
}

init();
sky();
mancosmico();
playArea(playRadius);
initplayer();
animate();