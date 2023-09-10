import * as THREE from 'https://threejs.org/build/three.module.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#beehive'),
    alpha: true
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth/3, window.innerHeight/2)
camera.position.setZ(20);

renderer.render(scene, camera)

const geometry = new THREE.BoxGeometry( 10, 10, 10 ); 
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
const cube = new THREE.Mesh( geometry, material ); 
scene.add( cube );

function loop() {
    requestAnimationFrame(loop)
    renderer.setSize(window.innerWidth/3, window.innerHeight/2)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.005
    cube.rotation.z += 0.01

    renderer.render(scene, camera)

}

loop()