import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowDown, ArrowUpLeft, ArrowUpRight, ArrowUp, ArrowDownLeft,
  ArrowRight, ArrowLeft, Github, Linkedin, Mail, MoveUpRight,
  Code2, Sparkles, Layers3, Globe2, Menu, X, Languages
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const copy = {
  ar: {
    nav: ['الرئيسية', 'المهارات', 'المشاريع', 'عني'],
    available: 'متاح لفرص جديدة',
    eyebrow: 'مطور واجهات وتجارب رقمية',
    heroA: 'أحوّل',
    heroB: 'الأفكار',
    heroC: 'إلى تجارب',
    heroD: 'تُ感ش وتُعاش.',
    intro: 'أنا إبراهيم الخولي — مطور ومصمم شغوف ببناء منتجات رقمية تجمع بين الفكرة الذكية، التفاصيل الدقيقة، والحركة التي لها معنى.',
    work: 'استكشف أعمالي',
    contact: 'خلينا نتكلم',
    scroll: 'انزل واكتشف',
    index: '01 / 04',
    statement: 'الكود هو البداية.\nالتجربة هي الحكاية.',
    statementSub: 'أصمم وأبني واجهات لا تكتفي بأنها تعمل؛ بل تترك انطباعًا.',
    skillsLabel: 'ما الذي أقدمه',
    skillsTitle: 'أفكر في التجربة\nمن كل زاوية.',
    skills: [
      ['01', 'تطوير الواجهات', 'واجهات سريعة، مرنة، ومتجاوبة باستخدام React وأحدث أدوات الويب.', 'React · Tailwind · JavaScript'],
      ['02', 'الحركة والتفاعل', 'حركة مدروسة وتفاعلات دقيقة تجعل الواجهة حية دون تشتيت.', 'GSAP · Motion · Micro-interactions'],
      ['03', 'التصميم الإبداعي', 'أنظمة بصرية جريئة، وتفاصيل متناسقة، وتجارب لها شخصية.', 'UI Design · Design Systems'],
      ['04', 'الجودة والاختبار', 'أهتم بالتفاصيل وإمكانية الاستخدام واختبار التجربة على مختلف الشاشات.', 'Playwright · Accessibility']
    ],
    projectsLabel: 'مختارات من العمل',
    projectsTitle: 'أفكار تحولت\nإلى واقع.',
    projects: [
      ['01', 'EduGenius', 'منصة تعليمية تفاعلية', 'تعليم · لوحة تحكم · تجربة مستخدم', 'EG'],
      ['02', 'Classroom Connect', 'نظام ذكي لمتابعة الفصول', 'IoT · Dashboard · Real-time', 'CC'],
      ['03', 'Digital Playground', 'مساحة للتجارب والأفكار', 'Creative coding · Interaction', 'DP']
    ],
    aboutLabel: 'وراء الشاشة',
    aboutTitle: 'فضولي يقودني.\nوالتفاصيل تهمني.',
    aboutText: 'أحب أفهم المشكلة قبل ما أكتب سطر كود. أتنقل بين البرمجة والتصميم والتجربة، وأؤمن إن أفضل الحلول هي الأبسط في الاستخدام والأقوى في أثرها.',
    principles: ['التفكير قبل التنفيذ', 'التفاصيل تصنع الفرق', 'التعلم رحلة مستمرة'],
    contactLabel: 'عندك فكرة؟',
    contactTitle: 'خلينا نبني\nحاجة تستحق.',
    contactText: 'سواء عندك مشروع، فكرة، أو مجرد رغبة في تبادل الخبرات — يسعدني أسمع منك.',
    email: 'راسلني',
    footer: 'صُنع بشغف وكثير من القهوة.',
    top: 'للأعلى',
    skillNote: 'مجموعة أدوات أتعلم وأعمل بها باستمرار'
  },
  en: {
    nav: ['Home', 'Skills', 'Projects', 'About'],
    available: 'Available for new opportunities',
    eyebrow: 'Creative developer & digital maker',
    heroA: 'I turn',
    heroB: 'ideas',
    heroC: 'into digital',
    heroD: 'experiences.',
    intro: 'I’m Ibrahim Elkhooly — a developer and creative thinker building digital products with thoughtful ideas, sharp details, and purposeful motion.',
    work: 'Explore my work',
    contact: 'Let’s talk',
    scroll: 'Scroll to explore',
    index: '01 / 04',
    statement: 'Code is the beginning.\nExperience is the story.',
    statementSub: 'I design and build interfaces that do more than work — they make you feel something.',
    skillsLabel: 'What I bring',
    skillsTitle: 'I think about experience\nfrom every angle.',
    skills: [
      ['01', 'Frontend development', 'Fast, flexible, responsive interfaces built with React and modern web tools.', 'React · Tailwind · JavaScript'],
      ['02', 'Motion & interaction', 'Purposeful motion and thoughtful interactions that bring interfaces to life.', 'GSAP · Motion · Micro-interactions'],
      ['03', 'Creative design', 'Bold visual systems, considered details, and experiences with a distinct voice.', 'UI Design · Design Systems'],
      ['04', 'Quality & testing', 'Care for usability, accessibility, details, and testing across screen sizes.', 'Playwright · Accessibility']
    ],
    projectsLabel: 'Selected explorations',
    projectsTitle: 'Ideas made\nreal.',
    projects: [
      ['01', 'EduGenius', 'Interactive learning platform', 'Education · Dashboard · UX', 'EG'],
      ['02', 'Classroom Connect', 'Smart classroom monitoring', 'IoT · Dashboard · Real-time', 'CC'],
      ['03', 'Digital Playground', 'A space for experiments', 'Creative coding · Interaction', 'DP']
    ],
    aboutLabel: 'Behind the screen',
    aboutTitle: 'Curiosity drives me.\nDetails matter.',
    aboutText: 'I like to understand the problem before writing a line of code. I move between engineering, design, and experience — believing the best solutions feel simple and leave a meaningful impact.',
    principles: ['Think before building', 'Details make the difference', 'Always learning'],
    contactLabel: 'Have an idea?',
    contactTitle: 'Let’s build\nsomething meaningful.',
    contactText: 'A project, a wild idea, or just a conversation — I’d love to hear from you.',
    email: 'Say hello',
    footer: 'Made with curiosity & too much coffee.',
    top: 'Back to top',
    skillNote: 'A toolkit I keep learning and building with'
  }
}

const icons = [Code2, Sparkles, Layers3, Globe2]

function App() {
  const [lang, setLang] = useState('ar')
  const [menuOpen, setMenuOpen] = useState(false)
  const root = useRef(null)
  const t = copy[lang]
  const rtl = lang === 'ar'

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduce) return
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })
      intro.from('.nav-animate', { y: -18, opacity: 0, duration: .7 })
        .from('.hero-kicker, .hero-copy', { y: 24, opacity: 0, duration: .8, stagger: .12 }, '-=.3')
        .from('.hero-title-line', { yPercent: 110, rotate: 2, duration: 1, stagger: .12 }, '-=.55')
        .from('.hero-art', { scale: .82, opacity: 0, rotate: -8, duration: 1.1 }, '-=.7')
        .from('.hero-bottom', { y: 18, opacity: 0, duration: .7 }, '-=.5')

      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.from(el, {
          y: 42, opacity: 0, duration: .85, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true }
        })
      })
      gsap.to('.orbit-ring', {
        rotate: 360, duration: 34, repeat: -1, ease: 'none'
      })
      gsap.to('.floating-star', {
        y: -14, rotate: 18, duration: 2.4, yoyo: true, repeat: -1, ease: 'sine.inOut'
      })
    }, root)
    return () => ctx.revert()
  }, [lang])

  const goTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main ref={root} dir={rtl ? 'rtl' : 'ltr'} className={rtl ? 'font-ar' : 'font-en'}>
      <div className="noise" aria-hidden="true" />
      <header className="site-header nav-animate">
        <a className="wordmark" href="#home" onClick={(e) => { e.preventDefault(); goTo('home') }}>
          <span className="wordmark-mark">I<span>.</span></span>
          <span className="wordmark-name">IBRAHIM<span>ELKHOOLY</span></span>
        </a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          {t.nav.map((item, i) => <button key={item} onClick={() => goTo(['home', 'skills', 'projects', 'about'][i])}>{item}</button>)}
        </nav>
        <div className="header-actions">
          <button className="language-btn" onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} aria-label="Switch language">
            <Languages size={16} /> {lang === 'ar' ? 'EN' : 'عربي'}
          </button>
          <a className="header-cta" href="mailto:hello@ibrahim.dev">{t.contact} <MoveUpRight size={15} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section id="home" className="hero section-shell">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-kicker"><span className="status-dot" />{t.available}</div>
            <p className="eyebrow hero-copy">{t.eyebrow} <span>✳</span></p>
            <h1 className="hero-title">
              <span className="hero-title-line">{t.heroA} <em>{t.heroB}</em></span>
              <span className="hero-title-line">{t.heroC}</span>
              <span className="hero-title-line accent-line">{t.heroD}</span>
            </h1>
            <p className="hero-description hero-copy">{t.intro}</p>
            <div className="hero-buttons hero-copy">
              <button className="button-primary" onClick={() => goTo('projects')}>{t.work} <span>{rtl ? <ArrowUpLeft size={18} /> : <ArrowUpRight size={18} />}</span></button>
              <button className="button-quiet" onClick={() => goTo('contact')}>{t.contact} <ArrowDown size={16} /></button>
            </div>
          </div>
          <div className="hero-visual hero-art" aria-label="Abstract creative geometric artwork">
            <div className="visual-topline"><span>CREATIVE / 2026</span><span>CAIRO, EG</span></div>
            <div className="art-stage">
              <div className="art-glow" />
              <div className="orbit-ring orbit-one" />
              <div className="orbit-ring orbit-two" />
              <div className="orbit-ring orbit-three" />
              <div className="art-core"><span>i</span><b>✳</b></div>
              <div className="floating-star">✳</div>
              <div className="art-label label-one">IDEAS<br />IN MOTION</div>
              <div className="art-label label-two">MAKE IT<br /><strong>MATTER.</strong></div>
              <div className="art-cross cross-one">＋</div>
              <div className="art-cross cross-two">✳</div>
            </div>
            <div className="visual-bottomline"><span>FIG. 001 — THE CREATIVE MIND</span><span>◉ 01</span></div>
          </div>
        </div>
        <div className="hero-bottom">
          <span>{t.scroll}</span><span className="scroll-line" /><span>{t.index}</span>
        </div>
      </section>

      <section className="statement-section section-shell">
        <div className="statement-mark reveal">“</div>
        <div className="statement-content reveal">
          <h2>{t.statement.split('\n').map((line, i) => <span key={i}>{line}</span>)}</h2>
          <p>{t.statementSub}</p>
        </div>
        <div className="statement-side reveal"><span>THOUGHT / 001</span><span className="side-asterisk">✳</span></div>
      </section>

      <section id="skills" className="skills-section section-shell section-space">
        <div className="section-heading reveal">
          <div><p className="section-label"><span>01</span> / {t.skillsLabel}</p><h2>{t.skillsTitle.split('\n').map((line, i) => <span key={i}>{line}</span>)}</h2></div>
          <p className="heading-aside">{t.skillNote}</p>
        </div>
        <div className="skills-grid">
          {t.skills.map((skill, i) => {
            const Icon = icons[i]
            return <article className="skill-card reveal" key={skill[0]}>
              <div className="skill-card-top"><span>{skill[0]} — 0{i + 1}</span><Icon size={22} strokeWidth={1.4} /></div>
              <h3>{skill[1]}</h3><p>{skill[2]}</p>
              <div className="skill-tags">{skill[3].split(' · ').map(tag => <span key={tag}>{tag}</span>)}</div>
              <div className="card-arrow">{rtl ? <ArrowUpLeft size={18} /> : <ArrowUpRight size={18} />}</div>
            </article>
          })}
        </div>
      </section>

      <section id="projects" className="projects-section section-shell section-space">
        <div className="section-heading reveal">
          <div><p className="section-label"><span>02</span> / {t.projectsLabel}</p><h2>{t.projectsTitle.split('\n').map((line, i) => <span key={i}>{line}</span>)}</h2></div>
          <span className="project-count">SELECTED WORKS<br />2024 — 2026</span>
        </div>
        <div className="projects-list">
          {t.projects.map((project, i) => <article className={'project-row reveal project-' + i} key={project[0]} onClick={() => {}}>
            <div className="project-visual"><span className="project-monogram">{project[4]}</span><span className="project-orbit">✳</span><span className="project-number">{project[0]}</span></div>
            <div className="project-info"><span className="project-type">{project[3]}</span><h3>{project[1]}</h3><p>{project[2]}</p></div>
            <div className="project-link"><MoveUpRight size={22} /></div>
          </article>)}
        </div>
        <p className="projects-footnote">* {rtl ? 'نماذج ومشاريع مختارة — سيتم إضافة روابط العرض والتفاصيل لاحقًا.' : 'Selected concepts and projects — live links and case studies coming soon.'}</p>
      </section>

      <section id="about" className="about-section section-shell section-space">
        <div className="about-stamp reveal"><span>IBRAHIM</span><b>✳</b><span>ELKHOOLY</span><small>CREATIVE DEVELOPER</small></div>
        <div className="about-copy reveal">
          <p className="section-label"><span>03</span> / {t.aboutLabel}</p>
          <h2>{t.aboutTitle.split('\n').map((line, i) => <span key={i}>{line}</span>)}</h2>
          <p className="about-description">{t.aboutText}</p>
          <ul>{t.principles.map((p, i) => <li key={p}><span>0{i + 1}</span>{p}</li>)}</ul>
        </div>
      </section>

      <section id="contact" className="contact-section section-shell">
        <div className="contact-top reveal"><p className="section-label"><span>04</span> / {t.contactLabel}</p><span>LET’S MAKE<br />SOMETHING GOOD.</span></div>
        <h2 className="contact-title reveal">{t.contactTitle.split('\n').map((line, i) => <span key={i}>{line}</span>)}</h2>
        <div className="contact-bottom reveal"><p>{t.contactText}</p><a className="contact-email" href="mailto:hello@ibrahim.dev">{t.email} <span><MoveUpRight /></span></a></div>
        <div className="contact-decoration">✳</div>
      </section>

      <footer className="site-footer section-shell">
        <a className="wordmark" href="#home" onClick={(e) => { e.preventDefault(); goTo('home') }}><span className="wordmark-mark">I<span>.</span></span><span className="wordmark-name">IBRAHIM<span>ELKHOOLY</span></span></a>
        <p>© 2026 — {t.footer}</p>
        <div className="social-links"><a href="https://github.com/ibrhimdd" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a href="mailto:hello@ibrahim.dev" aria-label="Email"><Mail size={18} /></a><button onClick={() => goTo('home')} aria-label={t.top}><ArrowUp size={18} /></button></div>
      </footer>
    </main>
  )
}

export default App