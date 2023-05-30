import * as THREE from 'three'
import * as CANNON from 'cannon-es'

export default class Bullet {
    constructor() {
        this.mesh = this.makeMesh();
        this.body = this.makeBody();
    }

    update() {
        this.mesh.position.copy(this.body.position);
        this.mesh.quaternion.copy(this.body.quaternion);
    }

    makeMesh() {
        const bullet = new THREE.Mesh(
            new THREE.SphereGeometry(1, 32, 32),
            new THREE.MeshPhongMaterial({ color: 0x9dfff8 })
        );
        return bullet;
    }

    makeBody() {
        const body = new CANNON.Body({
            mass: 1,
            shape: new CANNON.Sphere(1),
        });
        body.collisionFilterGroup = 6;
        body.collisionFilterMask = 3 | 4;
        body.position.set(0, 9000, 0);
        return body;
    }
}
