import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { GUI } from 'dat.gui'
import { Sky } from 'three/addons/objects/Sky.js';
import Spaceship from './src/spaceship.js';
import Planet from './src/planet.js';
import CannonDebugger from 'cannon-es-debugger'
import BlackHole from './src/blackHole.js';
import Asteroid from './src/asteroid.js';
import Bullet from './src/bullet.js';


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
let renderer, camera, scene, controls, gui, guiDiv, music;
let sceneGraph = {};
let player, world;
let spawnCooldown = 50;

const playRadius = 800;
const asteroids = [], maxAsteroids = 100;
var nextAsteroid = 0;

const bullets = [], maxBullets = 50;
var nextBullet = 0;

var frameCounter = 0;


const settings = {
    "sound": false,
    "soundVolume": 0.5,
    "spawnCooldown": 50,
    "playerSpeed": 5,
    "playerMaxSpeed": 50,
    "playerShootCooldown": 5,
}

var debugRenderer = null;

function touchOfGod(object, key) {
    if (key) sceneGraph[key] = object;
    scene.add(object.system);
    world.addBody(object.body);
}

function init() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    scene = new THREE.Scene();
    const backgroundTexture = new THREE.TextureLoader().load("./background.jpg");
    scene.background = backgroundTexture;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.localClippingEnabled = true;
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

    // controls = new OrbitControls(camera, renderer.domElement);

    world.addEventListener("collide", handleMeteorCollision);
    debugRenderer = new CannonDebugger(scene, world);


    const listener = new THREE.AudioListener();
    camera.add(listener);

    music = new THREE.Audio(listener);
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load('./around_the_world.mp3', function (buffer) {
        music.setBuffer(buffer);
        music.setLoop(true);
        music.setVolume(0.5);
    });

    for (let i = 0; i < maxAsteroids; i++) {
        const asteroid = new Asteroid(new THREE.Vector3(5 * i, -10000, 0), 0xb32280);
        asteroids.push(asteroid);
        scene.add(asteroid.mesh);
        world.addBody(asteroid.body);
        asteroid.body.addEventListener("collide", handleMeteorCollision);
        asteroid.body.sleep();
    }

    for (let i = 0; i < maxBullets; i++) {
        const bullet = new Bullet(new THREE.Vector3(5 * i, -90000, 0), 0xb32280);
        bullets.push(bullet);
        scene.add(bullet.mesh);
        world.addBody(bullet.body);
        bullet.body.addEventListener("collide", handleBulletCollision);
        bullet.body.sleep();
    }

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
    for (let i = 0; i < num; i++) {
        const innerRadius = inner;
        const outerRadius = outer;

        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.sqrt(Math.random() * (outerRadius * outerRadius - innerRadius * innerRadius) + innerRadius * innerRadius);

        const radius = Math.floor(Math.random() * 6) + 6;
        const x = Math.cos(angle) * distance;
        const y = Math.random() * 8 - 4;
        const z = Math.sin(angle) * distance;

        var shade = Math.floor(Math.random() * 256);
        var hex = shade.toString(16);
        if (hex.length < 2) hex = "0" + hex;
        var color = "#" + hex + hex + hex;

        var geo, mat, mesh;
        geo = new THREE.IcosahedronGeometry(radius, 0);
        mat = new THREE.MeshPhongMaterial({ color: new THREE.Color(color) });
        mesh = new THREE.Mesh(geo, mat);
        mesh.receiveShadow = true;

        mesh.position.set(x, y, z);
        mesh.rotation.set(Math.random(), Math.random(), Math.random());

        ring.add(mesh);
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
        body.collisionFilterGroup = 4;
        world.addBody(body);
        bodies.push(body);
    }
}

function mancosmico() {
    // asteroid rings
    var ring1 = asteroidRing(1000, 810, 910, new THREE.Vector3(0, 0, 0));
    sceneGraph["ring1"] = ring1;
    var ring2 = asteroidRing(500, 420, 550, new THREE.Vector3(0, -50, 0));
    sceneGraph["ring2"] = ring2;
    var ring3 = asteroidRing(300, 140, 260, new THREE.Vector3(0, -70, 0));
    sceneGraph["ring3"] = ring3;

    // demeter - ring and a moon
    var demeter = new Planet(50, new THREE.Vector3(475, 0, 475), 0xaaaaff, 0.0004, "./texture/jup0vss1.jpg");
    demeter.system.rotateX(- Math.PI / 16);
    demeter.addParticleRing(70, 100, Math.PI / 6, 1500, 0xffffff);
    demeter.addParticleRing(80, 90, Math.PI / 6, 3200, 0xffffff);
    var moon = new Planet(10, new THREE.Vector3(-20, 0, -80), 0xfff000, 0.002, "./texture/earth.jpg");
    moon.system.rotateZ(-0.2);
    world.addBody(moon.body);
    demeter.addMoon(moon);
    touchOfGod(demeter, "demeter");

    // a presi - 2 moons
    var presi = new Planet(900, new THREE.Vector3(-3333, 0, 3333), 0x880000, -0.0003, "./texture/jup3vss2.jpg");
    presi.system.rotateX(- Math.PI / 13);
    presi.system.rotateZ(- Math.PI / 8);
    touchOfGod(presi, "presi");

    // o zanzarino
    var zaza = new Planet(1200, new THREE.Vector3(-3000, 0, -3000), 0x112233, -0.0004, "./texture/plu0rss1.jpg")
    zaza.system.rotateX(3 * Math.PI / 13);
    zaza.system.rotateZ(-2 * Math.PI / 10);
    touchOfGod(zaza, "zaza");

    // o pailance
    var pailance = new Planet(70, new THREE.Vector3(480, 0, -480), 0x000fff, -0.0006, "./texture/orange.jpg")
    pailance.addParticleRing(115, 125, Math.PI / 6, 1500, 0x666666);
    pailance.addParticleRing(100, 140, Math.PI / 6, 4000, 0xaa3344);
    pailance.addParticleRing(100, 140, Math.PI / 6, 4000, 0xffffff);
    pailance.system.rotateX(- Math.PI / 6);
    pailance.system.rotateY(2 * Math.PI / 6);
    touchOfGod(pailance, "pailance");

    // a 

    // black hole in the middle
    var blackHole = new BlackHole(new THREE.Vector3(0, 0, 0), 80, 0xb32280);
    scene.add(blackHole.mesh);
    world.addBody(blackHole.body);
}

function initplayer() {
    player = new Spaceship();
    scene.add(player.mesh);
    world.addBody(player.body);

    player.body.position.set(30, 0, -200);
    player.body.addEventListener("collide", handlePlayerCollision);
}

function thirdPersonCamera() {
    const q = new THREE.Quaternion()

    const cameraOffset = new THREE.Vector3(0, 10, -25)
    cameraOffset.applyQuaternion(player.mesh.getWorldQuaternion(q))
    cameraOffset.add(player.mesh.position)

    const cameraLookat = new THREE.Vector3(0, 5, 10)
    cameraLookat.applyQuaternion(player.mesh.getWorldQuaternion(q))
    cameraLookat.add(player.mesh.position)

    const step = 0.17
    camera.position.lerp(cameraOffset, step)
    camera.lookAt(cameraLookat)
}

function settingsReloader() {
    if (settings.sound)
        music.play();
    else music.pause();

    music.setVolume(settings.soundVolume);
    spawnCooldown = settings.spawnCooldown;
    player.speed = settings.playerSpeed;
    player.maxSpeed = settings.playerMaxSpeed;
    player.shootDelay = settings.playerShootCooldown;
}

function initGUI() {
    const gui = new GUI();

    const worldFolder = gui.addFolder("Configuration");
    worldFolder.add(settings, "sound", false).onChange(settingsReloader);
    worldFolder.add(settings, "soundVolume", 0, 1).onChange(settingsReloader);
    worldFolder.add(settings, "spawnCooldown", 10, 10000).onChange(settingsReloader);

    const playerFolder = gui.addFolder("Player");
    playerFolder.add(settings, "playerSpeed", 0, 20).onChange(settingsReloader);
    playerFolder.add(settings, "playerMaxSpeed", 30, 690).onChange(settingsReloader);
    playerFolder.add(settings, "playerShootCooldown", 2, 100).onChange(settingsReloader);

    worldFolder.open();
    playerFolder.open();

    const guiElement = document.createElement("div");
    guiElement.className = "guiElement info";
    
    const gameInfo = document.createElement("p");
    gameInfo.className = "txt";
    guiElement.appendChild(gameInfo);
    
    document.body.appendChild(guiElement);
    guiDiv = guiElement;

    const controlsInfo = document.createElement("div");
    controlsInfo.className = "controlsInfo info";

    const controlsInfoText = document.createElement("p");
    controlsInfoText.className = "txt";
    controlsInfoText.textContent = "WASD - move";
    controlsInfo.appendChild(controlsInfoText);
    
    const constrolsInfoText2 = document.createElement("p");
    constrolsInfoText2.className = "txt";
    constrolsInfoText2.textContent = "Space - shoot";
    controlsInfo.appendChild(constrolsInfoText2);

    const controlsInfoText3 = document.createElement("p");
    controlsInfoText3.className = "txt";
    controlsInfoText3.textContent = "Shift - boost";
    controlsInfo.appendChild(controlsInfoText3);

    document.body.appendChild(controlsInfo);
}

function updateGUI() {
    guiDiv.children[0].textContent = "Points " + player.points.toString() + " - " + player.health.toString() + " Health";
}

const timeStep = 1 / 60;
function animate() {
    sceneGraph["demeter"].update();
    sceneGraph["presi"].update();
    sceneGraph["zaza"].update();
    sceneGraph["pailance"].update();

    sceneGraph["ring1"].rotateY(-0.0003);
    sceneGraph["ring2"].rotateY(0.00003);
    sceneGraph["ring3"].rotateY(-0.0003);

    for (let i = 0; i < asteroids.length; i++)
        asteroids[i].update();

    for (let i = 0; i < bullets.length; i++)
        bullets[i].update();

    world.step(timeStep);
    renderer.render(scene, camera);

    updateGUI();
    thirdPersonCamera();
    gameplayLoop();

    // if (debugRenderer) debugRenderer.update();
    // console.log(player.body.position);

    window.requestAnimationFrame(animate);
}

function gameplayLoop() {
    if (player.update(keyboard, frameCounter) == true) {
        const bullet = bullets[nextBullet++ % maxBullets];
        bullet.body.wakeUp();
        bullet.body.force.set(0, 0, 0);
        bullet.body.torque.set(0, 0, 0);
        
        const distance = 5;
        const direction = new THREE.Vector3(0, 0, 1);
        direction.applyQuaternion(player.mesh.quaternion);
        
        const pointInFront = player.mesh.position.clone().add(direction.multiplyScalar(distance));
        bullet.body.position.copy(pointInFront);

        const playerSpeed = player.body.velocity.length();
        const speed = playerSpeed > 50 ? playerSpeed * 1.2 : 60;
        var force = direction.multiplyScalar(speed);
        bullet.body.applyLocalImpulse(force);
    }

    if (frameCounter % spawnCooldown == 0) {
        var angle = Math.random() * 2 * Math.PI;
        var dist = Math.random() * 1 + 79;
        var x = dist * Math.cos(angle);
        var z = dist * Math.sin(angle);

        const asteroid = asteroids[nextAsteroid++ % maxAsteroids];
        asteroid.body.position.set(x, 0, z);
        asteroid.body.wakeUp();
    }
    frameCounter++;
}

// coliision detection
function handlePlayerCollision(event) {
    var body1 = event.body;
    var body2 = event.target;

    if (
        body1.collisionFilterGroup == 2 && body2.collisionFilterGroup == 3 ||
        body2.collisionFilterGroup == 2 && body1.collisionFilterGroup == 3
    ) {
        player.hit();
    }
}

function handleMeteorCollision(event) {
    var body1 = event.body;
    var body2 = event.target;

    if (
        body1.collisionFilterGroup == 3 && body2.collisionFilterGroup != 4 ||
        body2.collisionFilterGroup == 3 && body1.collisionFilterGroup != 4) 
    {
        var asteroid, body;

        if (body1.collisionFilterGroup == 3) {
            asteroid = body1;
            body = body2;
        } else {
            body = body1;
            asteroid = body2;
        }

        if(body.collisionFilterGroup != 2) {
            asteroid.sleep();
            asteroid.position.set(0, 10000, 0);
            if (body.collisionFilterGroup == 6) {
                player.points++;
            }
        }
    }
}

function handleBulletCollision(event) {
    var bullet;
    if (event.body.collisionFilterGroup == 2 || event.target.collisionFilterGroup == 2) return;
    if(event.body.collisionFilterGroup == 6) {
        bullet = event.body;
    } else if (event.target.collisionFilterGroup == 6){
        bullet = event.target;
    } else return;

    bullet.sleep();
    bullet.position.set(0, 10000, 0);
}

init();
sky();
mancosmico();
playArea(playRadius);
initplayer();
initGUI();
animate();