import * as THREE from 'three';
import * as CANNON from 'cannon-es';

export default class Asteroid {
    constructor(position, color) {
        this.mesh = this.makeMesh(position, color);
        this.body = this.makeBody(position);
    }

    update() {
        this.mesh.position.copy(this.body.position);
        this.mesh.quaternion.copy(this.body.quaternion);
    }

    makeMesh(position, color) {
        const radius = 10;

        const asteroid = new THREE.Object3D();
        
        const inside = new THREE.Mesh(
            new THREE.IcosahedronGeometry(radius, 0),
            new THREE.MeshPhongMaterial({ 
                color: color,
            })
        );
        inside.scale.set(0.4, 0.4, 0.4)
        asteroid.add(inside);

        const outside = new THREE.Mesh(
            inside.geometry,
            new THREE.ShaderMaterial({ 
                vertexShader: document.getElementById('blackHoleVertexShader').textContent,
                fragmentShader: document.getElementById('blackHoleFragmentShader').textContent,
                blending: THREE.AdditiveBlending,
                side: THREE.BackSide,
            })
        );
        outside.scale.set(0.9, 0.9, 0.9);
        asteroid.add(outside);


        asteroid.position.copy(position);
        return asteroid;
    }

    makeBody(position) {
        const body = new CANNON.Body({
            mass: 1,
            position: position,
            shape: new CANNON.Box(new CANNON.Vec3(4.2, 4.2, 4.2)),
        });
        body.collisionFilterGroup = 3;
        body.angularFactor.set(0.1, 0.1, 0.1);

        body.linearFactor.set(1, 0, 1);

        body.position.copy(position);
        return body;
    }
}