import React, { useState } from 'react';
import { Menu, X, ExternalLink, Mail, Phone } from 'lucide-react';

export default function FarhanaPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div style={{ backgroundColor: '#fafaf8', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        backgroundColor: 'white',
        borderBottom: '1px solid #e5e5e0',
        zIndex: 50,
        backdropFilter: 'blur(12px)',
        backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
          <div style={{ fontWeight: 700, fontSize: '20px', color: '#1a1a1a', letterSpacing: '-0.5px' }}>
            Farhana Shakeer
          </div>
          
          {/* Desktop Menu */}
          <div style={{ display: 'none', '@media (min-width: 768px)': { display: 'flex' }, gap: '32px' }}>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  color: '#666',
                  fontWeight: 500,
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#2c5282'}
                onMouseLeave={(e) => e.target.style.color = '#666'}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: 'flex',
              '@media (min-width: 768px)': { display: 'none' },
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div style={{
            backgroundColor: 'white',
            borderTop: '1px solid #e5e5e0',
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '16px',
                  color: '#666',
                  fontWeight: 500,
                  textAlign: 'left',
                  padding: '8px 0'
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
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 24px',
        textAlign: 'center'
      }}>
        <div style={{
          backgroundColor: 'linear-gradient(135deg, #2c5282 0%, #1e3a8a 100%)',
          borderRadius: '16px',
          padding: '60px 40px',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '300px',
            height: '300px',
            backgroundColor: 'rgba(255,255,255,0.05)',
            borderRadius: '50%',
            transform: 'translate(50%, -50%)'
          }} />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h1 style={{
              fontSize: 'clamp(32px, 6vw, 56px)',
              fontWeight: 800,
              marginBottom: '16px',
              letterSpacing: '-1px'
            }}>
              Farhana Shakeer M P
            </h1>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 600,
              marginBottom: '24px',
              opacity: 0.95,
              fontStyle: 'italic'
            }}>
              Consultant Psychologist
            </h2>
            <p style={{
              fontSize: '16px',
              lineHeight: 1.6,
              opacity: 0.9,
              maxWidth: '500px',
              margin: '0 auto 32px',
              fontWeight: 400
            }}>
              MSc Clinical Psychology | Mental Health Professional | Researcher
            </p>
            
            {/* Contact Buttons */}
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="tel:9446954263"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'white',
                  color: '#2c5282',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                }}
              >
                <Phone size={16} />
                Call Me
              </a>
              <a
                href="mailto:Farhanashakeermp@gmail.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                  border: '1px solid rgba(255,255,255,0.3)',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Mail size={16} />
                Email Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 24px'
      }}>
        <h3 style={{
          fontSize: '32px',
          fontWeight: 700,
          marginBottom: '12px',
          color: '#1a1a1a',
          letterSpacing: '-0.5px'
        }}>
          Education
        </h3>
        <div style={{
          width: '60px',
          height: '3px',
          backgroundColor: '#2c5282',
          marginBottom: '48px'
        }} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {[
            {
              title: 'PG Diploma in Learning Disability',
              institution: 'Hrudayaram community College',
              location: 'Talap, Kannur',
              university: 'Kannur University',
              status: 'Ongoing'
            },
            {
              title: 'Master of Science (MSc) in Clinical Psychology',
              institution: 'Yenepoya University',
              location: 'Mangalore',
              year: '2024-2026'
            },
            {
              title: "Bachelor's Degree in Psychology",
              institution: 'Al Irshad Arts and Science College for Women',
              location: 'Omassery',
              university: 'University of Calicut',
              year: '2021-2024'
            },
            {
              title: 'Higher Secondary Education',
              institution: 'Govt. Higher Secondary School Chittariparamba',
              location: 'Kerala',
              board: 'Kerala Board of Higher Secondary Examinations',
              year: '2019-2021'
            },
            {
              title: 'Secondary School Education (SSLC)',
              institution: 'Govt. Higher Secondary School Chittariparamba',
              location: 'Kerala',
              board: 'Kerala Board of Public Examinations',
              year: '2018'
            }
          ].map((edu, idx) => (
            <div
              key={idx}
              style={{
                padding: '24px',
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '1px solid #e5e5e0',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#2c5282';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(44, 82, 130, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e5e5e0';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                display: 'inline-block',
                backgroundColor: '#e0e7ff',
                color: '#2c5282',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 600,
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {edu.status || edu.year || 'Completed'}
              </div>
              <h4 style={{
                fontSize: '18px',
                fontWeight: 700,
                marginBottom: '8px',
                color: '#1a1a1a'
              }}>
                {edu.title}
              </h4>
              <p style={{
                fontSize: '14px',
                color: '#666',
                marginBottom: '4px',
                fontWeight: 500
              }}>
                {edu.institution}
              </p>
              <p style={{
                fontSize: '14px',
                color: '#999',
                lineHeight: 1.6
              }}>
                {edu.location}
                {edu.university && ` • ${edu.university}`}
                {edu.board && ` • ${edu.board}`}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 24px',
        backgroundColor: 'white'
      }}>
        <h3 style={{
          fontSize: '32px',
          fontWeight: 700,
          marginBottom: '12px',
          color: '#1a1a1a',
          letterSpacing: '-0.5px'
        }}>
          Internship & Clinical Experience
        </h3>
        <div style={{
          width: '60px',
          height: '3px',
          backgroundColor: '#2c5282',
          marginBottom: '48px'
        }} />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {[
            {
              title: 'Trainee',
              organization: 'Louise Mount Hospital',
              location: 'Chennalode, Wayanad',
              details: 'Clinical training in psychiatric care'
            },
            {
              title: 'Intern',
              organization: 'Govt. Mental Health Center',
              location: 'Trivandrum, Olampara',
              duration: '1 month',
              details: 'Mental health assessment and intervention'
            },
            {
              title: 'Intern',
              organization: 'Iqraa-Thanal Centre For Psychiatric Rehabilitation',
              location: 'Eranhipalam, Kozhikkode',
              duration: '1 month',
              details: 'Psychiatric rehabilitation programs'
            },
            {
              title: 'Intern',
              organization: 'Mindset Psychology Counselling & Special Education Centre',
              location: 'Kuthuparamba, Kannur',
              duration: '1 month',
              details: 'Counselling and special education services'
            },
            {
              title: 'Weekly Posting',
              organization: 'Yenepoya Psychiatry',
              location: 'Yenepoya Medical College, Mangalore',
              duration: '6 months',
              details: 'Advanced psychiatric clinical experience'
            }
          ].map((exp, idx) => (
            <div
              key={idx}
              style={{
                padding: '28px',
                backgroundColor: '#fafaf8',
                borderRadius: '12px',
                border: '1px solid #e5e5e0',
                borderLeft: '4px solid #2c5282',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f5f5f3';
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#fafaf8';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <h4 style={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#2c5282',
                marginBottom: '8px'
              }}>
                {exp.title}
              </h4>
              <p style={{
                fontSize: '16px',
                fontWeight: 600,
                color: '#1a1a1a',
                marginBottom: '4px'
              }}>
                {exp.organization}
              </p>
              <p style={{
                fontSize: '14px',
                color: '#666',
                marginBottom: '12px'
              }}>
                {exp.location}
                {exp.duration && ` • ${exp.duration}`}
              </p>
              <p style={{
                fontSize: '14px',
                color: '#999',
                lineHeight: 1.6,
                fontStyle: 'italic'
              }}>
                {exp.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Research Section */}
      <section id="research" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 24px'
      }}>
        <h3 style={{
          fontSize: '32px',
          fontWeight: 700,
          marginBottom: '12px',
          color: '#1a1a1a',
          letterSpacing: '-0.5px'
        }}>
          Research Experience
        </h3>
        <div style={{
          width: '60px',
          height: '3px',
          backgroundColor: '#2c5282',
          marginBottom: '48px'
        }} />

        <div style={{
          display: 'grid',
          gap: '32px'
        }}>
          {[
            {
              type: "Master's Dissertation",
              title: 'Work-Family Conflict and Psychological Well-Being among Male University Academics'
            },
            {
              type: "Bachelor's Dissertation",
              title: 'Psychological well-being and Social support among Parents Of Children With Intellectual Disabilities'
            }
          ].map((research, idx) => (
            <div
              key={idx}
              style={{
                padding: '32px',
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '1px solid #e5e5e0',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(44, 82, 130, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span style={{
                display: 'inline-block',
                backgroundColor: '#2c5282',
                color: 'white',
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 700,
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {research.type}
              </span>
              <h4 style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#1a1a1a',
                marginTop: '12px',
                lineHeight: 1.4
              }}>
                {research.title}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* Recognition & Presentations */}
      <section id="recognition" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 24px',
        backgroundColor: 'white'
      }}>
        <h3 style={{
          fontSize: '32px',
          fontWeight: 700,
          marginBottom: '12px',
          color: '#1a1a1a',
          letterSpacing: '-0.5px'
        }}>
          Workshops & Conference Presentations
        </h3>
        <div style={{
          width: '60px',
          height: '3px',
          backgroundColor: '#2c5282',
          marginBottom: '48px'
        }} />

        <div style={{
          display: 'grid',
          gap: '24px'
        }}>
          {[
            {
              title: 'Ethical Challenges of Implementing Artificial Intelligence in Psychology: A Narrative Review',
              conference: 'National Conference on "Artificial Intelligence, Interdisciplinarity and Future of Higher Education"',
              organizers: 'Manasa Trust, Manasa Centre for Cultural Studies, Kateel Ashok Pai Memorial College',
              location: 'Shivamogga',
              date: '10–11 April 2026',
              mode: 'Hybrid'
            },
            {
              title: 'The Role of Artificial Intelligence in Shaping Human Decision-Making and Behavioural Outcomes',
              conference: 'National-level Psychology Conference: "Psychological Well-Being in the Era of Digital Immersion"',
              organizers: 'CARE – Claret Centre for Mental Well-being, St. Claret College (Autonomous)',
              location: 'Bengaluru',
              date: '26 March 2026',
              mode: 'In-person'
            }
          ].map((presentation, idx) => (
            <div
              key={idx}
              style={{
                padding: '28px',
                backgroundColor: 'linear-gradient(135deg, #f5f7ff 0%, #f0f4ff 100%)',
                borderRadius: '12px',
                border: '1px solid #e0e7ff',
                borderLeft: '4px solid #2c5282',
                transition: 'all 0.3s ease'
              }}
            >
              <div style {{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '16px',
                marginBottom: '12px'
              }}>
                <h4 style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  lineHeight: 1.4,
                  flex: 1
                }}>
                  {presentation.title}
                </h4>
                <span style={{
                  display: 'inline-block',
                  backgroundColor: '#2c5282',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 600,
                  whiteSpace: 'nowrap'
                }}>
                  {presentation.mode}
                </span>
              </div>
              <p style={{
                fontSize: '15px',
                color: '#2c5282',
                fontWeight: 600,
                marginBottom: '8px'
              }}>
                {presentation.conference}
              </p>
              <p style={{
                fontSize: '14px',
                color: '#666',
                marginBottom: '4px'
              }}>
                {presentation.organizers}
              </p>
              <p style={{
                fontSize: '14px',
                color: '#999',
                lineHeight: 1.6
              }}>
                {presentation.location} • {presentation.date}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Languages Section */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 24px'
      }}>
        <h3 style={{
          fontSize: '32px',
          fontWeight: 700,
          marginBottom: '12px',
          color: '#1a1a1a',
          letterSpacing: '-0.5px'
        }}>
          Languages
        </h3>
        <div style={{
          width: '60px',
          height: '3px',
          backgroundColor: '#2c5282',
          marginBottom: '32px'
        }} />
        <div style={{
          display: 'flex',
          gap: '24px',
          flexWrap: 'wrap'
        }}>
          {['Malayalam', 'English'].map((lang, idx) => (
            <div
              key={idx}
              style={{
                padding: '16px 32px',
                backgroundColor: 'white',
                border: '2px solid #2c5282',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 600,
                color: '#2c5282'
              }}
            >
              {lang}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        padding: '48px 24px',
        marginTop: '80px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '28px',
            fontWeight: 700,
            marginBottom: '16px'
          }}>
            Let's Connect
          </h3>
          <div style={{
            display: 'flex',
            gap: '24px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '32px'
          }}>
            <a
              href="mailto:Farhanashakeermp@gmail.com"
              style={{
                color: '#ccc',
                textDecoration: 'none',
                transition: 'color 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#ccc'}
            >
              <Mail size={20} />
              Farhanashakeermp@gmail.com
            </a>
            <a
              href="tel:9446954263"
              style={{
                color: '#ccc',
                textDecoration: 'none',
                transition: 'color 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#ccc'}
            >
              <Phone size={20} />
              +91 9446954263
            </a>
          </div>
          <p style={{
            fontSize: '14px',
            color: '#999',
            borderTop: '1px solid #333',
            paddingTop: '24px'
          }}>
            © 2026 Farhana Shakeer. All rights reserved. | Consultant Psychologist
          </p>
        </div>
      </footer>
    </div>
  );
}