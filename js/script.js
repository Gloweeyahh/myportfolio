// WebGL Setup using Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('webgl-canvas') });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Voice Command for Navigation
const voiceCommandButton = document.getElementById('voice-command');
voiceCommandButton.addEventListener('click', () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.onstart = () => console.log('Voice recognition started...');
    
    recognition.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase();
        if (command.includes('home')) {
            window.location.href = '#home';
        } else if (command.includes('projects')) {
            window.location.href = '#projects';
        } else if (command.includes('contact')) {
            window.location.href = '#contact';
        }
    };

    recognition.start();
});

// AI-Personalized Layouts (Mocked for demo purposes)
document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('userInteraction')) || {};
    // Based on interaction, change layout, color scheme, or featured projects
    if (user.frequentSection === 'projects') {
        document.getElementById('projects').style.backgroundColor = '#282828';
    }
    // Simulate a change in behavior after interaction
    document.addEventListener('click', () => {
        localStorage.setItem('userInteraction', JSON.stringify({ frequentSection: 'projects' }));
    });
});
