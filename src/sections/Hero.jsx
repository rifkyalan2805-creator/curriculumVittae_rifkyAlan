import React, { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiDownload, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-scroll';

const socials = [
  { icon: FiGithub,   href: 'https://github.com/rifkyalan2805-creator',   label: 'GitHub' },
  { icon: FiLinkedin, href: 'www.linkedin.com/in/rifky-alan-234636363', label: 'LinkedIn' },
  { icon: FiTwitter,  href: 'https://twitter.com/rifkyalanmaulana', label: 'Twitter' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] },
});

export default function Hero() {
  const canvasRef = useRef(null);

  /* Particle field */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let W, H, particles;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      resize();
      particles = Array.from({ length: 55 }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124,111,205,${p.alpha})`;
        ctx.fill();
      });
      // draw lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(124,111,205,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener('resize', init);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', init); };
  }, []);

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Particle canvas */}
      <canvas ref={canvasRef} style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '100px', paddingBottom: '60px' }}>
        <div style={{ maxWidth: '780px' }}>

          {/* Status badge */}
          <motion.div {...fadeUp(0.1)} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 14px', borderRadius: '100px',
              border: '1px solid var(--border-hover)',
              background: 'rgba(124,111,205,0.08)',
              fontSize: '0.82rem', color: 'var(--text-secondary)',
            }}>
              <span style={{
                width: '7px', height: '7px', borderRadius: '50%',
                background: 'var(--teal)',
                boxShadow: '0 0 8px var(--teal)',
                animation: 'pulse 2s ease infinite',
              }} />
              Available for freelance & full-time
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 {...fadeUp(0.2)} style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.8rem, 6vw, 5.2rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: '18px',
            color: 'var(--text-primary)',
          }}>
            Rifky Alan
            <br />
            <span style={{ color: 'var(--accent-bright)' }}>Maulana</span>
          </motion.h1>

          {/* Typing role */}
          <motion.div {...fadeUp(0.35)} style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            fontWeight: 600,
            color: 'var(--text-secondary)',
            marginBottom: '24px',
            minHeight: '2em',
          }}>
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2000,
                'React Specialist', 2000,
                'UI/UX Enthusiast', 2000,
                'Problem Solver', 2000,
              ]}
              repeat={Infinity}
              cursor
              style={{ display: 'inline-block' }}
            />
          </motion.div>

          {/* Bio */}
          <motion.p {...fadeUp(0.45)} style={{
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.75,
            maxWidth: '560px',
            marginBottom: '40px',
          }}>
            Saya membangun produk digital yang cepat, indah, dan berdampak.
            Passionate tentang clean code, pengalaman pengguna, dan teknologi modern.
          </motion.p>

          {/* CTA buttons */}
          <motion.div {...fadeUp(0.55)} style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '52px' }}>
            <Link to="projects" smooth duration={600} offset={-80}>
              <button style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '13px 28px',
                borderRadius: '12px',
                background: 'var(--accent)',
                color: '#fff',
                fontSize: '0.95rem',
                fontWeight: 500,
                fontFamily: 'var(--font-body)',
                transition: 'background 0.2s, transform 0.15s',
                cursor: 'pointer',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-bright)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = ''; }}
              >
                Lihat Projects <FiArrowRight />
              </button>
            </Link>

            <a
              href="/cv-rifky.pdf"
              download
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '13px 28px',
                borderRadius: '12px',
                border: '1px solid var(--border-hover)',
                background: 'transparent',
                color: 'var(--text-primary)',
                fontSize: '0.95rem',
                fontWeight: 500,
                fontFamily: 'var(--font-body)',
                transition: 'background 0.2s, border-color 0.2s, transform 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.transform = ''; }}
            >
              <FiDownload /> Download CV
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div {...fadeUp(0.65)} style={{ display: 'flex', gap: '12px' }}>
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '42px', height: '42px', borderRadius: '10px',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                  fontSize: '18px',
                  transition: 'color 0.2s, border-color 0.2s, background 0.2s, transform 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-bright)'; e.currentTarget.style.borderColor = 'var(--accent-dim)'; e.currentTarget.style.background = 'var(--accent-glow)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = ''; e.currentTarget.style.borderColor = ''; e.currentTarget.style.background = ''; e.currentTarget.style.transform = ''; }}
              >
                <Icon />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{
          position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          color: 'var(--text-muted)', fontSize: '0.72rem', letterSpacing: '0.1em',
          textTransform: 'uppercase', fontFamily: 'var(--font-display)',
          zIndex: 1,
        }}
      >
        <span>Scroll</span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, var(--text-muted), transparent)',
          animation: 'scrollPulse 1.8s ease-in-out infinite',
        }} />
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 1; transform: scaleY(1); transform-origin: top; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}
