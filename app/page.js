'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, Sparkles, ArrowDown } from 'lucide-react';

export default function FarhanaPortfolioPremium() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
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
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", overflow: 'hidden', background: '#0a0e27' }}>
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(30px) rotate(5deg); } }
        @keyframes pulse { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.2); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(79, 172, 254, 0.4), inset 0 0 20px rgba(79, 172, 254, 0.1); } 50% { box-shadow: 0 0 40px rgba(79, 172, 254, 0.8), inset 0 0 30px rgba(79, 172, 254, 0.2); } }
        @keyframes slideInUp { from { opacity: 0; transform: translateY(80px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-80px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(80px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes shimmer { 0%, 100% { background-position: -1000px 0; } 100% { background-position: 1000px 0; } }
        @keyframes rotate360 { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        .gradient-text { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 50%, #43e97b 100%); background-size: 200% 200%; background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: shimmer 3s linear infinite; }
        .glow-box { box-shadow: 0 0 30px rgba(79, 172, 254, 0.5), inset 0 0 30px rgba(79, 172, 254, 0.1); border: 1px solid rgba(79, 172, 254, 0.3); }
        .card-hover { transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
      `}</style>

      {/* Premium Background with Animated Gradients */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 25%, #0f1428 50%, #1a1f3a 75%, #0a0e27 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradient 15s ease infinite',
        pointerEvents: 'none',
        zIndex: -1
      }} />

      {/* Floating Orbs */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`orb-${i}`}
          style={{
            position: 'fixed',
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            background: `radial-gradient(circle, rgba(79, 172, 254, ${0.15 - i * 0.02}) 0%, transparent 70%)`,
            borderRadius: '50%',
            top: `${Math.sin(i) * 200 + scrollY * 0.1}px`,
            left: `${Math.cos(i) * 300 + (i * 15)}%`,
            filter: 'blur(40px)',
            animation: `float ${8 + i * 2}s ease-in-out infinite`,
            pointerEvents: 'none',
            zIndex: 0
          }}
        />
      ))}

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`particle-${i}`}
          style={{
            position: 'fixed',
            width: '4px',
            height: '4px',
            background: 'radial-gradient(circle, #4facfe 0%, #00f2fe 100%)',
            borderRadius: '50%',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.8,
            animation: `pulse ${3 + Math.random() * 4}s ease-in-out infinite`,
            boxShadow: '0 0 15px rgba(79, 172, 254, 0.8)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />
      ))}

      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(10, 14, 39, 0.8)',
        backdropFilter: 'blur(20px)',
        zIndex: 50,
        borderBottom: '1px solid rgba(79, 172, 254, 0.2)',
        boxShadow: scrollY > 50 ? '0 8px 32px rgba(79, 172, 254, 0.1)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
          <div className="gradient-text" style={{ fontSize: '24px', fontWeight: 900 }}>
            ✨ Farhana Shakeer
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
                  color: '#4facfe',
                  fontWeight: 700,
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  paddingBottom: '4px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#00f2fe';
                  e.target.style.textShadow = '0 0 10px rgba(79, 172, 254, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#4facfe';
                  e.target.style.textShadow = 'none';
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
              color: '#4facfe'
            }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div style={{
            background: 'rgba(10, 14, 39, 0.95)',
            padding: '16px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            borderTop: '1px solid rgba(79, 172, 254, 0.2)',
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
                  color: '#4facfe',
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

      {/* Premium Hero Section */}
      <section id="about" style={{
        background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 254, 0.05) 50%, rgba(67, 233, 123, 0.05) 100%)',
        color: 'white',
        padding: '150px 32px',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid rgba(79, 172, 254, 0.1)'
      }}>
        {/* Animated Grid Background */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(79, 172, 254, .1) 25%, rgba(79, 172, 254, .1) 26%, transparent 27%, transparent 74%, rgba(79, 172, 254, .1) 75%, rgba(79, 172, 254, .1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(79, 172, 254, .1) 25%, rgba(79, 172, 254, .1) 26%, transparent 27%, transparent 74%, rgba(79, 172, 254, .1) 75%, rgba(79, 172, 254, .1) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.3
        }} />

        <div style={{ maxWidth: '1000px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.2) 0%, rgba(0, 242, 254, 0.2) 100%)',
            backdropFilter: 'blur(15px)',
            padding: '14px 28px',
            borderRadius: '50px',
            marginBottom: '32px',
            border: '1px solid rgba(79, 172, 254, 0.4)',
            animation: 'slideInUp 0.8s ease',
            fontSize: '14px',
            fontWeight: 700,
            letterSpacing: '2px',
            color: '#4facfe',
            boxShadow: '0 0 20px rgba(79, 172, 254, 0.3)'
          }}>
            🧠 MENTAL HEALTH INNOVATOR ✨
          </div>

          <h1 className="gradient-text" style={{
            fontSize: 'clamp(48px, 10vw, 88px)',
            fontWeight: 900,
            marginBottom: '20px',
            animation: 'slideInUp 0.8s ease 0.1s both',
            letterSpacing: '-2px',
            lineHeight: 1.1
          }}>
            Farhana Shakeer M P
          </h1>

          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 300,
            marginBottom: '24px',
            animation: 'slideInUp 0.8s ease 0.2s both',
            opacity: 0.95,
            fontStyle: 'italic',
            background: 'linear-gradient(135deg, #00f2fe 0%, #43e97b 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Consultant Psychologist
          </h2>

          <p style={{
            fontSize: '18px',
            lineHeight: 1.8,
            opacity: 0.85,
            maxWidth: '700px',
            margin: '0 auto 50px',
            animation: 'slideInUp 0.8s ease 0.3s both',
            fontWeight: 300,
            color: '#b0c4ff'
          }}>
            MSc Clinical Psychology • Research-Driven • Mental Health Innovator • Psychological Wellbeing Expert
          </p>

          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', animation: 'slideInUp 0.8s ease 0.4s both', marginBottom: '60px' }}>
            <a
              href="tel:9446954263"
              className="card-hover glow-box"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                color: '#0a0e27',
                padding: '16px 36px',
                borderRadius: '15px',
                textDecoration: 'none',
                fontWeight: 800,
                fontSize: '16px',
                cursor: 'pointer',
                boxShadow: '0 0 30px rgba(79, 172, 254, 0.6)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(79, 172, 254, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(79, 172, 254, 0.6)';
              }}
            >
              <Phone size={20} />
              Call Me
            </a>
            <a
              href="mailto:Farhanashakeermp@gmail.com"
              className="card-hover glow-box"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(79, 172, 254, 0.15)',
                backdropFilter: 'blur(15px)',
                color: '#4facfe',
                padding: '16px 36px',
                borderRadius: '15px',
                textDecoration: 'none',
                fontWeight: 800,
                fontSize: '16px',
                cursor: 'pointer',
                border: '2px solid rgba(79, 172, 254, 0.4)',
                boxShadow: '0 0 20px rgba(79, 172, 254, 0.3)',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(79, 172, 254, 0.25)';
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(79, 172, 254, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(79, 172, 254, 0.15)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(79, 172, 254, 0.3)';
              }}
            >
              <Mail size={20} />
              Email Me
            </a>
          </div>

          <div style={{
            animation: 'bounce 2s ease-in-out infinite',
            color: '#4facfe',
            fontSize: '24px',
            opacity: 0.6
          }}>
            ↓
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" style={{
        background: 'linear-gradient(180deg, rgba(10, 14, 39, 0) 0%, rgba(79, 172, 254, 0.05) 100%)',
        padding: '120px 32px',
        maxWidth: '1400px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(79, 172, 254, 0.1)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '80px', animation: 'slideInUp 0.8s ease' }}>
          <h2 className="gradient-text" style={{ fontSize: '56px', fontWeight: 900, marginBottom: '16px', letterSpacing: '-1.5px' }}>
            🎓 Education
          </h2>
          <div style={{
            width: '100px',
            height: '4px',
            background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 50%, #43e97b 100%)',
            margin: '0 auto',
            borderRadius: '2px',
            boxShadow: '0 0 20px rgba(79, 172, 254, 0.6)'
          }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
          {[
            { title: 'PG Diploma in Learning Disability', inst: 'Hrudayaram Community College', loc: 'Talap, Kannur', status: 'Ongoing', icon: '📚', color: 'rgba(79, 172, 254, 0.1)' },
            { title: 'MSc in Clinical Psychology', inst: 'Yenepoya University', loc: 'Mangalore', year: '2024-2026', icon: '🎯', color: 'rgba(0, 242, 254, 0.1)' },
            { title: "Bachelor's in Psychology", inst: 'Al Irshad Arts & Science College', loc: 'Omassery', year: '2021-2024', icon: '🏆', color: 'rgba(67, 233, 123, 0.1)' },
            { title: 'Higher Secondary', inst: 'Govt. HS School', loc: 'Kerala', year: '2019-2021', icon: '⭐', color: 'rgba(255, 157, 77, 0.1)' },
            { title: 'Secondary Education (SSLC)', inst: 'Govt. HS School', loc: 'Kerala', year: '2018', icon: '✨', color: 'rgba(255, 100, 131, 0.1)' }
          ].map((edu, idx) => (
            <div
              key={idx}
              className="card-hover glow-box"
              style={{
                background: edu.color,
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '40px',
                border: '1px solid rgba(79, 172, 254, 0.2)',
                cursor: 'pointer',
                animation: `slideInUp 0.8s ease ${idx * 0.1}s both`,
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#4facfe';
                e.currentTarget.style.boxShadow = '0 0 40px rgba(79, 172, 254, 0.5), inset 0 0 40px rgba(79, 172, 254, 0.1)';
                e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(79, 172, 254, 0.2)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(79, 172, 254, 0.5), inset 0 0 30px rgba(79, 172, 254, 0.1)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>{edu.icon}</div>
              
              <div style={{
                display: 'inline-block',
                background: 'rgba(79, 172, 254, 0.2)',
                color: '#4facfe',
                padding: '8px 16px',
                borderRadius: '10px',
                fontSize: '12px',
                fontWeight: 800,
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                boxShadow: '0 0 15px rgba(79, 172, 254, 0.3)'
              }}>
                {edu.status || edu.year || 'Completed'}
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#fff', marginBottom: '12px', lineHeight: 1.4 }}>
                {edu.title}
              </h3>

              <p style={{ fontSize: '14px', color: '#4facfe', fontWeight: 600, marginBottom: '6px' }}>
                {edu.inst}
              </p>

              <p style={{ fontSize: '13px', color: '#b0c4ff', lineHeight: 1.6 }}>
                📍 {edu.loc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{
        background: 'linear-gradient(180deg, rgba(79, 172, 254, 0.05) 0%, rgba(10, 14, 39, 0) 100%)',
        padding: '120px 32px',
        maxWidth: '1400px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(79, 172, 254, 0.1)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '80px', animation: 'slideInUp 0.8s ease' }}>
          <h2 className="gradient-text" style={{ fontSize: '56px', fontWeight: 900, marginBottom: '16px', letterSpacing: '-1.5px' }}>
            💼 Clinical Experience
          </h2>
          <div style={{
            width: '100px',
            height: '4px',
            background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 50%, #43e97b 100%)',
            margin: '0 auto',
            borderRadius: '2px',
            boxShadow: '0 0 20px rgba(79, 172, 254, 0.6)'
          }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
          {[
            { title: 'Trainee', org: 'Louise Mount Hospital', loc: 'Wayanad', detail: 'Psychiatric Care', emoji: '🏥' },
            { title: 'Intern', org: 'Govt. Mental Health Center', loc: 'Trivandrum', detail: 'Mental Health Assessment', emoji: '🔬' },
            { title: 'Intern', org: 'Iqraa-Thanal Centre', loc: 'Kozhikkode', detail: 'Psychiatric Rehabilitation', emoji: '🧩' },
            { title: 'Intern', org: 'Mindset Psychology Centre', loc: 'Kannur', detail: 'Counselling Services', emoji: '💬' },
            { title: 'Clinical Posting', org: 'Yenepoya Psychiatry', loc: 'Mangalore', detail: 'Advanced Psychiatry', emoji: '📊' }
          ].map((exp, idx) => (
            <div
              key={idx}
              className="card-hover"
              style={{
                background: 'rgba(79, 172, 254, 0.08)',
                backdropFilter: 'blur(10px)',
                borderRadius: '18px',
                padding: '32px',
                border: '2px solid rgba(79, 172, 254, 0.25)',
                borderLeft: '5px solid #00f2fe',
                animation: `slideInUp 0.8s ease ${idx * 0.1}s both`,
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(16px) translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(79, 172, 254, 0.3)';
                e.currentTarget.style.borderColor = '#4facfe';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0) translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(79, 172, 254, 0.25)';
              }}
            >
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>{exp.emoji}</div>
              <div style={{ fontSize: '12px', color: '#00f2fe', fontWeight: 800, textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '1.5px' }}>
                {exp.title}
              </div>
              <h4 style={{ fontSize: '17px', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
                {exp.org}
              </h4>
              <p style={{ fontSize: '13px', color: '#4facfe', marginBottom: '10px', fontWeight: 600 }}>
                📍 {exp.loc}
              </p>
              <p style={{ fontSize: '13px', color: '#b0c4ff', fontStyle: 'italic' }}>
                {exp.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Research Section */}
      <section id="research" style={{
        background: 'linear-gradient(180deg, rgba(10, 14, 39, 0) 0%, rgba(79, 172, 254, 0.05) 100%)',
        padding: '120px 32px',
        maxWidth: '1400px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(79, 172, 254, 0.1)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '80px', animation: 'slideInUp 0.8s ease' }}>
          <h2 className="gradient-text" style={{ fontSize: '56px', fontWeight: 900, marginBottom: '16px', letterSpacing: '-1.5px' }}>
            📖 Research Work
          </h2>
          <div style={{
            width: '100px',
            height: '4px',
            background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 50%, #43e97b 100%)',
            margin: '0 auto',
            borderRadius: '2px',
            boxShadow: '0 0 20px rgba(79, 172, 254, 0.6)'
          }} />
        </div>

        <div style={{ display: 'grid', gap: '32px', maxWidth: '950px', margin: '0 auto' }}>
          {[
            { type: "Master's Dissertation", title: 'Work-Family Conflict and Psychological Well-Being among Male University Academics', icon: '📚' },
            { type: "Bachelor's Dissertation", title: 'Psychological well-being and Social support among Parents Of Children With Intellectual Disabilities', icon: '🔍' }
          ].map((research, idx) => (
            <div
              key={idx}
              className="card-hover glow-box"
              style={{
                background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.15) 0%, rgba(0, 242, 254, 0.1) 100%)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '48px',
                border: '1px solid rgba(79, 172, 254, 0.3)',
                animation: `slideInUp 0.8s ease ${idx * 0.2}s both`,
                cursor: 'pointer',
                transition: 'all 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#4facfe';
                e.currentTarget.style.boxShadow = '0 0 50px rgba(79, 172, 254, 0.5), inset 0 0 50px rgba(79, 172, 254, 0.1)';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(79, 172, 254, 0.3)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(79, 172, 254, 0.5), inset 0 0 30px rgba(79, 172, 254, 0.1)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '48px', flex: 'none' }}>{research.icon}</div>
                <div style={{ flex: 1 }}>
                  <span style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    color: '#0a0e27',
                    padding: '8px 16px',
                    borderRadius: '10px',
                    fontSize: '11px',
                    fontWeight: 900,
                    marginBottom: '14px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    boxShadow: '0 0 20px rgba(79, 172, 254, 0.4)'
                  }}>
                    {research.type}
                  </span>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#fff', marginTop: '10px', lineHeight: 1.5 }}>
                    {research.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Presentations Section */}
      <section id="recognition" style={{
        background: 'linear-gradient(180deg, rgba(79, 172, 254, 0.05) 0%, rgba(10, 14, 39, 0) 100%)',
        padding: '120px 32px',
        maxWidth: '1400px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(79, 172, 254, 0.1)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '80px', animation: 'slideInUp 0.8s ease' }}>
          <h2 className="gradient-text" style={{ fontSize: '56px', fontWeight: 900, marginBottom: '16px', letterSpacing: '-1.5px' }}>
            🎤 Presentations & Recognition
          </h2>
          <div style={{
            width: '100px',
            height: '4px',
            background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 50%, #43e97b 100%)',
            margin: '0 auto',
            borderRadius: '2px',
            boxShadow: '0 0 20px rgba(79, 172, 254, 0.6)'
          }} />
        </div>

        <div style={{ display: 'grid', gap: '28px', maxWidth: '1050px', margin: '0 auto' }}>
          {[
            { title: 'Ethical Challenges of Implementing AI in Psychology', conf: 'AI, Interdisciplinarity & Future of Higher Education', org: 'Manasa Trust', loc: 'Shivamogga', date: '10-11 April 2026', mode: '🌐 Hybrid', icon: '🎯' },
            { title: 'AI in Shaping Human Decision-Making and Behavioural Outcomes', conf: 'Psychological Well-Being in Digital Era', org: 'CARE – Claret Centre', loc: 'Bengaluru', date: '26 March 2026', mode: '🎤 In-person', icon: '🏅' }
          ].map((presentation, idx) => (
            <div
              key={idx}
              className="card-hover glow-box"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.15) 0%, rgba(67, 233, 123, 0.1) 100%)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '40px',
                border: '1px solid rgba(0, 242, 254, 0.3)',
                borderLeft: '5px solid #43e97b',
                animation: `slideInUp 0.8s ease ${idx * 0.15}s both`,
                cursor: 'pointer',
                transition: 'all 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#00f2fe';
                e.currentTarget.style.boxShadow = '0 0 50px rgba(0, 242, 254, 0.5), inset 0 0 50px rgba(0, 242, 254, 0.1)';
                e.currentTarget.style.transform = 'translateY(-10px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.3)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 242, 254, 0.5), inset 0 0 30px rgba(0, 242, 254, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                <div style={{ fontSize: '36px' }}>{presentation.icon}</div>
                <span style={{
                  background: 'linear-gradient(135deg, #00f2fe 0%, #43e97b 100%)',
                  color: '#0a0e27',
                  padding: '6px 14px',
                  borderRadius: '12px',
                  fontSize: '11px',
                  fontWeight: 800,
                  whiteSpace: 'nowrap',
                  boxShadow: '0 0 15px rgba(0, 242, 254, 0.4)'
                }}>
                  {presentation.mode}
                </span>
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#fff', marginBottom: '12px', lineHeight: 1.4 }}>
                {presentation.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#00f2fe', fontWeight: 700, marginBottom: '6px' }}>
                {presentation.conf}
              </p>
              <p style={{ fontSize: '13px', color: '#4facfe', marginBottom: '6px' }}>
                {presentation.org}
              </p>
              <p style={{ fontSize: '12px', color: '#b0c4ff' }}>
                📍 {presentation.loc} • {presentation.date}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Languages Section */}
      <section style={{
        background: 'linear-gradient(180deg, rgba(10, 14, 39, 0) 0%, rgba(79, 172, 254, 0.05) 100%)',
        padding: '100px 32px',
        maxWidth: '1400px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(79, 172, 254, 0.1)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '60px', animation: 'slideInUp 0.8s ease' }}>
          <h2 className="gradient-text" style={{ fontSize: '48px', fontWeight: 900, marginBottom: '16px' }}>
            🌍 Languages
          </h2>
          <div style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 50%, #43e97b 100%)',
            margin: '0 auto',
            borderRadius: '2px',
            boxShadow: '0 0 20px rgba(79, 172, 254, 0.6)'
          }} />
        </div>

        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { name: 'Malayalam', level: 'Native', emoji: '🗣️' },
            { name: 'English', level: 'Fluent', emoji: '💬' }
          ].map((lang, idx) => (
            <div
              key={idx}
              className="card-hover glow-box"
              style={{
                background: 'rgba(79, 172, 254, 0.12)',
                backdropFilter: 'blur(10px)',
                padding: '28px 48px',
                borderRadius: '16px',
                textAlign: 'center',
                border: '1px solid rgba(79, 172, 254, 0.3)',
                animation: `slideInUp 0.8s ease ${idx * 0.1}s both`,
                cursor: 'pointer',
                minWidth: '200px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 0 40px rgba(79, 172, 254, 0.5), inset 0 0 40px rgba(79, 172, 254, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(79, 172, 254, 0.5), inset 0 0 30px rgba(79, 172, 254, 0.1)';
              }}
            >
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>{lang.emoji}</div>
              <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#4facfe', margin: '0 0 6px 0' }}>
                {lang.name}
              </h4>
              <p style={{ fontSize: '13px', color: '#b0c4ff', margin: 0 }}>
                {lang.level}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Footer */}
      <footer style={{
        background: 'linear-gradient(135deg, rgba(10, 14, 39, 0.95) 0%, rgba(79, 172, 254, 0.1) 100%)',
        color: 'white',
        padding: '100px 32px',
        textAlign: 'center',
        borderTop: '1px solid rgba(79, 172, 254, 0.2)',
        backdropFilter: 'blur(10px)'
      }}>
        <h3 className="gradient-text" style={{ fontSize: '48px', fontWeight: 900, marginBottom: '32px', animation: 'slideInUp 0.8s ease' }}>
          Let's Connect & Collaborate ✨
        </h3>

        <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '50px', animation: 'slideInUp 0.8s ease 0.1s both' }}>
          <a
            href="mailto:Farhanashakeermp@gmail.com"
            className="card-hover"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '14px',
              color: '#4facfe',
              textDecoration: 'none',
              fontSize: '17px',
              fontWeight: 700,
              cursor: 'pointer',
              padding: '14px 28px',
              borderRadius: '12px',
              border: '1px solid rgba(79, 172, 254, 0.4)',
              transition: 'all 0.3s ease',
              background: 'rgba(79, 172, 254, 0.1)',
              boxShadow: '0 0 20px rgba(79, 172, 254, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.background = 'rgba(79, 172, 254, 0.2)';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(79, 172, 254, 0.6)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#4facfe';
              e.currentTarget.style.background = 'rgba(79, 172, 254, 0.1)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(79, 172, 254, 0.3)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <Mail size={22} />
            Farhanashakeermp@gmail.com
          </a>
          <a
            href="tel:9446954263"
            className="card-hover"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '14px',
              color: '#4facfe',
              textDecoration: 'none',
              fontSize: '17px',
              fontWeight: 700,
              cursor: 'pointer',
              padding: '14px 28px',
              borderRadius: '12px',
              border: '1px solid rgba(79, 172, 254, 0.4)',
              transition: 'all 0.3s ease',
              background: 'rgba(79, 172, 254, 0.1)',
              boxShadow: '0 0 20px rgba(79, 172, 254, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.background = 'rgba(79, 172, 254, 0.2)';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(79, 172, 254, 0.6)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#4facfe';
              e.currentTarget.style.background = 'rgba(79, 172, 254, 0.1)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(79, 172, 254, 0.3)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <Phone size={22} />
            +91 9446954263
          </a>
        </div>

        <p style={{
          fontSize: '14px',
          color: '#b0c4ff',
          borderTop: '1px solid rgba(79, 172, 254, 0.2)',
          paddingTop: '32px',
          margin: 0,
          animation: 'slideInUp 0.8s ease 0.2s both'
        }}>
          © 2026 Farhana Shakeer • Consultant Psychologist • Mental Health Innovator
          <br />
          <span style={{ fontSize: '12px', color: '#4facfe', marginTop: '12px', display: 'block' }}>
            ✨ Transforming lives through psychological expertise and compassionate care ✨
          </span>
        </p>
      </footer>
    </div>
  );
}
