import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'Note application',
    desc: 'Aplikasi pencatat catatan digital dengan fitur penandaan, sinkronisasi cloud, dan tema gelap.',
    tags: ['JavaScript'],
    category: 'Fullstack',
    github: 'https://github.com/rifkyalan2805-creator/noteProject_app.git',
    live: '#',
    featured: true,
    color: '#7c6fcd',
    year: '2026',
  },
  {
    id: 2,
    title: 'Landing Page',
    desc: 'Landing page untuk produk digital dengan desain modern, animasi smooth, dan optimasi SEO.',
    tags: ['JavaScript', 'CSS'],
    category: 'Frontend',
    github: 'https://github.com/rifkyalan2805-creator/movie-web.git',
    live: '#',
    featured: true,
    color: '#2dd4bf',
    year: '2024',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    desc: 'Dashboard cuaca interaktif dengan visualisasi data, forecast 7 hari, dan geolocation otomatis.',
    tags: ['React', 'Chart.js', 'OpenWeather API'],
    category: 'Frontend',
    github: 'https://github.com/rifkyalanmaulana',
    live: '#',
    featured: false,
    color: '#f59e0b',
    year: '2023',
  },
  {
    id: 4,
    title: 'movie-web',
    desc: 'Aplikasi web untuk mencari dan menampilkan informasi film dengan fitur pencarian, filter genre, dan detail film.',
    tags: ['JavaScript', 'Tailwind CSS', 'MockAPI', 'Typescript'],
    category: 'Front end',
    github: 'https://github.com/rifkyalan2805-creator/movie-web.git',
    live: '#',
    featured: false,
    color: '#34d399',
    year: '2023',
  },
  {
    id: 5,
    title: 'Portfolio Template',
    desc: 'Template portofolio open-source untuk developer dengan animasi smooth, dark mode, dan mudah dikustomisasi.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    category: 'Frontend',
    github: 'https://github.com/rifkyalan2805-creator/curriculumVittae_rifkyAlan.git',
    live: '#',
    featured: false,
    color: '#f472b6',
    year: '2024',
  },
  {
    id: 6,
    title: 'Chat Application',
    desc: 'Real-time chat app dengan Socket.io, room-based conversation, emoji picker, dan file sharing.',
    tags: ['React', 'Socket.io', 'Node.js', 'Express'],
    category: 'Fullstack',
    github: 'https://github.com/rifkyalanmaulana',
    live: '#',
    featured: false,
    color: '#60a5fa',
    year: '2023',
  },
];

const tabs = ['All', 'Frontend', 'Backend', 'Fullstack'];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
});

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects">
      <div className="container">

        <motion.div {...fadeUp(0)} style={{ marginBottom: '48px' }}>
          <p className="section-label">Projects</p>
          <h2 className="section-title">Hal yang sudah<br />saya bangun</h2>
          <p className="section-subtitle">Koleksi project yang menunjukkan kemampuan dan passion saya dalam membangun produk digital.</p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div {...fadeUp(0.1)} style={{ display: 'flex', gap: '8px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              style={{
                padding: '8px 20px', borderRadius: '100px',
                fontFamily: 'var(--font-body)', fontSize: '0.88rem', fontWeight: 400,
                border: active === tab ? '1px solid var(--accent)' : '1px solid var(--border)',
                background: active === tab ? 'var(--accent-glow)' : 'transparent',
                color: active === tab ? 'var(--accent-bright)' : 'var(--text-secondary)',
                transition: 'all 0.2s',
                cursor: 'pointer',
              }}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0',
                  transition: 'border-color 0.2s, transform 0.2s',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${project.color}55`;
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = '';
                }}
              >
                {/* Subtle color accent top bar */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                  background: project.color, opacity: 0.6,
                }} />

                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {project.featured && (
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: '4px',
                        fontSize: '0.72rem', padding: '3px 9px', borderRadius: '100px',
                        background: `${project.color}22`, color: project.color,
                        fontWeight: 500,
                      }}>
                        <FiStar style={{ fontSize: '10px' }} /> Featured
                      </span>
                    )}
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{project.year}</span>
                  </div>
                  <span style={{
                    fontSize: '0.72rem', padding: '3px 10px', borderRadius: '100px',
                    border: '1px solid var(--border)',
                    color: 'var(--text-muted)',
                  }}>{project.category}</span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px', flex: 1 }}>
                  {project.desc}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '22px' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize: '0.75rem', padding: '3px 10px', borderRadius: '6px',
                      background: 'var(--bg-hover)', color: 'var(--text-muted)',
                      border: '1px solid var(--border)',
                    }}>{tag}</span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      fontSize: '0.85rem', color: 'var(--text-secondary)',
                      padding: '7px 14px', borderRadius: '8px',
                      border: '1px solid var(--border)',
                      transition: 'color 0.2s, border-color 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'var(--border-hover)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = ''; e.currentTarget.style.borderColor = ''; }}
                  >
                    <FiGithub /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      fontSize: '0.85rem', color: project.color,
                      padding: '7px 14px', borderRadius: '8px',
                      border: `1px solid ${project.color}44`,
                      background: `${project.color}11`,
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = `${project.color}22`; }}
                    onMouseLeave={e => { e.currentTarget.style.background = `${project.color}11`; }}
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* GitHub CTA */}
        <motion.div {...fadeUp(0.3)} style={{ textAlign: 'center', marginTop: '52px' }}>
          <a
            href="https://github.com/rifkyalanmaulana"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '9px',
              padding: '12px 28px', borderRadius: '12px',
              border: '1px solid var(--border-hover)',
              color: 'var(--text-secondary)', fontSize: '0.92rem',
              transition: 'color 0.2s, border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'var(--accent-dim)'; e.currentTarget.style.background = 'var(--accent-glow)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = ''; e.currentTarget.style.borderColor = ''; e.currentTarget.style.background = ''; }}
          >
            <FiGithub style={{ fontSize: '18px' }} />
            Lihat semua project di GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
