'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, ArrowRight } from 'lucide-react';

export default function FarhanaPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'research', label: 'Research' },
    { id: 'recognition', label: 'Recognition' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", overflow: 'hidden', background: '#ffffff' }}>
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(20px); } }
        @keyframes pulse { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.6; } }
        @keyframes slideInUp { from { opacity: 0; transform: translateY(60px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-60px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(60px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(44, 82, 130, 0.3); } 50% { box-shadow: 0 0 40px rgba(44, 82, 130, 0.5); } }
        @keyframes gradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
      `}</style>

      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(12px)',
        zIndex: 50,
        borderBottom: '1px solid rgba(44, 82, 130, 0.1)',
        boxShadow: scrollY > 50 ? '0 8px 32px rgba(44, 82, 130, 0.1)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
          <div style={{ fontWeight: 800, fontSize: '22px', background: 'linear-gradient(135deg, #2c5282 0%, #1e3a8a 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Farhana Shakeer
          </div>
          
          <div style={{ display: 'none', '@media (min-width: 768px)': { display: 'flex' }, gap: '40px' }}>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  color: '#2c5282',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  borderBottom: '2px solid transparent',
                  paddingBottom: '4px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderBottomColor = '#2c5282';
                  e.target.style.color = '#1e3a8a';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderBottomColor = 'transparent';
                  e.target.style.color = '#2c5282';
                }}
              >
                {section.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: 'flex',
              '@media (min-width: 768px)': { display: 'none' },
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#2c5282'
            }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            padding: '16px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            borderTop: '1px solid rgba(44, 82, 130, 0.1)',
            animation: 'slideInUp 0.3s ease'
          }}>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '15px',
                  color: '#2c5282',
                  fontWeight: 600,
                  textAlign: 'left',
                  padding: '10px 0'
                }}
              >
                {section.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" style={{
        background: 'linear-gradient(135deg, #2c5282 0%, #1e3a8a 50%, #0f3a66 100%)',
        color: 'white',
        padding: '100px 32px',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Animated Background */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          right: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite 1s',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '1000px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            padding: '12px 24px',
            borderRadius: '30px',
            marginBottom: '24px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            animation: 'slideInUp 0.8s ease',
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '1px'
          }}>
            🧠 MENTAL HEALTH PROFESSIONAL
          </div>

          <h1 style={{
            fontSize: 'clamp(40px, 8vw, 72px)',
            fontWeight: 900,
            marginBottom: '16px',
            animation: 'slideInUp 0.8s ease 0.1s both',
            letterSpacing: '-1.5px'
          }}>
            Farhana Shakeer M P
          </h1>

          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 600,
            marginBottom: '24px',
            animation: 'slideInUp 0.8s ease 0.2s both',
            opacity: 0.95,
            fontStyle: 'italic',
            fontWeight: 300
          }}>
            Consultant Psychologist
          </h2>

          <p style={{
            fontSize: '18px',
            lineHeight: 1.8,
            opacity: 0.9,
            maxWidth: '700px',
            margin: '0 auto 40px',
            animation: 'slideInUp 0.8s ease 0.3s both',
            fontWeight: 300
          }}>
            MSc Clinical Psychology | Mental Health Professional | Research-Driven Clinician
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', animation: 'slideInUp 0.8s ease 0.4s both' }}>
            <a
              href="tel:9446954263"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: 'white',
                color: '#2c5282',
                padding: '16px 32px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '15px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
              }}
            >
              <Phone size={18} />
              Call Me
            </a>
            <a
              href="mailto:Farhanashakeermp@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '15px',
                cursor: 'pointer',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}
            >
              <Mail size={18} />
              Email Me
            </a>
          </div>
        </div>

        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'float 3s ease-in-out infinite',
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: '12px',
          cursor: 'pointer'
        }}>
          ↓ Scroll to explore
        </div>
      </section>

      {/* Education Section */}
      <section id="education" style={{
        background: 'linear-gradient(to bottom, #ffffff 0%, #f8f9ff 100%)',
        padding: '100px 32px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '60px', animation: 'slideInUp 0.8s ease' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 900, color: '#1a1a1a', marginBottom: '12px', letterSpacing: '-1px' }}>
            Education
          </h2>
          <div style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #2c5282 0%, #1e3a8a 100%)',
            margin: '0 auto',
            borderRadius: '2px'
          }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
          {[
            { title: 'PG Diploma in Learning Disability', institution: 'Hrudayaram community College', location: 'Talap, Kannur', status: 'Ongoing', icon: '🎓' },
            { title: 'Master of Science (MSc) in Clinical Psychology', institution: 'Yenepoya University', location: 'Mangalore', year: '2024-2026', icon: '📚' },
            { title: "Bachelor's Degree in Psychology", institution: 'Al Irshad Arts and Science College for Women', location: 'Omassery', year: '2021-2024', icon: '🏆' },
            { title: 'Higher Secondary Education', institution: 'Govt. Higher Secondary School Chittariparamba', location: 'Kerala', year: '2019-2021', icon: '✨' },
            { title: 'Secondary School Education (SSLC)', institution: 'Govt. Higher Secondary School Chittariparamba', location: 'Kerala', year: '2018', icon: '⭐' }
          ].map((edu, idx) => (
            <div
              key={idx}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '32px',
                border: '2px solid rgba(44, 82, 130, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                animation: `slideInUp 0.8s ease ${idx * 0.1}s both`,
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#2c5282';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(44, 82, 130, 0.15)';
                e.currentTarget.style.transform = 'translateY(-8px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(44, 82, 130, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '150px',
                height: '150px',
                background: 'linear-gradient(135deg, rgba(44, 82, 130, 0.1) 0%, transparent 100%)',
                borderRadius: '50%',
                pointerEvents: 'none'
              }} />

              <div style={{ fontSize: '32px', marginBottom: '16px' }}>{edu.icon}</div>
              
              <div style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, rgba(44, 82, 130, 0.1) 0%, rgba(30, 58, 138, 0.05) 100%)',
                color: '#2c5282',
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: 700,
                marginBottom: '14px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {edu.status || edu.year || 'Completed'}
              </div>

              <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '10px', lineHeight: 1.4 }}>
                {edu.title}
              </h4>

              <p style={{ fontSize: '14px', color: '#2c5282', fontWeight: 600, marginBottom: '6px' }}>
                {edu.institution}
              </p>

              <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.6 }}>
                {edu.location}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{
        background: 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)',
        padding: '100px 32px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '60px', animation: 'slideInUp 0.8s ease' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 900, color: '#1a1a1a', marginBottom: '12px', letterSpacing: '-1px' }}>
            Clinical Experience
          </h2>
          <div style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #2c5282 0%, #1e3a8a 100%)',
            margin: '0 auto',
            borderRadius: '2px'
          }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {[
            { title: 'Trainee', org: 'Louise Mount Hospital', loc: 'Chennalode, Wayanad', detail: 'Psychiatric care training', color: '#e0e7ff' },
            { title: 'Intern', org: 'Govt. Mental Health Center', loc: 'Trivandrum', detail: 'Mental health assessment', color: '#fef3e2' },
            { title: 'Intern', org: 'Iqraa-Thanal Centre', loc: 'Kozhikkode', detail: 'Psychiatric rehabilitation', color: '#e0f7f4' },
            { title: 'Intern', org: 'Mindset Psychology Centre', loc: 'Kannur', detail: 'Counselling services', color: '#ffe0e6' },
            { title: 'Clinical Posting', org: 'Yenepoya Psychiatry', loc: 'Mangalore', detail: 'Advanced psychiatry', color: '#e8e0ff' }
          ].map((exp, idx) => (
            <div
              key={idx}
              style={{
                background: exp.color,
                borderRadius: '14px',
                padding: '28px',
                border: '2px solid transparent',
                borderLeft: '5px solid #2c5282',
                transition: 'all 0.3s ease',
                animation: `slideInUp 0.8s ease ${idx * 0.1}s both`,
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(12px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(44, 82, 130, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '12px', color: '#2c5282', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '1px' }}>
                {exp.title}
              </div>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>
                {exp.org}
              </h4>
              <p style={{ fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                📍 {exp.loc}
              </p>
              <p style={{ fontSize: '13px', color: '#999', fontStyle: 'italic' }}>
                {exp.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Research Section */}
      <section id="research" style={{
        background: 'linear-gradient(to bottom, #ffffff 0%, #f8f9ff 100%)',
        padding: '100px 32px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '60px', animation: 'slideInUp 0.8s ease' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 900, color: '#1a1a1a', marginBottom: '12px', letterSpacing: '-1px' }}>
            Research Work
          </h2>
          <div style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #2c5282 0%, #1e3a8a 100%)',
            margin: '0 auto',
            borderRadius: '2px'
          }} />
        </div>

        <div style={{ display: 'grid', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
          {[
            { type: "Master's Dissertation", title: 'Work-Family Conflict and Psychological Well-Being among Male University Academics', icon: '📖' },
            { type: "Bachelor's Dissertation", title: 'Psychological well-being and Social support among Parents Of Children With Intellectual Disabilities', icon: '🔍' }
          ].map((research, idx) => (
            <div
              key={idx}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '40px',
                border: '2px solid rgba(44, 82, 130, 0.1)',
                transition: 'all 0.4s ease',
                animation: `slideInUp 0.8s ease ${idx * 0.2}s both`,
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#2c5282';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(44, 82, 130, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(44, 82, 130, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ fontSize: '32px' }}>{research.icon}</div>
                <div style={{ flex: 1 }}>
                  <span style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #2c5282 0%, #1e3a8a 100%)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: 700,
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {research.type}
                  </span>
                  <h4 style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a', marginTop: '8px', lineHeight: 1.5 }}>
                    {research.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Presentations Section */}
      <section id="recognition" style={{
        background: 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)',
        padding: '100px 32px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '60px', animation: 'slideInUp 0.8s ease' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 900, color: '#1a1a1a', marginBottom: '12px', letterSpacing: '-1px' }}>
            Presentations & Recognition
          </h2>
          <div style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #2c5282 0%, #1e3a8a 100%)',
            margin: '0 auto',
            borderRadius: '2px'
          }} />
        </div>

        <div style={{ display: 'grid', gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
          {[
            {
              title: 'Ethical Challenges of Implementing AI in Psychology',
              conf: 'National Conference on AI, Interdisciplinarity and Future of Higher Education',
              org: 'Manasa Trust, Kateel Ashok Pai Memorial College',
              loc: 'Shivamogga',
              date: '10–11 April 2026',
              mode: 'Hybrid',
              icon: '🎤'
            },
            {
              title: 'AI in Shaping Human Decision-Making and Behavioural Outcomes',
              conf: 'Psychological Well-Being in the Era of Digital Immersion',
              org: 'CARE – Claret Centre for Mental Well-being',
              loc: 'Bengaluru',
              date: '26 March 2026',
              mode: 'In-person',
              icon: '🏅'
            }
          ].map((presentation, idx) => (
            <div
              key={idx}
              style={{
                background: 'linear-gradient(135deg, rgba(44, 82, 130, 0.08) 0%, rgba(30, 58, 138, 0.04) 100%)',
                borderRadius: '16px',
                padding: '32px',
                border: '2px solid rgba(44, 82, 130, 0.2)',
                borderLeft: '5px solid #2c5282',
                transition: 'all 0.4s ease',
                animation: `slideInUp 0.8s ease ${idx * 0.15}s both`,
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#2c5282';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(44, 82, 130, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(44, 82, 130, 0.2)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '12px' }}>
                <div style={{ fontSize: '28px' }}>{presentation.icon}</div>
                <span style={{
                  background: 'linear-gradient(135deg, #2c5282 0%, #1e3a8a 100%)',
                  color: 'white',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 700,
                  whiteSpace: 'nowrap'
                }}>
                  {presentation.mode}
                </span>
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '10px', lineHeight: 1.4 }}>
                {presentation.title}
              </h4>
              <p style={{ fontSize: '14px', color: '#2c5282', fontWeight: 600, marginBottom: '6px' }}>
                {presentation.conf}
              </p>
              <p style={{ fontSize: '13px', color: '#666', marginBottom: '6px' }}>
                {presentation.org}
              </p>
              <p style={{ fontSize: '13px', color: '#999' }}>
                📍 {presentation.loc} • {presentation.date}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Languages Section */}
      <section style={{
        background: 'linear-gradient(to bottom, #ffffff 0%, #f8f9ff 100%)',
        padding: '80px 32px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '40px', animation: 'slideInUp 0.8s ease' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#1a1a1a', marginBottom: '12px' }}>
            Languages
          </h2>
          <div style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #2c5282 0%, #1e3a8a 100%)',
            margin: '0 auto',
            borderRadius: '2px'
          }} />
        </div>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { name: 'Malayalam', level: 'Native', icon: '🗣️' },
            { name: 'English', level: 'Fluent', icon: '💬' }
          ].map((lang, idx) => (
            <div
              key={idx}
              style={{
                background: 'white',
                padding: '24px 40px',
                borderRadius: '12px',
                border: '2px solid #2c5282',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                animation: `slideInUp 0.8s ease ${idx * 0.1}s both`,
                cursor: 'pointer',
                minWidth: '180px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(44, 82, 130, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>{lang.icon}</div>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#2c5282', margin: '0 0 4px 0' }}>
                {lang.name}
              </h4>
              <p style={{ fontSize: '12px', color: '#999', margin: 0 }}>
                {lang.level}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
        color: 'white',
        padding: '80px 32px',
        textAlign: 'center'
      }}>
        <h3 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '24px', animation: 'slideInUp 0.8s ease' }}>
          Let's Connect
        </h3>

        <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px', animation: 'slideInUp 0.8s ease 0.1s both' }}>
          <a
            href="mailto:Farhanashakeermp@gmail.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              color: '#ccc',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: 600,
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#ccc';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Mail size={22} />
            Farhanashakeermp@gmail.com
          </a>
          <a
            href="tel:9446954263"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              color: '#ccc',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: 600,
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#ccc';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Phone size={22} />
            +91 9446954263
          </a>
        </div>

        <p style={{
          fontSize: '14px',
          color: '#999',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '24px',
          margin: 0,
          animation: 'slideInUp 0.8s ease 0.2s both'
        }}>
          © 2026 Farhana Shakeer. All rights reserved. | Consultant Psychologist | Research-Driven Mental Health Professional
        </p>
      </footer>
    </div>
  );
}
