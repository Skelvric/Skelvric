import styles from './Work.module.css';

import { content, Locale } from '@/data/content';

import ProjectGraphic from './ProjectGraphic';

export default function Work({ lang }: { lang: Locale }) {
  const data = content[lang].work;

  return (
    <section id="Work" className="w-full flex flex-col">
      <div className={`${styles.cell} p-3 bg-[var(--hover-bg)]`}>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-text)]">{data.idx}</span>
      </div>

      <div className={styles.gridRow}>
        <div className={`${styles.cell} col-span-1 md:col-span-2 p-8 md:p-16 flex flex-col justify-center`}>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none">
            {data.title1} <span className="font-light italic text-[var(--muted-text)]">{data.title2}</span> {data.title3}
          </h3>
        </div>
        <div className={`${styles.cell} col-span-1 p-8 flex items-end pb-8`}>
          <p className="text-xs font-medium leading-relaxed">{data.desc}</p>
        </div>
        <div className={`${styles.cell} col-span-1 p-8 bg-[var(--hover-bg)] hidden md:flex flex-col justify-between font-mono text-[10px]`}>
          <span className="opacity-40 uppercase">[ SYS_ARCH // 2026 ]</span>
          <div className="flex flex-col gap-1">
            <span className="font-bold uppercase">SECURE_CORE</span>
            <span className="text-[var(--muted-text)]">EDGE_DEPLOYED</span>
          </div>
        </div>
      </div>

      <div className={styles.gridRow}>
        {data.projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.cell} col-span-1 md:col-span-2 ${styles.projectCard} group block`}
          >
            <div className={styles.imageWrapper}>
              <span className="absolute top-4 left-4 z-10 bg-[var(--bg-color)] text-[var(--text-color)] px-2 py-1 text-[10px] uppercase font-mono font-bold border border-[var(--border-color)]">
                {project.tag}
              </span>
              <ProjectGraphic index={index} />
            </div>

            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              <h3 className="text-2xl font-black uppercase tracking-tight mb-2">{project.title}</h3>
              <p className="text-sm font-medium text-[var(--muted-text)]">{project.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
