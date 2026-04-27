  // ── Starfield ──
  const canvas = document.getElementById('stars');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
 
  const stars = Array.from({ length: 250 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.2,
    t: Math.random() * Math.PI * 2,
    speed: 0.005 + Math.random() * 0.01
  }));
 
  (function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.t += s.speed;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(210,225,255,${0.3 + Math.abs(Math.sin(s.t)) * 0.7})`;
      ctx.fill();
    });
    requestAnimationFrame(tick);
  })();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
