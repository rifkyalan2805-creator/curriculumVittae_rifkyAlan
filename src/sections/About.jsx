import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiZap, FiHeart } from 'react-icons/fi';

const stats = [
  { value: 2,   suffix: '+', label: 'Years Experience' },
  { value: 20,  suffix: '+', label: 'Projects Built' },
  { value: 10,  suffix: '+', label: 'Happy Clients' },
  { value: 100, suffix: 'K+', label: 'Lines of Code' },
];

const values = [
  { icon: FiCode,  title: 'Clean Code',      desc: 'Setiap baris kode ditulis dengan presisi, keterbacaan, dan maintainability sebagai prioritas utama.' },
  { icon: FiZap,   title: 'Fast & Modern',   desc: 'Performa adalah fitur. Saya membangun app yang cepat dimuat dan terasa responsif di setiap device.' },
  { icon: FiHeart, title: 'User-Centered',   desc: 'Desain yang baik dimulai dari memahami pengguna. UX yang intuitif selalu jadi fondasi setiap proyek.' },
];

function CountUp({ target, suffix, inView }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 40;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <>{count}{suffix}</>;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
});

export default function About() {
  const statsRef = useRef(null);
  const inView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <section id="about">
      <div className="container">

        <motion.div {...fadeUp(0)}>
          <p className="section-label">Abot me</p>
          <h2 className="section-title">Saya membangun hal-hal<br />yang berarti</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', marginTop: '56px', alignItems: 'start' }}>

          {/* Left: Bio */}
          <motion.div {...fadeUp(0.1)}>
            {/*profile picture */}
            <img src={`${process.env.PUBLIC_URL}/poto.jpg`} alt='Rifky Alan Maulana' style={{
              width: '100%',
              aspectRatio: '4/3 ',
              objectFit: 'cover',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border)',
            }} />

            {/* Stats grid */}
            <div ref={statsRef} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {stats.map(({ value, suffix, label }) => (
                <div key={label} style={{
                  padding: '20px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  transition: 'border-color 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent-dim)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', fontWeight: 800, color: 'var(--accent-bright)', lineHeight: 1 }}>
                    <CountUp target={value} suffix={suffix} inView={inView} />
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '6px' }}>{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Text + Values */}
          <motion.div {...fadeUp(0.2)}>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              Halo! Saya <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Rifky Alan Maulana</strong>, seorang Full Stack Developer berbasis di Indonesia yang passionate tentang membangun produk digital yang tidak hanya bekerja dengan baik — tapi juga terasa luar biasa.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              Perjalanan saya di dunia programming dimulai saat saya menulis baris kode pertama dan langsung jatuh cinta. Sejak itu, saya terus belajar dan berkembang — dari membangun website statis hingga aplikasi full-stack yang kompleks.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '40px' }}>
              Di luar coding, saya senang explore teknologi terbaru, berkontribusi ke open source, dan berbagi knowledge dengan komunitas developer Indonesia.
            </p>

            {/* Value cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} style={{
                  display: 'flex', gap: '16px',
                  padding: '18px 20px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  alignItems: 'flex-start',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-dim)'; e.currentTarget.style.background = 'var(--bg-hover)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.background = ''; }}
                >
                  <div style={{
                    flexShrink: 0, width: '36px', height: '36px',
                    borderRadius: '9px', background: 'var(--accent-glow)',
                    border: '1px solid var(--accent-dim)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--accent-bright)', fontSize: '16px',
                  }}>
                    <Icon />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.92rem', fontWeight: 500, fontFamily: 'var(--font-display)', color: 'var(--text-primary)', marginBottom: '4px' }}>{title}</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
