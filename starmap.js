// Creation of stars for background of star map

const canvas = document.getElementById('stars');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = Array.from({ length: 250 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 1.2,
  opacity: 0.3 + Math.random() * 0.7
}));

stars.forEach(s => {
  context.beginPath();
  context.arc(s.x, s.y, s.r, 0, Math.PI * 2);
  context.fillStyle = `rgba(210,225,255,${s.opacity})`;
  context.fill();
});

