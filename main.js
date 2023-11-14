import * as THREE from 'three';

// Создаем сцену
const scene = new THREE.Scene();

// Создаем камеру
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Создаем рендерер
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Создаем геометрию
const geometry = new THREE.BufferGeometry();

// Создаем массивы для хранения позиций и цветов
const positions = [];
const colors = [];

// Заполняем массивы позиций и цветов
for (let x = -1.5; x <= 1.5; x += 0.01) {
  for (let y = -1.0; y <= 1.0; y += 0.01) {
    positions.push(x, y, 0);
    colors.push(Math.random(), Math.random(), Math.random());
  }
}

// Задаем атрибуты геометрии
geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colors), 3));

// Создаем материал
const material = new THREE.PointsMaterial({ size: 0.01, vertexColors: THREE.VertexColors });
material.vertexColors = THREE.VertexColors;
// Создаем точки
const points = new THREE.Points(geometry, material);
scene.add(points);

// Функция анимации
function animate() {
  requestAnimationFrame(animate);

  // Изменяем положение точек
  points.rotation.x += 0.01;
  points.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();