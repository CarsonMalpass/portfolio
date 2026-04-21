import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Settings, FlaskConical, Factory, Code2, Wrench, BarChart3,
  Mail, ArrowLeft, ArrowRight, ChevronRight, ChevronDown,
  MapPin, GraduationCap, Briefcase,
  ChevronLeft, Sun, Moon, Download, ExternalLink, Camera, Award,
} from 'lucide-react'
import heroImg from '../assets/hero.png'
import headshotImg from '../assets/headshot.jpeg'

const experiences = [
  {
    year: '2026–Present',
    role: 'Product Development Engineer FCG',
    company: 'Ford Motor Company',
    type: 'full-time',
    color: 'cyan',
    logo: '/images/logos/ford.png',
    bullets: [
      'Part of Global Total Cost (GTC) Engineering within Ford Product Development — a group that drives competitive benchmarking, detailed cost optimization, supplier engagement, and tooling design to ensure Ford vehicles are built efficiently and money is spent where customers value it most.',
      'GTC aligns engineering, purchasing, and supplier teams on vehicle content, component designs, supplier selection, and cost targets across all forward-model programs.',
      'Rotation 1 — Stamping & Injection Mold Vendor Tooling: Supporting vendor tooling launches through plant line walks, supplier visits, and hands-on troubleshooting of design intent, dimensional issues, and tool buyoff.',
    ],
    tags: ['Cost Engineering', 'Competitive Benchmarking', 'Vendor Tooling', 'Supplier Engagement', 'Stamping', 'Injection Molding'],
  },
  {
    year: '2022–2026',
    role: 'President · Project Manager · Chief Chassis Engineer',
    company: 'CU-Boulder Racing Team',
    type: '501c3',
    color: 'cyan',
    logo: '/images/logos/curacing.png',
    bullets: [
      'President (May 2025–May 2026) — Overseeing a $150,000+ budget and 300-member team spanning Endurance Road Racing, Formula SAE IC, and Formula SAE EV; supporting the team\'s first-ever EV platform launch and acquisition of a new facility.',
      'Project Manager (May 2024–May 2025) — Managed a 150-member team across business, chassis, powertrain, electronics, and aero sub-teams; oversaw $50K annual budget, led recruitment and industry relations, and grew team social presence to 128,000 monthly views. Represented the team at the 2025 FSAE IC competition, finishing 31st.',
      'Chief Chassis Engineer (Aug 2022–May 2024) — Led a 50-member chassis team through design, integration, and assembly for two competition vehicles. Designed and fabricated steering wheel and column, control arms, seat, floor, and firewall. Applied SolidWorks for CAD, FEA, renderings, and PDM management; delivered formal component design reviews. Placed 20th and 63rd at the 2023 and 2024 FSAE IC competitions.',
    ],
    tags: ['Leadership', 'Project Management', 'SolidWorks', 'FEA', 'Fabrication', 'Recruiting'],
    links: [
      { label: 'President Interview', href: 'https://www.colorado.edu/mechanical/racing-toward-innovation-fastest-student-organization', icon: 'external' },
      { label: 'Team Website', href: 'https://www.buffsracing.com', icon: 'external' },
    ],
    images: [
      { src: '/images/racing/comp2023_cb4.jpg', caption: '2023 FSAE Michigan – CB4 (#21) · 20th place finish' },
      { src: '/images/racing/comp2024_cb5.jpg', caption: '2024 FSAE Michigan – CB5 (#94) · 63rd place finish' },
      { src: '/images/racing/comp2025_cb6.jpg', caption: '2025 FSAE Michigan – CB6 (#103) · 31st place finish' },
    ],
  },
  {
    year: '2024–25',
    role: 'Student Apprentice',
    company: 'University of Colorado',
    type: 'leadership',
    color: 'muted',
    logo: '/images/logos/cu_fav.png',
    bullets: [
      'Provided leadership for a 250-person MCEN 2000 course, facilitating breakout groups, resume reviews, and critiquing student work',
      'Supported industry events and contributed to new career initiatives and curriculum development',
    ],
    tags: ['Teaching', 'Mentorship', 'Curriculum Development'],
  },
  {
    year: '2024',
    role: 'Mechanical Engineering Intern',
    company: 'Manifest Technologies',
    type: 'internship',
    color: 'indigo',
    logo: '/images/logos/manifest-mark.svg',
    bullets: [
      'Co-designed the Athena HD VAM printer — led development of the 80/20 frame structure, LED latent-curing system, wiring, and full assembly integration.',
      'Developed and tested proprietary High-Definition Volumetric Additive Manufacturing (HD VAM) technology; operated printers to analyze and optimize image sets, part characteristics, and dimensional accuracy.',
      'Designed optical imaging systems and fixturing for laser beam measurement; built and aligned z-fold laser assemblies involving DMDs, irises, tip/tilt mirrors, and magnification lenses.',
      'Established post-processing procedures covering handling, acid-cleaning, light-curing, and documentation; analyzed resin mixtures and formulas for optimal part generation.',
      'Authored SOPs for HD VAM printing, testing, and system operation.',
    ],
    tags: ['HD VAM', 'Additive Mfg', 'Optics', 'Optical Alignment', 'SolidWorks', 'SOPs'],
  },
  {
    year: '2023',
    role: 'Special Projects Technician',
    company: 'Malin Space Science Systems',
    type: 'internship',
    color: 'indigo',
    logo: '/images/logos/malin.png',
    bullets: [
      'Supported Mars Stationary Orbiter (MSO) camera development — designed and constructed a high-vacuum chamber to simulate near-space environments for flight hardware testing.',
      'Built full SolidWorks assembly reviewed through formal Technical Design Reviews (TDRs); assembled vacuum plumbing including nitrogen gas routing, heat sinks, and copper plates; coordinated with CNC machinists for flight-grade tolerances.',
      'Performed microscopic reflow soldering and dimensional tolerance inspections on flight-certified PCB hardware.',
      'Gained hands-on experience in ESD protection, cleanroom practices, and specialized handling of space-qualified hardware.',
      'Repaired and operated resin and FDM 3D printers to produce ESD-safe components for spaceflight vacuum testing.',
    ],
    tags: ['Vacuum Systems', 'SolidWorks', 'Aerospace', 'PCB Soldering', 'ESD/Cleanroom', '3D Printing'],
  },
  {
    year: '2021',
    role: 'Mechanical Engineering Intern',
    company: 'M3Robotics Lab · CSM',
    type: 'internship',
    color: 'indigo',
    logo: '/images/logos/mines.png',
    bullets: [
      'Designed mounting and protection system for an automated drill that detects rock density changes and auto-stops',
      'Used FDM 3D printing to produce hundreds of design iterations; operated and repaired 3D printers',
      'Ensured designs survived violent drilling vibrations while fully protecting onboard electronics',
      'Hand-soldered circuitry and managed manufacturing tolerances and machinery error prediction',
    ],
    tags: ['3D Printing', 'Robotics', 'Prototyping', 'Electronics'],
  },
]

const skillCategories = [
  {
    Icon: Settings,
    category: 'CAD & Design',
    tags: ['SolidWorks (CSWA)', 'SW FEA', 'SW Visualize', 'AutoCAD', 'Revit', 'SketchUp', 'GD&T'],
  },
  {
    Icon: FlaskConical,
    category: 'Simulation & Analysis',
    tags: ['SolidWorks FEA', 'Structural Analysis', 'Thermal Analysis', 'EES', 'MATLAB'],
  },
  {
    Icon: Factory,
    category: 'Manufacturing',
    tags: ['3D Printing (FDM/Resin)', 'Manual Mill & Lathe', 'MIG/TIG Welding', 'Sand Casting', 'Sheet Metal', 'Waterjet'],
  },
  {
    Icon: Code2,
    category: 'Software & Electronics',
    tags: ['MATLAB', 'C++', 'Arduino', 'LabVIEW', 'Eagle', 'PCB Mfg', 'Soldering'],
  },
  {
    Icon: Wrench,
    category: 'Engineering Practice',
    tags: ['Engineering Drawings', 'BOM & PRF', 'SOPs', 'PDR / CDR Reviews', 'FE – Mechanical'],
  },
  {
    Icon: BarChart3,
    category: 'Leadership & Business',
    tags: ['Project Management', 'Operations', 'Recruitment', 'Client Relations', 'Budget Management'],
  },
]

const S = '/images/slides/'

const automotiveProjects = [
  {
    id: 'fsae-livery',
    year: '2025',
    images: [
      { src: '/images/projects/crops/fsae_livery__cb6_night.jpg', caption: 'CB6 (#103) – pre-competition night shoot' },
      { src: '/images/projects/crops/fsae_livery__cb6_nose.jpg', caption: 'CB6 (#103) – carbon fiber nose detail' },
      { src: '/images/projects/crops/fsae_livery__cb6_wing.jpg', caption: 'CB6 (#103) – aero sidepod with Real Digital livery' },
      { src: '/images/projects/crops/fsae_livery__cb6_bodywork.jpg', caption: 'CB6 (#103) – bodywork detail' },
      { src: '/images/projects/crops/fsae_livery__cb6_cockpit.jpg', caption: 'CB6 (#103) – driver in cockpit at competition' },
      { src: '/images/projects/liv1.png', caption: 'CB6 livery design' },
      { src: '/images/projects/liv2.png', caption: 'CB6 livery design' },
    ],
    category: 'Formula SAE · CU-Boulder Racing Team',
    title: 'CAD & Livery Design',
    description:
      'Completed the top-level SolidWorks CAD assembly for CB6, ensuring all subsystems were integrated. Designed the 2025 competition livery using SolidWorks Visualize — delivered final renderings, dimensioned drawings, and color palettes to the vinyl supplier.',
    tags: ['SolidWorks', 'SW Visualize', 'CAD Assembly', 'Livery'],
  },
  {
    id: 'fsae-steering',
    slug: '/projects/fsae-steering',
    year: '2024–25',
    images: [
      { src: '/images/projects/wheel_new.jpg', caption: 'Steering wheel' },
      { src: '/images/projects/wheel2_new.jpg', caption: 'Steering wheel' },
      { src: '/images/projects/cubrt1.jpg', caption: 'Steering wheel' },
      { src: '/images/projects/cubrt2.jpg', caption: 'Steering wheel' },
      { src: '/images/projects/crops/fsae_livery__cb5_rear.jpg', caption: 'CB5 (#94) – rear aero package at competition' },
      { src: '/images/projects/crops/fsae_livery__sw_plates.jpg', caption: 'Waterjet aluminum steering wheel face plates' },
      { src: '/images/projects/steering1.png', caption: 'Steering wheel design' },
      { src: '/images/projects/steering2.png', caption: 'Steering wheel design' },
      { src: '/images/projects/steering3.png', caption: 'Steering wheel design' },
    ],
    category: 'Formula SAE · CU-Boulder Racing Team',
    title: 'Steering Wheel Design',
    description:
      'Designed the steering wheel for the CB4 & CB5 competition vehicles through a full SDR→CDR→manufacturing lifecycle. Rapid-prototyped multiple grip and face-plate iterations using FDM printing to dial in driver ergonomics — incorporating direct driver feedback on paddle-shift magnet strength, actuation force, grip diameter, and overall wheel feel before locking final geometry. Multi-load-case FEA confirmed ≥1.5× FOS across lateral, torsional, and axial loading.',
    tags: ['SolidWorks', 'FEA', 'GD&T', 'Rapid Prototyping', 'Design Reviews'],
  },
  {
    id: 'fsae-column',
    year: '2024–25',
    images: [
      { src: '/images/projects/column2.png', caption: 'Steering column' },
      { src: '/images/projects/column1.png', caption: 'Steering column' },
    ],
    category: 'Formula SAE · CU-Boulder Racing Team',
    title: 'Steering Column Design',
    description:
      'Designed the steering column assembly for CB5, serving as the structural link between the steering wheel and steering rack. Packaged a U-joint, quick-release interface, and column mount brackets within tight chassis constraints. Full FEA for torsional and bending loads through the SDR→CDR cycle.',
    tags: ['SolidWorks', 'FEA', 'Packaging', 'Design Reviews'],
  },
  {
    id: 'fsae-seat-floor',
    year: '2024',
    images: [
      { src: '/images/projects/sff_new.jpg', caption: 'Seat, floor & firewall' },
      { src: '/images/projects/sff2.jpg', caption: 'Seat, floor & firewall' },
      { src: '/images/projects/sff1.jpg', caption: 'Seat, floor & firewall' },
    ],
    category: 'Formula SAE · CU-Boulder Racing Team',
    title: 'Seat, Floor & Firewall Design',
    description:
      'Designed the seat, floor, and firewall assemblies for CB5 — water-jet bent 5052-H32 aluminum panels iterated around pedal/rack interference constraints, with the driver seat manufactured via expanding foam for optimal ergonomics. The design carried forward into CB6, where the panels were produced in carbon fiber.',
    tags: ['SolidWorks', 'Sheet Metal', 'Waterjet', 'Carbon Fiber', 'Manufacturing'],
  },
  {
    id: 'fsae-suspension',
    year: '2024',
    images: [
      { src: '/images/projects/cas_new.jpg', caption: 'Control arms' },
      { src: '/images/projects/ca_new.jpg', caption: 'Control arms' },
      { src: '/images/projects/ca2.png', caption: 'Control arms' },
      { src: '/images/projects/ca1.png', caption: 'Control arms' },
    ],
    category: 'Formula SAE · CU-Boulder Racing Team',
    title: 'Control Arms',
    description:
      'Verified the CB5 double-A-arm control arm design through FEA analysis, then manufactured — fabricated tube stock via MDF jigs, drilled and reamed bearing housings, and pressed/staked all bearings. Wrote manufacturing SOPs and BOMs.',
    tags: ['Manufacturing', 'SolidWorks', 'Suspension', 'Machining'],
  },
  {
    id: 'shell-eco',
    year: '2021',
    images: [
      { src: '/images/projects/crops/shell_eco__pagoda_ceremony.jpg', caption: 'Shell Eco-Marathon – full team at the Indianapolis Motor Speedway Pagoda', imgStyle: { objectPosition: '50% 70%' } },
      { src: '/images/projects/crops/shell_eco__car_team.jpg', caption: 'Team with the finished hydrogen prototype (#213) on the IMS track', imgStyle: { transform: 'scale(1.25) translateX(2%) translateY(-8%)', transformOrigin: 'center' } },
      { src: '/images/projects/crops/shell_eco__awards.jpg', caption: 'Award ceremony with the team at IMS' },
    ],
    category: 'Competition · Shell Eco-Marathon',
    title: 'Shell Eco-Marathon Vehicle',
    description:
      'Designed wheel spindles, vehicle livery, and hinged Lexan canopy for a hydrogen-powered prototype competing at Indianapolis Motor Speedway. Led braking system design and tuning.',
    tags: ['SolidWorks', 'Lightweight Design', 'Manufacturing', 'Competition'],
  },
]

const generalProjects = [
  {
    id: 'wabtec-rotor',
    images: [
      { src: S + 'wabtec1.png', caption: 'Traction motor assembly with rotor lock installed', wrapStyle: { background: '#fff' }, imgStyle: { objectFit: 'contain' } },
      { src: S + 'wabtec2.png', caption: 'Cross-sectional view of rotor lock installation', wrapStyle: { background: '#fff' }, imgStyle: { objectFit: 'contain' } },
      { src: S + 'wabtec3.png', caption: 'Isometric section view of rotor lock integration', wrapStyle: { background: '#fff' }, imgStyle: { objectFit: 'contain' } },
      { src: S + 'wabtec4.png', caption: 'Rotor lock product assembly', wrapStyle: { background: '#fff' }, imgStyle: { objectFit: 'contain' } },
      { src: S + 'wabtec5.png', caption: 'Test apparatus assembly', wrapStyle: { background: '#fff' }, imgStyle: { objectFit: 'contain' } },
    ],
    year: '2025–26',
    category: 'Senior Capstone · Wabtec',
    title: 'Locomotive Rotor Lock',
    description:
      'Designed and analyzed a rotor lock to protect internal bearings in Wabtec\'s remanufactured locomotive traction motors during shipment, serving as Lead CAD Engineer. Conducted FEA under 15,000+ lb axial and radial shock loads in A2 tool steel.',
    tags: ['FEA', 'SolidWorks', 'Structural', 'Client Work'],
    poster: '/expo-poster.pdf',
    bullets: [
      'Designed for EA & B motor types; withstands 10,000+ lb axial and radial shock loads across hundreds of thousands of cycles.',
      'Material: A2 tool steel — machined in annealed state (15 HRC, <100 ksi yield), then brite-hardened to ~200 ksi yield strength and 45 HRC.',
      'Met most program requirements: within OSHA single individual lift standard, <10 min installation, and -40°C to 60°C operating range.',
      'Simulations performed in SolidWorks using adaptive FEA meshing at component and assembly level, supported by manual calculations.',
      'Presented professional PDR, CDR, and MRR design reviews to Wabtec engineers.',
    ],
  },
  {
    id: 'electric-tricycle',
    year: '2025',
    images: [
      { src: '/images/projects/tricycle.jpeg', caption: 'Electric tricycle' },
      { src: '/images/projects/tricycle1.png', caption: 'Electric tricycle' },
      { src: '/images/projects/tricycle2.png', caption: 'Electric tricycle' },
    ],
    category: 'Component Design · CU Boulder',
    title: 'Electric-Powered Tricycle',
    description:
      'Designed and built an electric-powered tricycle as Test Engineer on a six-person team. Conducted FEA in SolidWorks for a 250+ lb rider, manually cut and coped tube stock, welded the frame, and delivered under a $250 budget for the endurance event.',
    tags: ['FEA', 'SolidWorks', 'Welding', 'Manufacturing'],
  },
  {
    id: 'hd-vam',
    year: '2024',
    images: [
      { src: '/images/projects/man1.png', caption: 'HD VAM Athena printer' },
      { src: '/images/projects/man2.png', caption: 'HD VAM Athena printer' },
      { src: '/images/projects/man3.png', caption: 'HD VAM Athena printer' },
    ],
    category: 'Internship · Manifest Technologies',
    title: 'HD VAM Athena Printer',
    description:
      "Co-developed the Athena printer's 80/20 frame, LED latent-curing system, and optical z-fold laser assemblies for a proprietary High-Definition Volumetric Additive Manufacturing platform.",
    tags: ['Additive Mfg', 'Optics', 'Mechanical Design', 'SOPs'],
  },
  {
    id: 'wobbler',
    year: '2023',
    images: [
      { src: '/images/projects/wobbler1.png', caption: 'Air-powered wobbler engine' },
      { src: '/images/projects/wobbler2.png', caption: 'Air-powered wobbler engine' },
      { src: '/images/projects/wobbler3.png', caption: 'Air-powered wobbler engine' },
    ],
    category: 'Machining · CU Boulder',
    title: 'Air-Powered Wobbler Engine',
    description:
      'Machined a scaled wobbler engine from raw stock on manual mill and lathe. Tuned clearances and lubricant for efficiency — ran at < 2 psi compressed air, reaching the competition finals.',
    tags: ['Manual Mill', 'Lathe', 'Machining', 'Manufacturing'],
  },
  {
    id: 'cubesat',
    year: '2022',
    images: [
      { src: '/images/projects/crops/cubesat__flight_photo.jpg', caption: 'CO₂ CubeSat – pre-flight inspection on the ground' },
      { src: '/images/projects/crops/cubesat__circuit_diagram.jpg', caption: 'System block diagram – Arduino Uno, sensors, SD card, and peripherals' },
      { src: '/images/projects/crops/cubesat__pressure_graph.jpg', caption: 'Post-flight data – atmospheric pressure vs. time with launch, burst, and landing markers' },
      { src: '/images/projects/crops/cubesat__co2_graph.jpg', caption: 'Post-flight data – CO₂ concentration (ppm) vs. time' },
      { src: '/images/projects/crops/cubesat__humidity_graph.jpg', caption: 'Post-flight data – relative humidity (%) vs. time' },
    ],
    category: 'Aerospace Computing · CU Boulder',
    title: 'CO₂ Research CubeSat',
    description:
      'Balloon-launched CubeSAT on $200 budget measuring CO₂ to 105,000 ft. Integrated sensors, GoPro, and Arduino Uno; analyzed post-flight altitude and CO₂ trend data.',
    tags: ['Arduino', 'Sensors', 'Data Analysis', 'Integration'],
  },
  {
    id: 'mines-drill',
    year: '2021',
    images: [
      { src: '/images/projects/mining_drill_rock.png', caption: 'Drill in operation – automated rock density detection test' },
      { src: '/images/projects/mining_drill_2.jpeg', caption: 'Full assembly – drill with electronics enclosure, mount, and sensor wiring' },
      { src: '/images/projects/mining_drill_1.jpeg', caption: '3D-printed electronics protection enclosure mounted to drill' },
      { src: '/images/projects/mining_drill_part.png', caption: 'Drill assembly – sensor mount and protection housing', wrapStyle: { background: '#fff' }, imgStyle: { objectFit: 'contain' } },
    ],
    category: 'Internship · M3Robotics Lab · CSM',
    title: 'Automated Mining Acoustic Sensor Design',
    description:
      'Designed the magnetic housing and sensor packaging for an acoustic-emission-based tool wear classification system on conical pick mining drills at the CSM Linear Cutting Machine. The system detects wear state across new, moderate, and worn cutting tips by capturing low-frequency acoustic signals near the cutting interface — enabling real-time monitoring without line-of-sight. Iterated through hundreds of FDM prototypes to develop a compact, magnetically mounted enclosure that protected onboard electronics and maintained sensor positioning through violent drilling vibration.',
    tags: ['Rapid Prototyping', '3D Printing', 'Sensor Packaging', 'Electronics'],
    article: { label: 'Research Article', href: 'https://crimsonpublishers.com/amms/pdf/AMMS.000789.pdf' },
  },
  {
    id: 'solar-panel',
    year: '2021',
    images: [
      { src: '/images/projects/solar_panel_2.jpeg', caption: 'Final 3D-printed multiaxial solar tracking prototype' },
      { src: '/images/projects/solar_panel_1.jpeg', caption: 'Warren Tech uniaxial wood prototype with solar panels' },
    ],
    category: 'Warren Tech · Arduino Project',
    title: 'Automated Solar Panel Tracker',
    description:
      'Developed a multiaxial solar tracking system using photoresistors and Arduino to maximize sunlight capture throughout the day. Iterated from a uniaxial wood prototype to a 3D-printed multiaxial bearing design, and conducted energy analysis on the scaled product.',
    tags: ['Arduino', '3D Printing', 'Electronics', 'Prototyping'],
  },
]

const certifications = [
  {
    name: 'Fundamentals of Engineering (FE) – Mechanical',
    issuer: 'NCEES',
    issued: 'Jan 2026',
    credentialId: '26-105-57',
    description: 'First step toward Professional Engineer (PE) licensure. Covers mathematics, engineering sciences, thermodynamics, fluid mechanics, heat transfer, mechanics of materials, and mechanical design.',
    tags: ['Licensure', 'Thermodynamics', 'Mechanics', 'Fluid Mechanics'],
  },
  {
    name: 'Certified SolidWorks Associate (CSWA)',
    issuer: 'Dassault Systèmes · SOLIDWORKS',
    issued: 'Dec 2021',
    credentialId: 'C-FX6WKRZ8HM',
    description: 'Industry-recognized credential validating proficiency in SolidWorks CAD — part modeling, assembly design, and engineering drawing interpretation.',
    tags: ['SolidWorks', 'CAD', 'Part Modeling', 'Assembly'],
  },
]

function CompanyLogo({ logo, logoText }) {
  return (
    <div className="company-logo-wrap">
      {logo
        ? <img src={logo} alt="" className="company-logo-img" onError={e => { e.currentTarget.style.display = 'none' }} />
        : <span className="company-logo-text">{logoText}</span>
      }
    </div>
  )
}

function Navbar() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') !== 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">CM</Link>
      <div className="navbar-links-wrap">
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
        </ul>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <button
          className="btn-theme-toggle"
          onClick={() => setDark(d => !d)}
          aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {dark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-flatirons">
        <img src="/images/flatirons.jpg" alt="" />
      </div>
      <div className="hero-bg" />
      <div className="hero-grid-overlay" />
      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Product Development Engineer FCG · Ford
          </div>
          <h1 className="hero-name">
            Carson R.<br />
            <span className="gradient-text">Malpass</span>
          </h1>
          <p className="hero-title">Mechanical Engineer</p>
          <p className="hero-description">
            B.S. Mechanical Engineering, University of Colorado Boulder. Minor in Engineering Management.
            From Formula SAE racecars and space cameras to additive manufacturing and locomotive hardware.
          </p>
          <div className="hero-meta">
            <span className="hero-meta-item">
              <MapPin size={14} />
              Littleton, CO
            </span>
            <span className="hero-meta-item">
              <GraduationCap size={14} />
              B.S. Mech. Eng. · CU Boulder
            </span>
            <span className="hero-meta-item">
              <Briefcase size={14} />
              Ford Motor Company
            </span>
          </div>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowRight size={16} />
            </a>
          </div>
          <div className="hero-logo-strip">
            <span className="hero-logo-label">Experience at</span>
            <div className="hero-logos">
              {[
                { src: '/images/logos/ford.png',     alt: 'Ford Motor Company',        href: 'https://www.ford.com/',                      label: 'Ford' },
                { src: '/images/logos/manifest.svg', alt: 'Manifest Technologies',     href: 'https://manifest.tech/',                     label: 'Manifest' },
                { src: '/images/logos/malin.png',    alt: 'Malin Space Science Systems', href: 'https://www.msss.com/',                    label: 'Malin' },
                { src: '/images/logos/mines.png',    alt: 'Colorado School of Mines',  href: 'https://m3robotics.mines.edu/',              label: 'M3Robotics' },
                { src: '/images/logos/cu.png',       alt: 'University of Colorado',    href: 'https://www.colorado.edu/mechanical/',       label: 'CU Boulder' },
              ].map(({ src, alt, href }) => (
                <a key={alt} href={href} target="_blank" rel="noreferrer" className="hero-logo-link">
                  <img src={src} alt={alt} className="hero-logo-img" title={alt} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-headshot-wrap">
          <div className="hero-headshot-ring" />
          <img src={headshotImg} alt="Carson Malpass" className="hero-headshot-img" />
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll</span>
        <ChevronDown size={16} />
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section-wrapper reveal">
      <div className="section">
        <span className="section-label">About</span>
        <h2 className="section-title">Who I Am</h2>
        <div className="divider" />
        <div className="about-grid">
          <div className="about-text">
            <p>
              My name is Carson Malpass, a mechanical engineer and Product
              Development Engineer FCG at Ford Motor Company. I hold a
              B.S. in Mechanical Engineering from the University of
              Colorado Boulder, with a minor in Engineering Management.
            </p>
            <p>
              My engineering experience spans three professional internships
              in additive manufacturing, aerospace hardware, and mining,
              alongside four years of hands-on leadership building competition
              racecars as President, Project Manager, and Chief Chassis
              Engineer of the CU Boulder Racing Team.
            </p>
            <p>
              I thrive at the intersection of engineering excellence and
              leadership. Leading the CU-Boulder Racing, managing a 300+
              member team and six-figure budget, and previously designing and
              integrating over 20 chassis subsystems, taught me that the best
              engineers know both sides. That same mindset carried into
              co-designing a high-vacuum testing chamber for Mars camera
              hardware at Malin Space Science Systems and assisting in the
              design and development of a first-of-its-kind 3D-printer at
              Manifest Technologies.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">15+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">3</span>
              <span className="stat-label">Engineering Internships</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">FE</span>
              <span className="stat-label">Mechanical Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExpCard({ exp }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={`exp-card exp-card--${exp.color}${open ? ' exp-card--open' : ''}`}
      onClick={() => setOpen(o => !o)}
      role="button"
      tabIndex={0}
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setOpen(o => !o)}
    >
      <div className="exp-card-header">
        <CompanyLogo logo={exp.logo} logoText={exp.logoText} />
        <div className="exp-card-header-text">
          <div className="exp-card-company">{exp.company}</div>
          <div className="exp-card-role">{exp.role}</div>
        </div>
        <div className="exp-card-right">
          <span className="exp-card-year">{exp.year}</span>
          <ChevronDown size={15} className="exp-card-chevron" />
        </div>
      </div>
      <div className="exp-card-details">
        <div className="exp-card-details-inner">
          <span className={`exp-badge exp-badge--${exp.type}`}>
            {exp.type === 'full-time' ? 'Full-Time' : exp.type === 'internship' ? 'Internship' : exp.type === '501c3' ? '501(c)(3) Non-Profit · CU Boulder Recognized Student Organization' : 'Leadership'}
          </span>
          <ul className="exp-card-bullets">
            {exp.bullets.map((b, j) => (
              <li key={j}>{b}</li>
            ))}
          </ul>
          <div className="exp-card-tags">
            {exp.tags.map((t) => (
              <span className="intern-tag" key={t}>{t}</span>
            ))}
          </div>
          {exp.images && (
            <div className="exp-card-gallery" onClick={e => e.stopPropagation()}>
              {exp.images.map((img, i) => (
                <div key={i} className="exp-card-gallery-item">
                  <img src={img.src} alt={img.caption} loading="lazy" />
                  <p className="exp-card-gallery-caption">{img.caption}</p>
                </div>
              ))}
            </div>
          )}
          {exp.links && (
            <div className="exp-card-links">
              {exp.links.map(({ label, href }) => (
                <a key={href} href={href} target="_blank" rel="noreferrer" className="project-card-cta" onClick={e => e.stopPropagation()}>
                  <ExternalLink size={14} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function Experience() {
  return (
    <section id="experience" className="section-wrapper section-alt reveal">
      <div className="section">
        <span className="section-label">Career</span>
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">Key roles across industry, research, and competition engineering. Click any role to learn more.</p>
        <div className="divider" />
        <div className="exp-grid">
          {experiences.map((exp, i) => (
            <ExpCard key={i} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section-wrapper reveal">
      <div className="section">
        <span className="section-label">Expertise</span>
        <h2 className="section-title">Tools & Skills</h2>
        <p className="section-subtitle">
          The software, methods, and technologies I use to bring ideas to life.
        </p>
        <div className="divider" />
        <div className="skills-grid">
          {skillCategories.map(({ Icon, category, tags }) => (
            <div className="skill-card" key={category}>
              <div className="skill-card-icon">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="skill-card-title">{category}</h3>
              <div className="skill-tags">
                {tags.map((tag) => (
                  <span className="skill-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCarousel({ images }) {
  const [idx, setIdx] = useState(0)
  const timer = useRef(null)
  const started = useRef(false)

  const startTimer = () => {
    clearInterval(timer.current)
    timer.current = setInterval(() => setIdx(i => (i + 1) % images.length), 4000)
  }

  useEffect(() => {
    return () => clearInterval(timer.current)
  }, [])

  const go = (e, dir) => {
    e.preventDefault()
    setIdx(i => (i + dir + images.length) % images.length)
    started.current = true
    startTimer()
  }

  const pick = (e, i) => {
    e.preventDefault()
    setIdx(i)
    if (started.current) startTimer()
  }

  return (
    <div className="carousel" onMouseEnter={() => clearInterval(timer.current)} onMouseLeave={() => { if (started.current) startTimer() }}>
      <div className="carousel-img-wrap" style={images[idx].wrapStyle || {}}>
        <img key={idx} src={images[idx].src} alt={images[idx].caption} loading="lazy" style={images[idx].imgStyle || {}} className="carousel-img-fade" />
      </div>
      {images.length > 1 && (
        <>
          <button className="carousel-btn carousel-prev" onClick={(e) => go(e, -1)} aria-label="Previous">
            <ArrowLeft size={18} strokeWidth={1.5} />
          </button>
          <button className="carousel-btn carousel-next" onClick={(e) => go(e, 1)} aria-label="Next">
            <ArrowRight size={18} strokeWidth={1.5} />
          </button>
          <div className="carousel-dots">
            {images.map((_, i) => (
              <button key={i} className={`carousel-dot${i === idx ? ' active' : ''}`} onClick={(e) => pick(e, i)} aria-label={`Photo ${i + 1}`} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

const DESC_THRESHOLD = 220

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)
  const [descOpen, setDescOpen] = useState(false)
  const hasBullets = project.bullets && project.bullets.length > 0
  const isLongDesc = project.description && project.description.length > DESC_THRESHOLD

  const inner = (
    <div className={`project-card${project.featured ? ' project-featured' : ''}${open ? ' project-card--open' : ''}`}>
      <div className="project-card-img">
        {project.images.length > 0
          ? <ProjectCarousel images={project.images} />
          : <div className="project-img-placeholder"><Camera size={36} strokeWidth={1} /></div>
        }
        {project.hasPage && (
          <div className="project-card-link-badge">
            <ChevronRight size={12} />
            View Details
          </div>
        )}
      </div>
      <div className="project-card-body">
        <div className="project-card-category-row">
          <span className="project-card-category">{project.category}</span>
          {project.year && <span className="project-card-year">{project.year}</span>}
        </div>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">
          {isLongDesc && !descOpen
            ? <>{project.description.slice(0, DESC_THRESHOLD).trimEnd()}… <button className="desc-show-more" onClick={e => { e.preventDefault(); e.stopPropagation(); setDescOpen(true) }}>Show more</button></>
            : project.description
          }
          {isLongDesc && descOpen && <> <button className="desc-show-more" onClick={e => { e.preventDefault(); e.stopPropagation(); setDescOpen(false) }}>Show less</button></>}
        </p>
        {hasBullets && (
          <div className="project-card-details">
            <div className="project-card-details-inner">
              <ul className="exp-card-bullets">
                {project.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
        )}
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span className="project-tag" key={tag}>{tag}</span>
          ))}
        </div>
        {project.hasPage && (
          <div className="project-card-cta">
            <span>Full Case Study</span>
            <ChevronRight size={14} />
          </div>
        )}
        {project.poster && (
          <a href={project.poster} download className="project-card-cta" onClick={e => e.stopPropagation()}>
            <Download size={14} />
            <span>Expo Poster</span>
          </a>
        )}
        {project.article && (
          <a href={project.article.href} target="_blank" rel="noreferrer" className="project-card-cta project-card-cta--subtle" onClick={e => e.stopPropagation()}>
            <ExternalLink size={14} />
            <span>{project.article.label}</span>
          </a>
        )}
        {hasBullets && (
          <button
            className="project-card-expand"
            onClick={e => { e.preventDefault(); e.stopPropagation(); setOpen(o => !o) }}
          >
            <span>{open ? 'Show Less' : 'Show More'}</span>
            <ChevronDown size={14} className={`project-expand-chevron${open ? ' open' : ''}`} />
          </button>
        )}
      </div>
    </div>
  )

  if (project.hasPage) {
    return <Link to={project.slug} className="project-card-link">{inner}</Link>
  }
  return inner
}

function Projects() {
  const [autoOpen, setAutoOpen] = useState(true)
  const [genOpen, setGenOpen] = useState(true)

  return (
    <section id="projects" className="section-wrapper section-alt reveal">
      <div className="section">
        <span className="section-label">Portfolio</span>
        <h2 className="section-title">Featured Work</h2>
        <p className="section-subtitle">
          Engineering projects from concept through manufacturing and competition.
        </p>
        <div className="divider" />
        <button className="projects-group-heading" onClick={() => setAutoOpen(o => !o)}>
          Automotive Projects
          <ChevronDown size={16} className={`projects-group-chevron${autoOpen ? '' : ' collapsed'}`} />
        </button>
        {autoOpen && (
          <div className="projects-grid">
            {automotiveProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}
        <button className="projects-group-heading" onClick={() => setGenOpen(o => !o)}>
          General Projects
          <ChevronDown size={16} className={`projects-group-chevron${genOpen ? '' : ' collapsed'}`} />
        </button>
        {genOpen && (
          <div className="projects-grid">
            {generalProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}


function Certifications() {
  return (
    <section id="certifications" className="section-wrapper reveal">
      <div className="section">
        <span className="section-label">Credentials</span>
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Professional certifications and licensure credentials.
        </p>
        <div className="divider" />
        <div className="cert-grid">
          {certifications.map((cert) => (
            <div className="cert-card" key={cert.name}>
              <div className="cert-card-icon">
                <Award size={22} strokeWidth={1.5} />
              </div>
              <div className="cert-card-body">
                <div className="cert-card-header">
                  <h3 className="cert-card-name">{cert.name}</h3>
                  <span className="cert-card-year">{cert.issued}</span>
                </div>
                <p className="cert-card-issuer">{cert.issuer}</p>
                <p className="cert-card-desc">{cert.description}</p>
                <p className="cert-card-credential">Credential ID: {cert.credentialId}</p>
                <div className="cert-tags">
                  {cert.tags.map((tag) => (
                    <span className="skill-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section-wrapper section-alt reveal">
      <div className="section">
        <span className="section-label">Contact</span>
        <h2 className="section-title">Get In Touch</h2>
        <div className="divider" />
        <a href="mailto:Carsonrmalpass@gmail.com" className="contact-email-link">
          <Mail size={18} />
          Carsonrmalpass@gmail.com
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Carson R. Malpass · Mechanical Engineer</p>
        <div className="footer-links">
          <a href="mailto:Carsonrmalpass@gmail.com"><Mail size={14} />Email</a>
          <a href="https://www.linkedin.com/in/carsonmalpass/" target="_blank" rel="noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <div className="quote-divider reveal">
        <p className="site-quote">"A good design solves the problem. A great design makes you forget there was one."</p>
      </div>
      <Contact />
      <Footer />
    </>
  )
}
