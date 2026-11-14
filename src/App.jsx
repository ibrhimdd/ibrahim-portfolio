import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDownToLine, ArrowLeft, ArrowRight, ArrowUpRight, Github, Linkedin, Youtube, Moon, Sun, Send, Code2, Globe, CheckCircle2, Menu, X, Sparkles, Palette, Zap, Layers3, Database, Atom, Braces, Box, Wind } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  { name: 'PHP', sub: 'MySQL', Icon: Database, color: '#8bb7ff' },
  { name: 'React', sub: 'Next.js', Icon: Atom, color: '#55d9ff' },
  { name: 'JavaScript', sub: 'TypeScript', Icon: Braces, color: '#f4d34e' },
  { name: 'UI/UX', sub: 'Design', Icon: Palette, color: '#a78bfa' },
  { name: 'GSAP', sub: 'Motion', Icon: Zap, color: '#b5f34b' },
  { name: 'Three.js', sub: '3D', Icon: Box, color: '#d8d8ed' },
  { name: 'Tailwind', sub: 'CSS', Icon: Wind, color: '#39c8e8' },
  { name: 'More Skills', sub: '…', Icon: Layers3, color: '#6578ff' },
]

const projects = [
  { title: 'EduGenius LMS', type: 'منصة تعليمية', desc: 'منصة تعليمية متكاملة مع لوحة تحكم متقدمة', style: 'dashboard', href: 'https://github.com/ibrhimdd/edu-k' },
  { title: 'Creative Portfolio', type: 'موقع إبداعي', desc: 'موقع شخصي تفاعلي بتصميم عمري', style: 'abstract', href: 'https://github.com/ibrhimdd/ibrahim-portfolio' },
  { title: 'Dashboard Pro', type: 'لوحة تحكم', desc: 'لوحة تحكم احترافية مع تحليلات متقدمة', style: 'analytics', href: 'https://github.com/ibrhimdd/ibrahim-skills-developer' },
]

function App() {
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      gsap.from('.site-header, .hero-copy, .hero-person-image', { y: 24, opacity: 0, duration: .85, stagger: .12, ease: 'power3.out' })
      gsap.utils.toArray('.reveal').forEach((el) => gsap.from(el, {
        y: 28, opacity: 0, duration: .75, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true }
      }))
      gsap.to('.hero-orbit', { rotate: 360, duration: 28, repeat: -1, ease: 'none' })
      gsap.to('.hero-glow', { scale: 1.12, opacity: .8, duration: 3, yoyo: true, repeat: -1, ease: 'sine.inOut' })
    }, root)
    return () => ctx.revert()
  }, [])

  const goTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main ref={root} className={dark ? 'portfolio dark' : 'portfolio light'} dir="rtl">
      <header className="site-header">
        <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); goTo('home') }}>
          <span className="brand-mark">i<span>E</span></span>
          <span className="brand-copy"><b>Ibrahim Elkholy</b><small>Full Stack Developer</small></span>
        </a>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'}>
          {['الرئيسية', 'مهاراتي', 'مشاريعي', 'عني', 'تواصل معي'].map((label, i) => <button className={i === 0 ? 'active' : ''} key={label} onClick={() => goTo(['home', 'skills', 'projects', 'about', 'contact'][i])}>{label}</button>)}
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="تغيير المظهر">{dark ? <Moon size={18} /> : <Sun size={18} />}</button>
          <a className="outline-pill" href="https://github.com/ibrhimdd" target="_blank" rel="noreferrer">استعرض ملفي <ArrowUpRight size={15} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="فتح القائمة">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-copy">
          <div className="welcome-pill"><span>👋</span> مرحباً بك في موقعي الشخصي</div>
          <h1><span className="gradient-text">Ibrahim</span> Elkholy</h1>
          <h2>Full Stack Developer &amp; UI/UX Designer</h2>
          <p>أحوّل الأفكار إلى تجارب رقمية استثنائية،<br />مع شغف بالتطوير، التصميم، والابتكار.</p>
          <div className="hero-actions">
            <button className="primary-pill" onClick={() => goTo('projects')}><ArrowRight size={17} /> استعرض مشاريعي</button>
            <button className="secondary-pill" onClick={() => goTo('contact')}><Send size={16} /> تواصل معي</button>
          </div>
          <div className="social-row">
            <a href="https://github.com/ibrhimdd" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
            <a href="https://github.com/ibrhimdd" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a href="https://github.com/ibrhimdd" target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube /></a>
            <a href="https://github.com/ibrhimdd" target="_blank" rel="noreferrer" aria-label="Website"><Globe /></a>
          </div>
        </div>
        <div className="hero-art" aria-label="لوحة فنية رقمية تعبر عن التطوير والبرمجة">
          <div className="hero-glow" />
          <div className="code-window window-left"><span>‹ / ›</span></div>
          <div className="code-window window-top"><i /><i /><i /><div>const create = () =&gt; {'{'}<br />&nbsp; innovate();<br />{'}'}</div></div>
          <div className="laptop"><div className="laptop-screen"><span>01</span><i /><i /><i /><i /></div><div className="laptop-base" /></div>
          <img className="hero-person-image" src="/ibrahim-hoodie.webp" alt="إبراهيم مرتديًا هودي أسود" />
          <div className="code-bubble">Code<br />Create<br />Innovate ✨</div>
          <div className="hero-orbit" />
          <div className="hero-caption">DIGITAL CRAFT · CREATIVE CODE</div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="section-title"><div><h2>مهاراتي التقنية <span>☰</span></h2><p>مجموعة متكاملة من المهارات لبناء حلول احترافية</p></div></div>
        <div className="skills-grid">
          {skills.map(({ name, sub, Icon, color }) => <article className="skill-tile" key={name}><Icon size={35} color={color} strokeWidth={1.8} /><b>{name}</b><span>{sub}</span></article>)}
        </div>
      </section>

      <section className="work-about">
        <div id="projects" className="projects-section">
          <div className="projects-heading"><div><h2>أبرز مشاريعي</h2><p>نماذج من أعمالي التي أفتخر بها</p></div><button onClick={() => goTo('contact')}>عرض جميع المشاريع <ArrowLeft size={15} /></button></div>
          <div className="project-grid">
            {projects.map((project) => <a className="project-card" href={project.href} target="_blank" rel="noreferrer" key={project.title}>
              <div className={'project-thumb ' + project.style}>
                <span className="project-tag">{project.type}</span>
                {project.style === 'abstract' ? <div className="abstract-shape" /> : <div className="mock-dashboard"><div className="mock-sidebar"><i /><i /><i /><i /></div><div className="mock-content"><div className="mock-top" /><div className="mock-stats"><i /><i /><i /></div><div className="mock-chart"><b /><b /><b /><b /><b /><b /></div><div className="mock-bottom" /></div></div>}
              </div>
              <div className="project-details"><h3>{project.title}</h3><p>{project.desc}</p><span>عرض المشروع <ArrowLeft size={15} /></span></div>
            </a>)}
          </div>
        </div>
        <aside id="about" className="about-card">
          <h2>نبذة <span>عني</span></h2>
          <p>مطور ويب ومصمم واجهات متخصص في بناء المنصات التعليمية والتطبيقات الحديثة. أؤمن بأن التقنية هي جسر نحو مستقبل أفضل.</p>
          <ul><li><CheckCircle2 /> خبرة في تطوير الويب</li><li><CheckCircle2 /> شغف بالتصميم والموشن</li><li><CheckCircle2 /> التزام بالجودة والاحترافية</li></ul>
          <div className="about-visual"><div className="about-code"><Code2 size={66} /></div><span>BUILD THE FUTURE</span></div>
          <button className="about-more" onClick={() => goTo('contact')}>المزيد عني <ArrowLeft size={16} /></button>
        </aside>
      </section>

      <section id="contact" className="contact-banner">
        <div className="mountain-art"><span>◆</span><i /></div>
        <div className="contact-message"><h2>لنبدأ مشروعك القادم معاً! 🚀</h2><p>أفكارك + خبراتي = نتيجة استثنائية</p></div>
        <a className="primary-pill" href="https://github.com/ibrhimdd" target="_blank" rel="noreferrer"><ArrowRight size={17} /> تواصل معي الآن</a>
        <div className="planet planet-one" /><div className="planet planet-two" />
      </section>
      <footer className="footer"><span>© 2026 Ibrahim Elkholy</span><span>صُنع بشغف وإبداع</span><a href="https://github.com/ibrhimdd" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a></footer>
    </main>
  )
}

export default App
