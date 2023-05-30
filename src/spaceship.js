import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { ConvexGeometry } from 'three/addons/geometries/ConvexGeometry.js';

var KEYS = {
    "W": 87,
    "A": 65,
    "S": 83,
    "D": 68,
    "SPACE": 32,
    "SHIFT": 16,
    "CTRL": 17,
}

export default class Spaceship {
    constructor() {
        this.body = this.makeBody();
        this.mesh = this.makeMesh();

        this.shootDelay = 10;
        this.maxSpeed = 100;
        this.speed = 5;

        this.health = 10;
        this.points = 0;
        this.lastShot = 0;
    }

    hit() {
        this.health--;
    }

    point() {
        this.points++;
    }

    makeMesh() {
        const spaceship = new THREE.Object3D();
        var group, shape, geo, mat, mesh;

        var plane = new THREE.Plane().setFromCoplanarPoints(
            new THREE.Vector3(0, 0.1, 4), // j
            new THREE.Vector3(2, -1, -3), // d  
            new THREE.Vector3(-2, -1, -3), // c
        );

        // cockpit
        geo = new THREE.CapsuleGeometry(1, 2, 5, 24);
        mat = new THREE.MeshPhongMaterial({
            color: 0x62ffef,
            // side: THREE.DoubleSide,
            // clippingPlanes: [plane],
            // clipIntersection: true,
        });
        mesh = new THREE.Mesh(geo, mat);
        mesh.rotateX(1.3 + Math.PI / 4);
        mesh.position.set(0, 0.2, -0.5);
        spaceship.add(mesh);

        // nave do loner
        group = new THREE.Object3D();
        var points = [
            new THREE.Vector3(-3.5, 0, -3), // a
            new THREE.Vector3(-2, -1, -3), // c
            new THREE.Vector3(0, 1, -3), // g
            new THREE.Vector3(-1.8, 2.2, -2.6), // e
            new THREE.Vector3(-0.65, -0.5, 3), // h
        ]

        geo = new ConvexGeometry(points);
        mat = new THREE.MeshPhongMaterial({ color: 0xffffff, side: THREE.DoubleSide });
        mesh = new THREE.Mesh(geo, mat);
        group.add(mesh);

        points = [
            new THREE.Vector3(2, -1, -3), // d  
            new THREE.Vector3(3.5, 0, -3), // b
            new THREE.Vector3(1.8, 2.2, -2.6), // f
            new THREE.Vector3(0.65, -0.5, 3), // i
            new THREE.Vector3(0, 1, -3), // g

        ]

        geo = new ConvexGeometry(points);
        mat = new THREE.MeshPhongMaterial({ color: 0xffffff, side: THREE.DoubleSide });
        mesh = new THREE.Mesh(geo, mat);
        group.add(mesh);

        points = [
            new THREE.Vector3(0, 0, 4), // j
            new THREE.Vector3(0, 1, -3), // g
            new THREE.Vector3(2, -1, -3), // d  
            new THREE.Vector3(-2, -1, -3), // c
        ]

        geo = new ConvexGeometry(points);
        mat = new THREE.MeshPhongMaterial({ color: 0xffffff, side: THREE.DoubleSide });
        mesh = new THREE.Mesh(geo, mat);
        group.add(mesh);
        spaceship.add(group);

        // right engine
        group = new THREE.Object3D();

        points = [
            new THREE.Vector2(-2.9, 0.2),
            new THREE.Vector2(-2, -0.2),
            new THREE.Vector2(-0.8, -0.2),
            new THREE.Vector2(-0.5, 0.6),
            new THREE.Vector2(-1.8, 1.6)
        ]

        shape = new THREE.Shape();
        shape.moveTo(points[0].x, points[0].y);
        shape.lineTo(points[1].x, points[1].y);
        shape.lineTo(points[2].x, points[2].y);
        shape.lineTo(points[3].x, points[3].y);
        shape.lineTo(points[4].x, points[4].y);

        var intensity, r, g, b, colorstr;
        intensity = 0.3;
        r = 0x39;
        g = 0xa3;
        b = 0xff;

        for (var i = 0; i < 4; i++) {
            var depth = 0.2;
            geo = new THREE.ExtrudeGeometry(shape, { depth: depth, bevelEnabled: false });

            intensity += 0.1;
            r += 0x30;
            g += 0x30;
            b += 0x30;
            colorstr = "rgb(" + r + "," + g + "," + b + ")";

            mat = new THREE.MeshPhongMaterial({
                color: colorstr,
                emissive: colorstr,
                emissiveIntensity: intensity,
            });

            mesh = new THREE.Mesh(geo, mat);

            const scale = 1 - i / 10;
            mesh.scale.set(scale, scale, 1);

            mesh.translateX(-i / 10);
            mesh.translateY(i / 20);
            mesh.translateZ(-i / 18);
            group.add(mesh);
        }

        group.translateZ(-3.1);
        group.rotateX(0.1);


        spaceship.add(group);

        // left engine
        group = group.clone();
        group.scale.x = -1;

        spaceship.add(group);

        // bottom engine
        group = new THREE.Object3D();

        shape = new THREE.Shape();
        shape.moveTo(-1.8, -0.8);
        shape.lineTo(-2, -0.5);
        shape.lineTo(2, -0.5);
        shape.lineTo(1.8, -0.8);
        shape.lineTo(-1.8, -0.8);

        var depth = 0.2
        geo = new THREE.ExtrudeGeometry(shape, { depth: depth, bevelEnabled: false });
        mat = new THREE.MeshPhongMaterial({
            color: 0xff33a0,
            emissive: 0xff1352,
            emissiveIntensity: 0.3,
        });
        mesh = new THREE.Mesh(geo, mat);
        mesh.translateZ(-3.05);
        group.add(mesh);

        mat = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            emissive: 0xffffff,
            emissiveIntensity: 0.5,
        });
        mesh = new THREE.Mesh(geo, mat);
        mesh.scale.set(0.8, 0.5, 1);
        mesh.translateZ(-3.1);
        mesh.translateY(-0.3);
        group.add(mesh);

        spaceship.add(group);

        // left wing
        shape = new THREE.Shape();
        shape.moveTo(2.9, 0.5);
        shape.lineTo(3, 2.3);
        shape.lineTo(3.5, 3.1);
        shape.lineTo(2, 2.7);
        shape.lineTo(1, 0);
        shape.lineTo(2.9, 0.5);

        var depth = 0.2
        geo = new THREE.ExtrudeGeometry(shape, { depth: depth, bevelEnabled: false });
        mat = new THREE.MeshPhongMaterial({ color: 0x754fff });
        mesh = new THREE.Mesh(geo, mat);
        mesh.rotateX(Math.PI / 2);
        mesh.rotateZ(-Math.PI / 2);
        mesh.translateY(1.5);
        mesh.translateX(-1);
        spaceship.add(mesh);

        // right wing
        mesh = mesh.clone();
        mesh.rotateX(Math.PI);
        mesh.translateY(3);
        spaceship.add(mesh);

        // top wing
        shape = new THREE.Shape();
        shape.moveTo(-2.9, 0.5);
        shape.lineTo(-3, 2.3);
        shape.lineTo(-3.5, 3.1);
        shape.lineTo(-2, 2.7);
        shape.lineTo(0, 0.8);
        shape.lineTo(-2.9, 0.5);

        depth = 0.2
        geo = new THREE.ExtrudeGeometry(shape, { depth: depth, bevelEnabled: false });
        mat = new THREE.MeshPhongMaterial({ color: 0x754fff });
        mesh = new THREE.Mesh(geo, mat);
        mesh.rotateY(- Math.PI / 2);
        mesh.position.set(depth / 2, 0, 0);
        spaceship.add(mesh);

        spaceship.position.copy(this.body.position);
        spaceship.quaternion.copy(this.body.quaternion);
        spaceship.name = "spaceship";
        return spaceship;
    }

    makeBody() {
        const shape = new CANNON.Sphere(3.5);
        const body = new CANNON.Body({
            mass: 5,
            linearDamping: 0.4,
            angularDamping: 0.5,
        });
        body.collisionFilterGroup = 2;

        body.linearFactor.set(1, 0, 1);
        body.angularFactor.set(0, 1, 0);

        body.addShape(shape);
        return body;
    }

    // TODO: make this a trail when speeding up
    makeTrail() {
        let particleGeometry = new THREE.BufferGeometry();

        // Create an array of particle positions
        var particlePositions = new Float32Array(1000 * 3);

        for (var i = 0; i < 1000; i++) {
            // Set the x, y, and z coordinates for the particle
            var x = 0;
            var y = 0;
            var z = 0;
            particlePositions[i * 3 + 0] = x;
            particlePositions[i * 3 + 1] = y;
            particlePositions[i * 3 + 2] = z;
        }

        particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

        var particleMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.1
        });

        var particleSystem = new THREE.Points(particleGeometry, particleMaterial);
        return particleSystem;
    }

    update(keyboard, frameCount) {
        return this.move(keyboard, frameCount);
        // this.animateTrail();
    }

    animateTrail() {
        // Get the particle positions from the buffer geometry
        var positions = this.trail.geometry.attributes.position.array;

        for (var i = 0; i < 1000; i++) {

            // Assign a random speed to the particle
            var speed = Math.random() * 0.5;

            // Move the particle in the -z direction at the random speed
            positions[i * 3 + 2] -= speed;

            //expanding on x and y axis
            // Check if the particle has reached the reset point
            if (positions[i * 3 + 2] < this.mesh.position.z - 10) {
                // Reset the particle back to its starting position
                positions[i * 3 + 0] = this.mesh.position.x;
                positions[i * 3 + 1] = this.mesh.position.y;
                positions[i * 3 + 2] = this.mesh.position.z - 3;
            }
        }

        // Update the particle positions in the buffer geometry
        this.trail.geometry.attributes.position.newedsUpdate = true;
    }

    move(keyboard, frameCount) {
        const turnSpeed = 0.8;
        
        const lineardamp = 0.4;
        const angulardamp = 0.5;
        const linearstop = 0.7;
        const angularstop = 0.9;

        var force, impulse, time, applyPoint;

        // forward
        if (keyboard[KEYS.W] && this.body.velocity.length() < this.maxSpeed) {
            force = new CANNON.Vec3(0, 0, this.speed);
            time = 1;
            applyPoint = new CANNON.Vec3(0, 0, -3);
            this.body.applyLocalImpulse(force, applyPoint, time);
        }

        // stop
        if (keyboard[KEYS.S]) {
            this.body.linearDamping = linearstop;
            this.body.angularDamping = angularstop;
        } else {
            this.body.linearDamping = lineardamp;
            this.body.angularDamping = angulardamp;
        }

        // boost
        if (keyboard[KEYS.W] && keyboard[KEYS.SHIFT] && this.body.velocity.length() < this.maxSpeed) {
            force = new CANNON.Vec3(0, 0, this.speed * 3);
            time = 1;
            applyPoint = new CANNON.Vec3(0, 0, -3);
            impulse = force.scale(time);
            this.body.applyLocalImpulse(force, applyPoint);
        }

        // turning
        if (keyboard[KEYS.D]) {
            force = new CANNON.Vec3(0, 0, turnSpeed);
            time = 0.5;
            applyPoint = new CANNON.Vec3(2, 0, -3);
            this.body.applyLocalImpulse(force, applyPoint, time);

            force = new CANNON.Vec3(0, 0, turnSpeed * 0.7);
            time = 0.5;
            applyPoint = new CANNON.Vec3(2, 0, 0);
            this.body.applyLocalImpulse(force, applyPoint, time);
        }

        if (keyboard[KEYS.A]) {
            force = new CANNON.Vec3(0, 0, turnSpeed);
            time = 0.5;
            applyPoint = new CANNON.Vec3(-2, 0, -3);
            this.body.applyLocalImpulse(force, applyPoint, time);

            force = new CANNON.Vec3(0, 0, turnSpeed * 0.7);
            time = 0.5;
            applyPoint = new CANNON.Vec3(-2, 0, 0);
            this.body.applyLocalImpulse(force, applyPoint, time);
        }

        this.mesh.position.copy(this.body.position);
        this.mesh.quaternion.copy(this.body.quaternion);

        if (keyboard[KEYS.SPACE]) {
            if (frameCount > this.lastShot + this.shootDelay) {
                this.lastShot = frameCount;
                return true;
            }
        }

        return false;
    }
}