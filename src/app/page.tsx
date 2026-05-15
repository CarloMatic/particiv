import "./page.css";
import {
  Shield, BookOpen, Users, Brain, MessageSquare, FileText,
  Server, Lock, CheckCircle2, ArrowRight, FlaskConical,
  Building2, Zap, Landmark, Factory, ChevronRight,
  GraduationCap, Handshake, Globe, Database
} from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <TrustSection />
        <AudienceSection />
        <SecuritySection />
        <TeamSection />
        <ResearchSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

/* ============================================================
   HEADER
   ============================================================ */
function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="header-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="logo.svg" alt="PartiCiv" className="header-logo-img" />
        </a>
        <nav className="header-nav">
          <a href="#loesung">Lösung</a>
          <a href="#vertrauen">Warum wir</a>
          <a href="#forschung">Forschung</a>
          <a href="#kontakt" className="btn btn-primary btn-sm">
            Erstgespräch vereinbaren
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ============================================================
   1. HERO SECTION
   ============================================================ */
function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="logo.svg" alt="PartiCiv" className="hero-logo-img" />
          <h1>
            Beteiligungsverfahren sind aufwändig.
            <br />
            <span className="hero-accent">Wir machen sie beherrschbar.</span>
          </h1>
          <p className="hero-sub">
            PartiCiv digitalisiert und automatisiert Beteiligungsverfahren – von der
            Planauslage bis zur Einwendungsbearbeitung. Entwickelt in Kooperation mit
            der RWTH Aachen, validiert mit echten Verfahrensdaten, gehostet in Deutschland.
          </p>
          <div className="hero-actions">
            <a href="#kontakt" className="btn btn-primary">
              Pilotpartner werden
              <ArrowRight size={18} />
            </a>
            <a href="#loesung" className="btn btn-outline">
              Mehr erfahren
            </a>
          </div>
          <div className="trust-row">
            <span className="trust-item">
              <FlaskConical size={16} /> BMDV-gefördert
            </span>
            <span className="trust-item">
              <GraduationCap size={16} /> RWTH Aachen
            </span>
            <span className="trust-item">
              <Globe size={16} /> Gehostet in Deutschland
            </span>
            <span className="trust-item">
              <Shield size={16} /> DSGVO-konform
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   2. PROBLEM SECTION
   ============================================================ */
function ProblemSection() {
  const pains = [
    {
      icon: <FileText size={24} />,
      title: "Hoher manueller Aufwand",
      text: "Tausende Einwendungen werden einzeln gelesen, sortiert und beantwortet – oft ohne einheitliche Systematik.",
    },
    {
      icon: <Users size={24} />,
      title: "Inkonsistente Bearbeitung",
      text: "Unterschiedliche Sachbearbeiter:innen formulieren unterschiedliche Antworten auf identische Einwendungen – ein Risiko für die Rechtssicherheit.",
    },
    {
      icon: <Database size={24} />,
      title: "Fehlende Übersicht",
      text: "Thematische Schwerpunkte, Häufungen und Zusammenhänge sind in der großen Masse nur schwer zu erkennen.",
    },
  ];

  return (
    <section className="section-alt">
      <div className="container">
        <div className="section-header">
          <h2>
            Beteiligungsverfahren binden Ressourcen – und kosten Zeit,
            die anders investiert werden könnte.
          </h2>
          <p>
            Ob Planfeststellung, Plangenehmigung oder Öffentlichkeitsbeteiligung:
            Verfahren mit öffentlicher Teilhabe sind personalintensiv, kleinteilig
            und fehleranfällig.
          </p>
        </div>
        <div className="grid-3">
          {pains.map((p, i) => (
            <div key={i} className="card">
              <div className="card-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. SOLUTION SECTION
   ============================================================ */
function SolutionSection() {
  const pillars = [
    {
      icon: <BookOpen size={24} />,
      badge: "Plattform",
      title: "Digitale Beteiligungsplattform",
      subtitle: "Alle Unterlagen, alle Rückmeldungen, ein System.",
      features: [
        "Digitale Bereitstellung von Planunterlagen inkl. 3D-Visualisierung",
        "Strukturierte Erfassung von Einwendungen und Stellungnahmen",
        "Konfigurierbar für formelle und informelle Verfahren",
        "BIM-konforme Abläufe durch offene Datenstandards (IFC, BCF)",
      ],
    },
    {
      icon: <Brain size={24} />,
      badge: "KI-Engine",
      title: "KI-gestütztes Einwendungsmanagement",
      subtitle: "2.000 Einwendungen? In Stunden statt Wochen.",
      features: [
        "Automatische thematische Vorsortierung und Kategorisierung",
        "Erkennung von Duplikaten und inhaltlich ähnlichen Einwendungen",
        "KI-generierte Antwortvorschläge auf Basis realer Verfahrensdaten",
        "Human-in-the-loop: Jeder Vorschlag wird vor Übernahme geprüft",
      ],
    },
    {
      icon: <MessageSquare size={24} />,
      badge: "Assistent",
      title: "Intelligenter Projektassistent",
      subtitle: "Komplexe Planunterlagen – verständlich auf Knopfdruck.",
      features: [
        "Durchsucht und erklärt Planunterlagen in verständlicher Sprache",
        "Beantwortet Standardfragen zu Planung und Verfahrensabläufen",
        "Unterstützt Sachbearbeiter:innen bei der schnellen Orientierung",
      ],
    },
  ];

  return (
    <section className="section" id="loesung">
      <div className="container">
        <div className="section-header">
          <h2>Struktur statt Stapel. Unterstützung statt Mehrarbeit.</h2>
          <p>
            PartiCiv unterstützt Behörden, Vorhabenträger und Kommunen bei der
            strukturierten Durchführung, Auswertung und Dokumentation von
            Beteiligungsverfahren.
          </p>
        </div>
        <div className="pillars">
          {pillars.map((p, i) => (
            <div key={i} className="pillar-card">
              <div className="pillar-header">
                <div className="card-icon">{p.icon}</div>
                <div>
                  <span className="badge">{p.badge}</span>
                  <h3>{p.title}</h3>
                  <p className="pillar-subtitle">{p.subtitle}</p>
                </div>
              </div>
              <ul className="pillar-features">
                {p.features.map((f, j) => (
                  <li key={j}>
                    <CheckCircle2 size={16} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   4. TRUST SECTION
   ============================================================ */
function TrustSection() {
  const signals = [
    { icon: <FlaskConical size={20} />, title: "Wissenschaftlich fundiert", text: "Entwickelt auf Basis peer-reviewter Forschung an der RWTH Aachen" },
    { icon: <Landmark size={20} />, title: "Praxisnah entwickelt", text: "Validiert mit Daten aus realen Planfeststellungsverfahren" },
    { icon: <Handshake size={20} />, title: "Mit Behörden entwickelt", text: "Partner: Landesbaudirektion Bayern, WIN.DN Düren" },
    { icon: <Building2 size={20} />, title: "30 Jahre Softwarekompetenz", text: "Technische Umsetzung durch Interactive Pioneers GmbH" },
    { icon: <Server size={20} />, title: "Gehostet in Deutschland", text: "Serverstandort Deutschland, DSGVO-konform" },
    { icon: <Lock size={20} />, title: "Ihre Daten, Ihre Kontrolle", text: "Human-in-the-loop: KI unterstützt, Sie entscheiden" },
  ];

  return (
    <section className="section-dark" id="vertrauen">
      <div className="container">
        <div className="section-header">
          <h2>Keine Blackbox. Kein Startup-Experiment.</h2>
          <p>Wissenschaft trifft Praxis.</p>
        </div>
        <p className="trust-intro">
          PartiCiv ist aus dem Forschungsprojekt <strong>BIM4People</strong> entstanden
          – gefördert durch das Bundesministerium für Digitales und Verkehr. Die Grundlage:
          über 2.000 reale Einwendungen aus 12 Planfeststellungsverfahren, manuell analysiert
          und systematisch ausgewertet.
        </p>
        <div className="grid-3" style={{ marginTop: "3rem" }}>
          {signals.map((s, i) => (
            <div key={i} className="trust-card">
              <div className="trust-card-icon">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   5. AUDIENCE SECTION
   ============================================================ */
function AudienceSection() {
  const audiences = [
    {
      icon: <Landmark size={24} />,
      title: "Behörden & Vorhabenträger",
      text: "Effiziente Durchführung formeller Beteiligungsverfahren – insbesondere Planfeststellungsverfahren für Infrastrukturgroßprojekte.",
      features: [
        "Digitale Planauslage und strukturierte Einwendungserfassung",
        "KI-gestützte Bearbeitung und Beantwortung",
        "Nachvollziehbare Dokumentation für die Abwägungsentscheidung",
      ],
    },
    {
      icon: <Building2 size={24} />,
      title: "Kommunen & Städte",
      text: "Digitale Dialogplattformen für informelle Beteiligungsformate – von der Stadtteilentwicklung bis zur Verkehrsplanung.",
      features: [
        "Niedrigschwellige Beteiligungsformate ohne formale Bindung",
        "Strukturierte Erfassung von Bürgerrückmeldungen",
        "Visualisierung von Planungsvarianten für die Öffentlichkeit",
      ],
    },
    {
      icon: <Factory size={24} />,
      title: "Energieversorger & Infrastrukturbetreiber",
      text: "Unternehmen, die selbst von Planfeststellungsverfahren betroffen sind.",
      features: [
        "Effiziente Aufbereitung und Einreichung eigener Stellungnahmen",
        "Tracking und Auswertung relevanter Verfahren",
        "Datenbasierte Stakeholder-Kommunikation",
      ],
    },
  ];

  return (
    <section className="section-alt">
      <div className="container">
        <div className="section-header">
          <h2>Ein System. Viele Verfahren.</h2>
        </div>
        <div className="grid-3">
          {audiences.map((a, i) => (
            <div key={i} className="card">
              <div className="card-icon">{a.icon}</div>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
              <ul className="checklist" style={{ marginTop: "1rem" }}>
                {a.features.map((f, j) => (
                  <li key={j}>
                    <ChevronRight size={16} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   6. SECURITY SECTION
   ============================================================ */
function SecuritySection() {
  const items = [
    "Serverstandort Deutschland",
    "DSGVO-konform",
    "ISO 27001-Zertifizierung in Vorbereitung",
    "Nutzung offener Datenstandards (IFC, BCF)",
    "Anbindungsfähig an bestehende Verwaltungssysteme",
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="security-layout">
          <div className="security-content">
            <h2>Sicherheit ist kein Feature – sondern Voraussetzung.</h2>
            <p>
              Behördliche Daten erfordern höchste Sicherheitsstandards. PartiCiv wird
              in Deutschland gehostet und erfüllt die Anforderungen der DSGVO. Ein
              Auftragsverarbeitungsvertrag (AVV) ist Standard.
            </p>
            <ul className="checklist" style={{ marginTop: "1.5rem" }}>
              {items.map((item, i) => (
                <li key={i}>
                  <CheckCircle2 size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="security-visual">
            <div className="security-shield">
              <Shield size={64} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   7. TEAM SECTION
   ============================================================ */
function TeamSection() {
  return (
    <section className="section-alt">
      <div className="container">
        <div className="section-header">
          <h2>Forschung trifft Umsetzung.</h2>
        </div>
        <div className="grid-3">
          <div className="card team-card">
            <div className="team-avatar">
              <Brain size={32} />
            </div>
            <h3>Jonathan Matthes</h3>
            <p className="team-role">Formelle Beteiligungsverfahren</p>
            <p>
              Promoviert an der RWTH Aachen zum Einsatz von BIM und KI in
              Genehmigungsverfahren. Hat über 2.000 Einwendungen aus realen
              Verfahren analysiert.
            </p>
          </div>
          <div className="card team-card">
            <div className="team-avatar">
              <GraduationCap size={32} />
            </div>
            <h3>Peter Gölzhäuser</h3>
            <p className="team-role">Künstliche Intelligenz</p>
            <p>
              Promoviert an der RWTH Aachen mit Fokus auf datenbasierte Analyse-
              und Assistenzsysteme. Entwickelt die KI- und Analysewerkzeuge von
              PartiCiv.
            </p>
          </div>
          <div className="card team-card">
            <div className="team-avatar">
              <Building2 size={32} />
            </div>
            <h3>Interactive Pioneers GmbH</h3>
            <p className="team-role">Technologiepartner</p>
            <p>
              Seit über 30 Jahren entwickelt Interactive Pioneers digitale
              Lösungen – von komplexen Plattformen bis zu datengetriebenen
              Anwendungen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   8. RESEARCH SECTION
   ============================================================ */
function ResearchSection() {
  const publications = [
    {
      title: "Innovationen durch Zusammenarbeit: Wie digitale Technologien die Bürgerbeteiligung neu denken lassen",
      source: "Masterplan BIM und Bürgerbeteiligung",
      doi: "https://doi.org/10.18154/RWTH-2024-08634",
    },
    {
      title: "BIM-basierte Planfeststellung für Infrastrukturgroßprojekte",
      source: "Bautechnik",
      doi: "https://doi.org/10.1002/bate.202400016",
    },
    {
      title: "BIM-Based Public Participation: Insights and Lessons Learned from a Case Study",
      source: "ISARC 2025 Proceedings",
      doi: "https://doi.org/10.22260/ISARC2025/0211",
    },
    {
      title: "Validierung einer BIM-basierten Beteiligungsplattform – qualitative und quantitative Einblicke",
      source: "RWTH Aachen",
      doi: "https://doi.org/10.18154/RWTH-2025-08052",
    },
    {
      title: "Design and Prototype of a Chatbot for Public Participation in Major Infrastructure Projects",
      source: "Multimodal Technologies and Interaction",
      doi: "https://doi.org/10.3390/mti10020012",
    },
  ];

  return (
    <section className="section" id="forschung">
      <div className="container">
        <div className="section-header">
          <h2>Peer-reviewed. Nicht nur PowerPoint.</h2>
          <p>
            Unsere Lösungen basieren auf mehrjähriger Forschung und sind in
            internationalen Fachzeitschriften veröffentlicht.
          </p>
        </div>
        <div className="publications">
          {publications.map((pub, i) => (
            <a
              key={i}
              href={pub.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="pub-card"
            >
              <div className="pub-icon">
                <FileText size={20} />
              </div>
              <div>
                <h4>{pub.title}</h4>
                <p className="pub-source">{pub.source}</p>
              </div>
              <ArrowRight size={16} className="pub-arrow" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   9. CTA SECTION
   ============================================================ */
function CTASection() {
  return (
    <section className="section-dark cta-section" id="kontakt">
      <div className="container">
        <div className="cta-inner">
          <h2>Pilotpartner gesucht.</h2>
          <p>
            Wir suchen Behörden, Kommunen und Vorhabenträger, die ihre
            Beteiligungsverfahren effizienter gestalten wollen – und bereit sind,
            den nächsten Schritt gemeinsam mit uns zu gehen.
          </p>
          <div className="cta-benefits">
            <span>✓ Frühzeitiger Zugang</span>
            <span>✓ Individuelle Anpassung</span>
            <span>✓ Direkter Draht zum Team</span>
            <span>✓ Beratung zur Digitalisierung</span>
          </div>
          <div className="cta-actions">
            <a href="mailto:info@particiv.de" className="btn btn-primary btn-lg">
              Erstgespräch vereinbaren
              <ArrowRight size={18} />
            </a>
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <a href="tel:+4924191880711" className="cta-phone-link">
              oder rufen Sie uns an: <strong>0241 91880-711</strong>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   10. FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo-row">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="logo.svg" alt="PartiCiv" className="footer-logo-img" />
          </div>
          <p>
            Ein Projekt der Interactive Pioneers GmbH
          </p>
        </div>
        <div className="footer-links">
          <a href="https://www.interactive-pioneers.de/blog/impressum/" target="_blank" rel="noopener noreferrer">Impressum</a>
          <a href="https://www.interactive-pioneers.de/blog/datenschutzbestimmungen/" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a>
          <a href="tel:+4924191880711">0241 91880-711</a>
          <a href="mailto:info@particiv.de">info@particiv.de</a>
        </div>
      </div>
    </footer>
  );
}
