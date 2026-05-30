import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiCheck, FiGithub, FiLinkedin } from 'react-icons/fi';

const contactInfo = [
  { icon: FiMail,   label: 'Email',    value: 'rifky@email.com',   href: 'mailto:rifky@email.com' },
  { icon: FiMapPin, label: 'Location', value: 'Malang, Jawa Timur', href: null },
  { icon: FiGithub, label: 'GitHub',   value: 'github.com/rifkyalanmaulana', href: 'https://github.com/rifkyalanmaulana' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/rifkyalanmaulana', href: 'https://linkedin.com/in/rifkyalanmaulana' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
});

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // === EMAILJS INTEGRATION ===
    // 1. Install: npm install emailjs-com
    // 2. Daftar di emailjs.com (gratis), buat service + template
    // 3. Uncomment kode di bawah dan isi YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY
    //
    // import emailjs from 'emailjs-com';
    // try {
    //   await emailjs.send(
    //     'YOUR_SERVICE_ID',
    //     'YOUR_TEMPLATE_ID',
    //     { from_name: form.name, from_email: form.email, message: form.message },
    //     'YOUR_PUBLIC_KEY'
    //   );
    //   setStatus('sent');
    //   setForm({ name: '', email: '', message: '' });
    // } catch (err) {
    //   setStatus('error');
    // }

    // Simulasi untuk sekarang
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  const inputStyle = {
    width: '100%',
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: '10px',
    padding: '12px 16px',
    color: 'var(--text-primary)',
    fontSize: '0.92rem',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <section id="contact">
      <div className="container">

        <motion.div {...fadeUp(0)} style={{ marginBottom: '56px' }}>
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let's work together</h2>
          <p className="section-subtitle">
            Punya project menarik atau mau ngobrol tentang peluang kolaborasi? Saya senang mendengarnya.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '48px', alignItems: 'start' }}>

          {/* Left: Contact info */}
          <motion.div {...fadeUp(0.1)}>
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: '32px',
              marginBottom: '20px',
            }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
                Hubungi saya
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '28px' }}>
                Saya biasanya merespons dalam 24 jam. Untuk proyek urgent, lebih baik via email langsung.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <div style={{
                      width: '38px', height: '38px', borderRadius: '9px', flexShrink: 0,
                      background: 'var(--accent-glow)', border: '1px solid var(--accent-dim)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--accent-bright)', fontSize: '15px',
                    }}>
                      <Icon />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginBottom: '2px', fontFamily: 'var(--font-display)', letterSpacing: '0.06em' }}>
                        {label.toUpperCase()}
                      </p>
                      {href ? (
                        <a href={href} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                          onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-bright)'}
                          onMouseLeave={e => e.currentTarget.style.color = ''}
                        >{value}</a>
                      ) : (
                        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '14px 18px', borderRadius: '12px',
              background: 'rgba(45,212,191,0.07)',
              border: '1px solid rgba(45,212,191,0.2)',
            }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--teal)', flexShrink: 0 }} />
              <p style={{ fontSize: '0.85rem', color: 'var(--teal)' }}>
                Tersedia untuk project baru — Mulai Juni 2025
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div {...fadeUp(0.2)}>
            <form onSubmit={handleSubmit} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: '36px',
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px', fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>
                    NAMA *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Nama kamu"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px', fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>
                    EMAIL *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="email@kamu.com"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px', fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>
                  PESAN *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Ceritakan project atau peluang kerjasama kamu..."
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                style={{
                  width: '100%', padding: '13px',
                  borderRadius: '12px',
                  background: status === 'sent' ? 'rgba(45,212,191,0.15)' : 'var(--accent)',
                  color: status === 'sent' ? 'var(--teal)' : '#fff',
                  border: status === 'sent' ? '1px solid rgba(45,212,191,0.3)' : 'none',
                  fontSize: '0.95rem', fontWeight: 500,
                  fontFamily: 'var(--font-body)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  cursor: status !== 'idle' ? 'default' : 'pointer',
                  transition: 'all 0.3s',
                  opacity: status === 'sending' ? 0.7 : 1,
                }}
              >
                {status === 'idle' && <><FiSend /> Kirim Pesan</>}
                {status === 'sending' && 'Mengirim...'}
                {status === 'sent' && <><FiCheck /> Pesan Terkirim!</>}
                {status === 'error' && 'Gagal, coba lagi'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #contact form > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
