import { Link } from 'react-router-dom'
import { ArrowLeft, Settings, Zap, Shield, Trophy, ChevronRight, Download } from 'lucide-react'
import '../fsae.css'

const gallery = [
  { src: '/images/fsae/sw_photo2.jpg', caption: 'CB5 steering wheel – completed assembly' },
  { src: '/images/fsae/sw_photo1.jpg', caption: 'CB5 steering wheel – side profile' },
  { src: '/images/fsae/sw_photo3.jpg', caption: 'CB5 steering wheel – rear detail' },
  { src: '/images/fsae/steering_wheel_closeup.jpg', caption: 'Closeup – hub and paddle integration' },
  { src: '/images/fsae/sw_assembly1.jpg', caption: 'Assembly during integration' },
  { src: '/images/fsae/sw_assembly2.jpg', caption: 'Paddle-shift mechanism detail' },
  { src: '/images/fsae/prev_steering_wheel.jpg', caption: 'Previous generation (CB4) – design reference' },
  { src: '/images/fsae/cb2_render.png', caption: 'CU-Boulder Racing Team vehicle render – CB2' },
]

const specs = [
  { label: 'Vehicle', value: 'CU-Boulder Racing Team CB5 & CB6 (2024–2025)' },
  { label: 'Role', value: 'Chief Chassis Engineer & Steering Sub-Team Lead' },
  { label: 'Design Tool', value: 'SolidWorks 2024' },
  { label: 'Analysis', value: 'SolidWorks FEA (SimulationXpress + full Simulation)' },
  { label: 'Target FOS', value: '> 1.5× across all load cases' },
  { label: 'Material', value: 'Carbon fiber composite face / aluminum hub' },
  { label: 'Review Gates', value: 'SDR → IDR → PDR → CDR → MRR' },
  { label: 'Competition', value: 'FSAE Michigan 2024 & 2025' },
]

const timeline = [
  {
    phase: 'System Design Review (SDR)',
    description: 'Defined functional requirements: ergonomics, paddle-shift integration, column collapsibility per FSAE rules, and attachment interface with the steering rack.',
    icon: Settings,
  },
  {
    phase: 'Internal Design Review (IDR)',
    description: 'Iterated on grip diameter, button layout, and carbon fiber layup schedule. Evaluated three hub designs against weight, stiffness, and machinability constraints.',
    icon: Zap,
  },
  {
    phase: 'Preliminary Design Review (PDR)',
    description: 'Presented initial FEA results for lateral, torsional, and pull-through load cases. Identified critical stress concentrations at spokes and redesigned fillet radii.',
    icon: Shield,
  },
  {
    phase: 'Critical Design Review (CDR)',
    description: 'Final geometry locked with ≥1.5× FOS confirmed on all load cases. BOM, engineering drawings, and GD&T call-outs issued to manufacturing sub-team.',
    icon: Settings,
  },
  {
    phase: 'Manufacturing & Integration',
    description: 'Oversaw carbon fiber lamination, CNC-machined aluminum hub, and paddle-shift integration. Coordinated with electrical team for button harness routing.',
    icon: Trophy,
  },
  {
    phase: 'Competition',
    description: 'CB5 competed at FSAE Michigan 2024 and 2025. Steering system performed without failure across all dynamic events including autocross and endurance.',
    icon: Trophy,
  },
]

export default function FSAEProject() {
  return (
    <div className="fsae-page">
      {/* Top nav bar */}
      <nav className="fsae-nav">
        <Link to="/" className="fsae-back">
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>
        <span className="fsae-nav-title">FSAE Steering Wheel & Column</span>
        <a href="/resume.pdf" download className="btn-secondary btn-sm">
          <Download size={14} />
          Resume
        </a>
      </nav>

      {/* Hero */}
      <div className="fsae-hero">
        <div className="fsae-hero-img-wrap">
          <img
            src="/images/fsae/sw_photo2.jpg"
            alt="CB5 steering wheel completed assembly"
            className="fsae-hero-img"
          />
          <div className="fsae-hero-overlay" />
        </div>
        <div className="fsae-hero-content">
          <span className="section-label">Formula SAE · CU-Boulder Racing Team</span>
          <h1>Steering Wheel &amp; Column Design</h1>
          <p>
            Two-season design ownership for the CB5 and CB6 competition
            vehicles — from requirements through competition.
          </p>
          <div className="fsae-hero-tags">
            {['SolidWorks', 'FEA', 'GD&T', 'Carbon Fiber', 'PDR/CDR', 'FSAE Michigan'].map(t => (
              <span className="project-tag" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="fsae-content">

        {/* Overview */}
        <section className="fsae-section">
          <div className="fsae-section-inner">
            <span className="section-label">Overview</span>
            <h2>Project Summary</h2>
            <div className="divider" />
            <div className="fsae-overview-grid">
              <div className="fsae-overview-text">
                <p>
                  As Steering Sub-Team Lead for CU-Boulder Racing Team's CB5 and CB6
                  competition vehicles, I owned the complete design lifecycle
                  of the steering wheel and column assembly — from initial
                  functional requirements through manufacturing and competition.
                </p>
                <p>
                  The design prioritized driver ergonomics, integration with
                  paddle-shift electronics, column collapsibility per FSAE
                  Technical Regulations, and structural integrity under combined
                  lateral, torsional, and axial loading.
                </p>
                <p>
                  FEA analysis in SolidWorks Simulation confirmed a minimum
                  factor of safety of 1.5× across all load cases. The assembly
                  competed at FSAE Michigan in 2024 and 2025 without structural
                  failure across all dynamic events.
                </p>
              </div>
              <div className="fsae-specs">
                <h3>Project Specs</h3>
                {specs.map(({ label, value }) => (
                  <div className="fsae-spec-row" key={label}>
                    <span className="fsae-spec-label">{label}</span>
                    <span className="fsae-spec-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="fsae-section fsae-section-alt">
          <div className="fsae-section-inner">
            <span className="section-label">Gallery</span>
            <h2>Photos & Renders</h2>
            <div className="divider" />
            <div className="fsae-gallery">
              {gallery.map(({ src, caption }) => (
                <div className="fsae-gallery-item" key={src}>
                  <img src={src} alt={caption} loading="lazy" />
                  <span className="fsae-gallery-caption">{caption}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="fsae-section">
          <div className="fsae-section-inner">
            <span className="section-label">Process</span>
            <h2>Design Lifecycle</h2>
            <div className="divider" />
            <div className="fsae-timeline">
              {timeline.map(({ phase, description, icon: Icon }, i) => (
                <div className="fsae-timeline-item" key={phase}>
                  <div className="fsae-timeline-marker">
                    <div className="fsae-timeline-dot">
                      <Icon size={14} />
                    </div>
                    {i < timeline.length - 1 && <div className="fsae-timeline-line" />}
                  </div>
                  <div className="fsae-timeline-content">
                    <h3>{phase}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Challenges */}
        <section className="fsae-section fsae-section-alt">
          <div className="fsae-section-inner">
            <span className="section-label">Engineering Details</span>
            <h2>Key Challenges</h2>
            <div className="divider" />
            <div className="fsae-challenges">
              <div className="fsae-challenge-card">
                <div className="fsae-challenge-icon">
                  <Shield size={20} strokeWidth={1.5} />
                </div>
                <h3>Structural Integrity Under Combined Loading</h3>
                <p>
                  The steering wheel must resist lateral loads from aggressive
                  cornering, torsional loads from driver input, and axial
                  pull-through loads in emergency scenarios. FEA revealed
                  stress concentrations at the spoke-rim interface that required
                  fillets and material redistribution to meet 1.5× FOS.
                </p>
              </div>
              <div className="fsae-challenge-card">
                <div className="fsae-challenge-icon">
                  <Zap size={20} strokeWidth={1.5} />
                </div>
                <h3>Paddle-Shift Integration</h3>
                <p>
                  Sequential shift paddles required precise geometry to avoid
                  driver contact interference, maintain consistent actuation
                  force, and route wiring harnesses without chafing through
                  the column. Three paddle bracket iterations were evaluated
                  before final geometry was locked at CDR.
                </p>
              </div>
              <div className="fsae-challenge-card">
                <div className="fsae-challenge-icon">
                  <Settings size={20} strokeWidth={1.5} />
                </div>
                <h3>FSAE Regulatory Compliance</h3>
                <p>
                  FSAE rules mandate column collapsibility to protect the
                  driver in an impact. The column design incorporates a
                  slip-joint with controlled collapse force, validated against
                  the rules' prescribed load scenarios and verified at the
                  Technical Inspection at Michigan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="fsae-section fsae-cta-section">
          <div className="fsae-section-inner fsae-cta">
            <h2>Want to learn more?</h2>
            <p>
              I'm happy to discuss this project in more detail, share design
              files, or talk through my engineering process.
            </p>
            <div className="fsae-cta-actions">
              <a href="mailto:Carsonrmalpass@gmail.com" className="btn-primary">
                Get In Touch
                <ChevronRight size={16} />
              </a>
              <Link to="/" className="btn-secondary">
                <ArrowLeft size={16} />
                Back to Portfolio
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
