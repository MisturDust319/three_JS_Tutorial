// simple three.js program

//all threejs progs need these three things:
//  a scene, a camera, and a renderer
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
    75 // field of view
    window.innerWidth/window.innerHeight, //aspect ratio
    //use width/height every time
    0.1, 1000 //min/max clipping plane
    )

var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth,
    window.innerHeight
); // the args set the sizefor the draw area
//  for the app
// a third arg (updateStyle) can be set false
//  to render app at 1/2 resolution

document.body.appendChild(renderer.domElement);
//add the renderer object to the canvas element.

var geometry = new THREE.BoxGeometry(1, 1, 1);
//BoxGeometry streamlines the setup of all the vertices
//  and the fill of the cube
var material = new THREE.MeshBasicMaterial(
    { color: 0x00ff00 }
);
//MeshBasicMaterial will be used to paint
//the cube a color (in this case)
var cube = new THREE.Mesh(geometry, material);
//Mesh takes a geometry, and a material,
//  and applies the material to the geometry
//  which can be inserted into the scene
scene.add(cube);
//cube will now be added to the scene

camera.position.z = 5;
//set camera's z position to 5