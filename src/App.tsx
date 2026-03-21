import './Portfolio.css'
import {
  education,
  experience,
  hardSkills,
  projects,
  softSkills,
  technicalSkills,
} from './portfolioData'
import type { ExperienceBlock } from './portfolioData'

const ASSET = {
  avatar: '/portfolio/pic.png',
} as const

const TECH_ICONS = {
  figma: 'layers',
  protopie: 'animation',
  code: 'code',
} as const

function MsIcon({ name }: { name: string }) {
  return (
    <span className="material-symbols-outlined resume__ms" aria-hidden>
      {name}
    </span>
  )
}

function SkillBar({ fill }: { fill: number }) {
  const pct = `${Math.round(fill * 100)}%`
  return (
    <div className="resume__skill-track" aria-hidden>
      <div className="resume__skill-fill" style={{ width: pct }} />
      <span className="resume__skill-knob" style={{ left: pct }} />
    </div>
  )
}

function JobDuties({ duties }: { duties: ExperienceBlock['duties'] }) {
  return (
    <>
      {duties.map((d, i) => {
        if (typeof d === 'string') {
          return (
            <p key={i} className="resume__job-text">
              {d}
            </p>
          )
        }
        return (
          <div key={i}>
            {d.parts.map((p, j) => (
              <p
                key={j}
                className={
                  j === 0 ? 'resume__job-text resume__job-text--pre' : 'resume__job-text'
                }
              >
                {p}
              </p>
            ))}
          </div>
        )
      })}
    </>
  )
}

export default function App() {
  return (
    <div className="resume" data-node-id="539:3472">
      <aside className="resume__sidebar" aria-label="Профиль">
        <img
          className="resume__avatar"
          src={ASSET.avatar}
          width={120}
          height={120}
          alt="Евгений Яковенко"
        />
        <h1 className="resume__name">Евгений Яковенко</h1>
        <p className="resume__role">Senior Product Designer</p>

        <h2 className="resume__sidebar-title resume__sidebar-title--contacts">Контакты</h2>
        <ul className="resume__contact-list">
          <li className="resume__contact-row">
            <MsIcon name="mail" />
            <a href="mailto:evgeniyakovenko84@gmail.com">evgeniyakovenko84@gmail.com</a>
          </li>
          <li className="resume__contact-row">
            <MsIcon name="call" />
            <span>+7 926 936 33 29</span>
          </li>
          <li className="resume__contact-row">
            <MsIcon name="location_on" />
            <span>Москва, Россия</span>
          </li>
        </ul>

        <h2 className="resume__sidebar-title resume__sidebar-title--portfolio">Портфолио</h2>
        <ul className="resume__contact-list">
          <li className="resume__contact-row">
            <MsIcon name="palette" />
            <a
              href="https://www.behance.net/jakovko84ba28"
              target="_blank"
              rel="noreferrer"
            >
              Behance
            </a>
          </li>
        </ul>

        <h2 className="resume__sidebar-title resume__sidebar-title--hard">Hard Skills</h2>
        <ul className="resume__hard-list">
          {hardSkills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <h2 className="resume__sidebar-title resume__sidebar-title--tech">Technical Skills</h2>
        <div className="resume__tech-list">
          {technicalSkills.map((row) => (
            <div key={row.name} className="resume__tech-row">
              <div className="resume__tech-label">
                <MsIcon name={TECH_ICONS[row.icon]} />
                <span className="resume__tech-name">{row.name}</span>
              </div>
              <SkillBar fill={row.fill} />
            </div>
          ))}
        </div>

        <h2 className="resume__sidebar-title resume__sidebar-title--interest">Interest</h2>
        <div className="resume__interest">
          <div className="resume__interest-item">
            <MsIcon name="music_note" />
            <p className="resume__interest-text">Play on drums</p>
          </div>
          <div className="resume__interest-item">
            <MsIcon name="headphones" />
            <p className="resume__interest-text">Listen to music</p>
          </div>
        </div>
      </aside>

      <main className="resume__main">
        <div className="resume__main-inner">
          <section className="resume__section--education" aria-labelledby="edu-heading">
            <h2 id="edu-heading" className="resume__section-title">
              Образование:
            </h2>
            <div className="resume__edu">
              {education.map((block) => (
                <div key={block.title} className="resume__edu-block">
                  <h3 className="resume__edu-title">{block.title}</h3>
                  {block.lines.map((line, idx) =>
                    line.href ? (
                      <a key={idx} className="resume__link" href={line.href}>
                        {line.text}
                      </a>
                    ) : (
                      <p key={idx} className="resume__body">
                        {line.text}
                      </p>
                    ),
                  )}
                </div>
              ))}
            </div>
          </section>

          <hr className="resume__rule" />

          <section className="resume__experience" aria-labelledby="work-heading">
            <h2 id="work-heading" className="resume__section-title">
              Опыт работы:
            </h2>
            {experience.map((job, index) => (
              <article key={job.period} className="resume__job">
                <div className="resume__job-header">
                  <p className="resume__job-period">{job.period}</p>
                  <p className="resume__job-company">{job.company}</p>
                </div>
                <div className="resume__job-role">
                  <h3 className="resume__subhead">Должность:</h3>
                  <p className="resume__job-text">{job.position}</p>
                </div>
                <div className="resume__job-duties">
                  <h3 className="resume__subhead">Обязанности:</h3>
                  <div className="resume__job-duties-body">
                    <JobDuties duties={job.duties} />
                  </div>
                </div>
                {index < experience.length - 1 ? <hr className="resume__rule" /> : null}
              </article>
            ))}
          </section>

          <hr className="resume__rule" />

          <section className="resume__projects" aria-labelledby="projects-heading">
            <h2 id="projects-heading" className="resume__section-title">
              Проекты:
            </h2>
            {projects.map((proj, index) => (
              <div key={proj.name}>
                <div className="resume__project">
                  <p className="resume__project-name">{proj.name}</p>
                  <div className="resume__project-links">
                    {proj.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
                {index < projects.length - 1 ? <hr className="resume__rule" /> : null}
              </div>
            ))}
          </section>

          <section className="resume__soft" aria-labelledby="soft-heading">
            <h2 id="soft-heading" className="resume__section-title">
              Soft Skills
            </h2>
            <ul className="resume__soft-list">
              {softSkills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  )
}
