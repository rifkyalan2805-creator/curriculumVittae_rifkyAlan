import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi';
import { Link } from 'react-scroll';

const socials = [
  { icon: FiGithub,   href: 'https://github.com/rifkyalanmaulana' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/rifkyalanmaulana' },
  { icon: FiTwitter,  href: 'https://twitter.com/rifkyalanmaulana' },
];

const navLinks = [
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'experience', label: 'Experience' },
  { to: 'contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      background: 'var(--bg-secondary)',
      padding: '48px 0 32px',
    }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px', marginBottom: '32px' }}>

          {/* Logo */}
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: '1.4rem', letterSpacing: '-0.02em',
          }}>
            RAM<span style={{ color: 'var(--accent)' }}>.</span>
          </span>

          {/* Nav */}
          <ul style={{ display: 'flex', gap: '4px', listStyle: 'none', flexWrap: 'wrap' }}>
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to} smooth duration={600} offset={-80}
                  style={{
                    fontSize: '0.85rem', color: 'var(--text-muted)',
                    padding: '5px 12px', borderRadius: '7px',
                    cursor: 'pointer', transition: 'color 0.2s',
                    display: 'block',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={e => e.currentTarget.style.color = ''}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div style={{ display: 'flex', gap: '10px' }}>
            {socials.map(({ icon: Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-muted)', fontSize: '15px',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-bright)'; e.currentTarget.style.borderColor = 'var(--accent-dim)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = ''; e.currentTarget.style.borderColor = ''; }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--border)', paddingTop: '24px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px',
        }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Rifky Alan Maulana. All rights reserved.
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '5px' }}>
            Built with <FiHeart style={{ color: 'var(--accent)', fontSize: '12px' }} /> using React
          </p>
        </div>
      </div>
    </footer>
  );
}
