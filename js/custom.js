(function() {
  const initLiquidBg = () => {
    if (document.getElementById('liquid-bg')) return;

    const bg = document.createElement('div');
    bg.id = 'liquid-bg';
    
    for (let i = 0; i < 3; i++) {
      const blob = document.createElement('div');
      blob.className = 'blob';
      bg.appendChild(blob);
    }
    
    document.body.prepend(bg);

    // Mouse movement interaction
    document.addEventListener('mousemove', (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      const blobs = document.querySelectorAll('.blob');
      blobs.forEach((blob, index) => {
        const speed = (index + 1) * 20;
        blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    });
  };

  // Run on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLiquidBg);
  } else {
    initLiquidBg();
  }

  // Support PJAX
  document.addEventListener('pjax:complete', initLiquidBg);
})();
