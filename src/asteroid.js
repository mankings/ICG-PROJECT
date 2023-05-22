import * as THREE from 'three';

export default class Asteroid {
    constructor(position, radius, color) {
        this.mesh = this.makeMesh(position, radius, color);
    }

    update() {
    }

    makeMesh(position, radius, color) {
        var geo, mat, mesh

        // o que é isto
        geo = new THREE.IcosahedronGeometry(radius, 0);
        mat = new THREE.MeshPhongMaterial({ color: new THREE.Color(color) });
        mesh = new THREE.Mesh(geo, mat);
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        mesh.position.set(position.x, position.y, position.z);
        mesh.rotation.set(Math.random(), Math.random(), Math.random());

        return mesh;
    }
}