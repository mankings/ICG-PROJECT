import * as THREE from 'three';
import * as CANNON from 'cannon-es';

export default class BlackHole {
    constructor(position, radius, color) {
        this.mesh = this.makeMesh(position, radius, color);
        this.body = this.makeBody(position, radius);
    }

    update() {
    }

    makeMesh(position, radius, color) {
        var blackHole = new THREE.Object3D();
        var geo, mat, mesh;

        geo = new THREE.SphereGeometry(radius, 32, 32);
        mat = new THREE.ShaderMaterial({ 
            vertexShader: document.getElementById('blackHoleVertexShader').textContent,
            fragmentShader: document.getElementById('blackHoleFragmentShader').textContent,
            blending: THREE.AdditiveBlending,
            side: THREE.BackSide,
        });
        mesh = new THREE.Mesh(geo, mat);
        mesh.scale.set(1.1, 1.1, 1.1);
        
        mesh.position.copy(position);
        blackHole.add(mesh);

        geo = new THREE.SphereGeometry(radius, 32, 32);
        mat = new THREE.MeshBasicMaterial({ color: color });
        mesh = new THREE.Mesh(geo, mat);
        blackHole.add(mesh);
        mesh.position.copy(position);

        return blackHole;
    }

    makeBody(position, radius) {
        const shape = new CANNON.Sphere(radius);
        const body = new CANNON.Body({ mass: 0 });
        body.addShape(shape);
        body.position.copy(position);

        body.collisionFilterGroup = 4;

        return body;
    }
}