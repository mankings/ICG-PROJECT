import * as THREE from 'three';
import * as CANNON from 'cannon-es';

export default class Planet {
    constructor(radius, position, color, speed) {
        this.body = this.makeBody(radius, position);
        this.mesh = this.makeMesh(radius, color);
        this.system = this.makeSystem();

        this.rings = [];
        this.moons = [];

        this.speed = speed; 
    }

    update() {
        for (let i = 0; i < this.rings.length; i++)
            this.rings[i].rotateY(-0.0004);

        for (let i = 0; i < this.moons.length; i++)
            this.moons[i].update();

        this.system.rotateY(this.speed);

        this.body.position.copy(this.mesh.localToWorld(new THREE.Vector3(0, 0, 0)));
        this.body.quaternion.copy(this.mesh.quaternion);

    }

    makeSystem() {
        const system = new THREE.Object3D();
        system.add(this.mesh);
        return system;
    }

    makeMesh(radius, color) {
        const planet = new THREE.Object3D();
        var shape, geo, mat, mesh;

        // ball
        geo = new THREE.SphereGeometry(radius, 32, 32);
        mat = new THREE.MeshPhongMaterial({ color: color });
        mesh = new THREE.Mesh(geo, mat);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        planet.add(mesh);

        planet.position.copy(this.body.position);
        planet.quaternion.copy(this.body.quaternion);

        return planet;
    }

    addParticleRing(inner, outter, rotate, particles, color) {
        var geo, mat, points;

        geo = new THREE.BufferGeometry();
        const positions = [];

        for (let i = 0; i < particles; i++) {
            const angle = (i / particles) * Math.PI * 2;
            const x = Math.cos(angle) * (inner + (Math.random() - 0.5) * (outter - inner));
            const y = -2 + Math.random() * 4;
            const z = Math.sin(angle) * (inner + (Math.random() - 0.5) * (outter - inner));

            positions.push(x, y, z);
        }

        geo.setAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );
        mat = new THREE.PointsMaterial({ color: color, size: 0.4 });
        points = new THREE.Points(geo, mat);
        points.rotateZ(rotate);
        this.rings.push(points);
        this.mesh.add(points);
    }

    addMoon(planet) {
        const moon = planet;
        this.moons.push(moon);
        this.mesh.add(planet.system);
    }

    makeBody(radius, position) {
        const shape = new CANNON.Sphere(radius);
        const body = new CANNON.Body({
            mass: 0,
        });
        body.addShape(shape);

        body.position.copy(position)
        return body;
    }
}