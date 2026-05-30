import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript,
  SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb,
  SiPostgresql, SiPrisma, SiGit, SiDocker,
  SiFigma, SiVercel, SiVite, SiPython,
} from 'react-icons/si';

const categories = [
  {
    label: 'Frontend',
    color: '#7c6fcd',
    skills: [
      { name: 'React',       icon: SiReact,       level: 90 },
      { name: 'Next.js',     icon: SiNextdotjs,   level: 82 },
      { name: 'TypeScript',  icon: SiTypescript,  level: 78 },
      { name: 'JavaScript',  icon: SiJavascript,  level: 92 },
      { name: 'Tailwind',    icon: SiTailwindcss, level: 88 },
    ],
  },
  {
    label: 'Backend',
    color: '#2dd4bf',
    skills: [
      { name: 'Node.js',    icon: SiNodedotjs,  level: 80 },
      { name: 'Express',    icon: SiExpress,    level: 78 },
      { name: 'MongoDB',    icon: SiMongodb,    level: 72 },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 68 },
      { name: 'Prisma',     icon: SiPrisma,     level: 70 },
    ],
  },
  {
    label: 'Tools & Lainnya',
    color: '#f59e0b',
    skills: [
      { name: 'Git',     icon: SiGit,     level: 88 },
      { name: 'Docker',  icon: SiDocker,  level: 60 },
      { name: 'Figma',   icon: SiFigma,   level: 75 },
      { name: 'Vercel',  icon: SiVercel,  level: 85 },
      { name: 'Python',  icon: SiPython,  level: 60 },
    ],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
});

function SkillBar({ level, color, inView }) {
  return (
    <div style={{ width: '100%', height: '4px', background: 'var(--bg-primary)', borderRadius: '2px', overflow: 'hidden' }}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
        style={{ height: '100%', background: color, borderRadius: '2px' }}
      />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">

        <motion.div {...fadeUp(0)} style={{ marginBottom: '56px' }}>
          <p className="section-label">Tech Stack</p>
          <h2 className="section-title">Senjata yang saya gunakan</h2>
          <p className="section-subtitle">Teknologi yang saya kuasai untuk membangun produk dari idea sampai production.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {categories.map(({ label, color, skills }, ci) => (
            <motion.div
              key={label}
              {...fadeUp(ci * 0.1)}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px',
                transition: 'border-color 0.2s',
              }}
              whileHover={{ borderColor: `${color}44` }}
            >
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: color, boxShadow: `0 0 10px ${color}80` }} />
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                  {label}
                </span>
              </div>

              {/* Skills */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {skills.map(({ name, icon: Icon, level }) => (
                  <div key={name}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                        <Icon style={{ fontSize: '16px', color }} />
                        <span style={{ fontSize: '0.9rem', fontWeight: 400, color: 'var(--text-primary)' }}>{name}</span>
                      </div>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-display)' }}>{level}%</span>
                    </div>
                    <SkillBar level={level} color={color} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech pill cloud */}
        <motion.div {...fadeUp(0.3)} style={{ marginTop: '48px', textAlign: 'center' }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '16px', fontFamily: 'var(--font-display)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Also worked with
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {['Redux', 'Zustand', 'React Query', 'GraphQL', 'REST API', 'Jest', 'Cypress', 'AWS', 'Firebase', 'Redis', 'Linux', 'Nginx'].map(t => (
              <span key={t} style={{
                padding: '5px 14px', borderRadius: '100px',
                border: '1px solid var(--border-hover)',
                fontSize: '0.8rem', color: 'var(--text-muted)',
                background: 'var(--bg-hover)',
                transition: 'color 0.2s, border-color 0.2s',
                cursor: 'default',
              }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'var(--accent-dim)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = ''; e.currentTarget.style.borderColor = ''; }}
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #skills .container > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          #skills .container > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
