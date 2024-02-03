const scene = new THREE.Scene();
//scene.background = new THREE.color("0xffffff");
const camera = new THREE.OrthographicCamera();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 800);
document.body.appendChild(renderer.domElement);

// TorusGeometry
const geometrything = new THREE.TorusGeometry(0.25, 0.1, 5, 50);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const dvd = new THREE.Mesh(geometrything, material);
scene.add(dvd);

camera.position.z = 1;

let xframe = 0.0023;
let yframe = 0.0033;
let bounce = 0;

dvd.position.x = 0;
dvd.position.y = 0;

function animate() {
    requestAnimationFrame(animate);

    //anim code here

    dvd.position.x += xframe;
    dvd.position.y += yframe;
    //console.log(dvd.position.x)
    //console.log(dvd.position.y)

    if (dvd.position.x > 0.85 && bounce < 9) {
        xframe = -0.0023;
        dvd.material.color.setRGB(Math.random() * 256, Math.random() * 256, Math.random() * 256);
        dvd.scale.x -= 0.1;
        dvd.scale.y -= 0.1;

        bounce++;
    }
    if (dvd.position.x < -0.85 && bounce < 9) {
        xframe = 0.0023;
        dvd.material.color.setRGB(Math.random() * 256, Math.random() * 256, Math.random() * 256);
        dvd.scale.x -= 0.1;
        dvd.scale.y -= 0.1;

        bounce++;
    }
    if (dvd.position.y > 0.9 && bounce < 9) {
        yframe = -0.0033;
        dvd.material.color.setRGB(Math.random() * 256, Math.random() * 256, Math.random() * 256);
        dvd.scale.x -= 0.1;
        dvd.scale.y -= 0.1;

        bounce++;
    }
    if (dvd.position.y < -0.9 && bounce < 9) {
        yframe = 0.0033;
        dvd.material.color.setRGB(Math.random() * 256, Math.random() * 256, Math.random() * 256);
        dvd.scale.x -= 0.1;
        dvd.scale.y -= 0.1;

        bounce++;
    }
    if (bounce == 8) {
        dvd.scale.x -= 0.1;
        dvd.scale.y -= 0.1;

        if (dvd.scale.x <= 0 && dvd.scale.y <= 0) {
            dvd.visible = false;
        }
    }
    //end anim code
    renderer.render(scene, camera);
};

animate();
