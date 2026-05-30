import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiBook } from 'react-icons/fi';

const experiences = [
  {
    type: 'work',
    title: 'Frontend Developer',
    place: 'PT. Startup Indonesia',
    period: 'Jan 2024 — Sekarang',
    desc: 'Membangun dan maintain aplikasi React skala enterprise. Mengimplementasikan design system, meningkatkan performa Core Web Vitals hingga 40%, dan memimpin migrasi dari Class Components ke Hooks.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind'],
  },
  {
    type: 'work',
    title: 'Full Stack Developer (Freelance)',
    place: 'Freelance',
    period: 'Jun 2023 — Des 2023',
    desc: 'Mengerjakan berbagai project klien mulai dari landing page, e-commerce, hingga sistem manajemen internal. Berhasil menyelesaikan 8+ project dalam 6 bulan dengan rating kepuasan 5 bintang.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    type: 'edu',
    title: 'S1 Teknik Informatika',
    place: 'Universitas [Nama Universitas]',
    period: '2020 — 2024',
    desc: 'Lulus dengan IPK 3.7/4.0. Aktif sebagai anggota Himpunan Mahasiswa IT dan mengembangkan sistem informasi kampus sebagai proyek skripsi.',
    tags: ['Algoritma', 'Struktur Data', 'Sistem Informasi'],
  },
  {
    type: 'edu',
    title: 'Bootcamp Full Stack Web Development',
    place: 'Hacktiv8 / Dicoding',
    period: '2022',
    desc: 'Program intensif 3 bulan yang mencakup JavaScript modern, React, Node.js, dan deployment. Lulus sebagai Top Graduate angkatan.',
    tags: ['JavaScript', 'React', 'Node.js', 'Git'],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
});

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">

        <motion.div {...fadeUp(0)} style={{ marginBottom: '56px' }}>
          <p className="section-label">Journey</p>
          <h2 className="section-title">Pengalaman &<br />Pendidikan</h2>
          <p className="section-subtitle">Perjalanan saya dari belajar coding hingga membangun produk nyata.</p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: '760px' }}>

          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: '22px',
            top: '10px',
            bottom: '10px',
            width: '1px',
            background: 'linear-gradient(to bottom, var(--accent-dim), transparent)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                style={{
                  display: 'flex',
                  gap: '28px',
                  paddingLeft: '8px',
                }}
              >
                {/* Icon dot */}
                <div style={{
                  flexShrink: 0,
                  width: '28px', height: '28px',
                  borderRadius: '50%',
                  background: exp.type === 'work' ? 'var(--bg-card)' : 'var(--bg-hover)',
                  border: exp.type === 'work' ? '1px solid var(--accent)' : '1px solid var(--teal)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: exp.type === 'work' ? 'var(--accent-bright)' : 'var(--teal)',
                  fontSize: '13px',
                  zIndex: 1,
                  marginTop: '8px',
                }}>
                  {exp.type === 'work' ? <FiBriefcase /> : <FiBook />}
                </div>

                {/* Content */}
                <div style={{
                  flex: 1,
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '22px 24px',
                  transition: 'border-color 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = exp.type === 'work' ? 'var(--accent-dim)' : 'rgba(45,212,191,0.3)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {exp.title}
                      </h3>
                      <p style={{ fontSize: '0.88rem', color: exp.type === 'work' ? 'var(--accent-bright)' : 'var(--teal)', marginTop: '2px' }}>
                        {exp.place}
                      </p>
                    </div>
                    <span style={{
                      fontSize: '0.78rem', padding: '4px 12px', borderRadius: '100px',
                      border: '1px solid var(--border)', color: 'var(--text-muted)',
                      whiteSpace: 'nowrap', fontFamily: 'var(--font-display)',
                    }}>
                      {exp.period}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '14px' }}>
                    {exp.desc}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                    {exp.tags.map(tag => (
                      <span key={tag} style={{
                        fontSize: '0.75rem', padding: '3px 10px', borderRadius: '6px',
                        background: 'var(--bg-hover)', color: 'var(--text-muted)',
                        border: '1px solid var(--border)',
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
