import React, { useEffect, useRef } from 'react';

export const SteamCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Realistic atmospheric mist particles
    const mistParticles = [];
    const NUM_MIST = 28;

    class MistParticle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * (width + 200) - 100;
        this.y = initial ? Math.random() * height : height + Math.random() * 100;
        this.radius = 80 + Math.random() * 140;
        this.vx = (Math.random() - 0.5) * 0.25;
        this.vy = -(0.18 + Math.random() * 0.35);
        this.opacity = 0;
        this.maxOpacity = 0.035 + Math.random() * 0.055;
        this.life = 0;
        this.maxLife = 350 + Math.random() * 350;
        this.growth = 0.04 + Math.random() * 0.06;
      }

      update() {
        this.x += this.vx + Math.sin(this.life * 0.015) * 0.15;
        this.y += this.vy;
        this.radius += this.growth;
        this.life++;

        // Smooth fade-in & fade-out
        if (this.life < 80) {
          this.opacity = (this.life / 80) * this.maxOpacity;
        } else if (this.life > this.maxLife - 80) {
          this.opacity = ((this.maxLife - this.life) / 80) * this.maxOpacity;
        }

        if (this.life >= this.maxLife || this.y < -this.radius) {
          this.reset();
        }
      }

      draw() {
        if (this.opacity <= 0.001) return;
        const grad = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.radius
        );
        grad.addColorStop(0, `rgba(245, 158, 11, ${this.opacity * 0.7})`);
        grad.addColorStop(0.45, `rgba(217, 119, 6, ${this.opacity * 0.35})`);
        grad.addColorStop(0.8, `rgba(180, 83, 9, ${this.opacity * 0.1})`);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < NUM_MIST; i++) {
      mistParticles.push(new MistParticle());
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < mistParticles.length; i++) {
        mistParticles[i].update();
        mistParticles[i].draw();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
};

export default SteamCanvas;
