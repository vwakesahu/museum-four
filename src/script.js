import "./style.css";
import * as THREE from "three";
import{OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import{GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import * as lilgui from 'lil-gui'
import gsap from "gsap";

//canvas
const canvas = document.querySelector("canvas");

//scene
const scene = new THREE.Scene();

//camera
const camera = new THREE.PerspectiveCamera(
    45, // field of view
    window.innerWidth / window.innerHeight, //ascept ratio
    0.1, //near
    1000 // far
);
//camera.position.z = 5; //move it back
//scene.add(camera);

camera.position.set(0.42, 6.95, 3.89,)
camera.rotation.set(-0.59, 0.19, 0.13)


//renderer
const renderer = new THREE.WebGLRenderer({
    canvas:canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight);

// orbit controls
const controls = new OrbitControls(camera, canvas);
controls.enableDumping = true;  // sense of weight 

let position = 0;

// gltf loader
const gltfLoader = new GLTFLoader();
gltfLoader.load('/models/museum4/scene.gltf', (gltf)=>{ 
    console.log('our model here',gltf);
    const model = gltf.scene;
    scene.add(model);

    window.addEventListener("mouseup", function(){
        console.log(camera.position);
        console.log(camera.rotation);
    });

    window.addEventListener("mouseup", function(){
        switch(position){
            case 0:
            cameraMovement(18.428,0.938,-6.030);
            cameraRotation(2.665,1.039,-2.720);
            position = 1;
            break;

            case 1:
            cameraMovement(7.246, 13.221,-4.686);
            cameraRotation(-2.214,0.961, 2.311);
            position = 2;
            break;
   
            case 2:
            cameraMovement(10.230, 3.833, -1.786);
            cameraRotation(-3.125,-0.363, -3.135);
            position = 3;
            break;
    
            case 3:
            cameraMovement(-1.217, 3.812,-1.618);
            cameraRotation(3.102, -0.044, 3.139);
            position = 4;
            break;
   
            case 4:
            cameraMovement(-11.073, 6.037, -0.299);
            cameraRotation(-2.930, 0.568, 3.026);
            position = 5;
            break;
            
            case 5:
            cameraMovement(-9.480, 5.878, 4.585);
            cameraRotation(-0.002, 1.120, 0.002);
            position = 6;
            break;

            case 6:
            cameraMovement(-24.957, 15.546, 6.203);
            cameraRotation(-0.619, -1.025, -0.547);
            position = 7;
            break;

            case 7:
            cameraMovement(-12.245, 4.136, 6.808);
            cameraRotation(-0.028, -0.136, -0.003);
            position = 8;
            break;
           
            case 8:
            cameraMovement(5.571, 4.528, 3.686);
            cameraRotation(-0.035, -0.102, -0.003);
            position = 9;
            break;

            case 9:
            cameraMovement(7.481, 3.460, 6.076);
            cameraRotation(0.143, -0.917, 0.113);
            position = 0;
            break;

        }
    })
});

function cameraMovement(x, y, z){
    gsap.to(camera.position, {
        x,
        y,
        z,
        duration:3,
    });
    }
    
    
    function cameraRotation(x, y, z){
    gsap.to(camera.rotation, {
        x,
        y,
        z,
        duration:3,
    });
    }
    

const animate = () => {
    renderer.render(scene, camera);

    // controls.update();
};

renderer.setAnimationLoop(animate);

animate();
