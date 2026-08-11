import styles from './CTA.module.css';

import { content, Locale } from '@/data/content';

export default function CTA({ lang }: { lang: Locale }) {
  const data = content[lang].cta;

  return (
    <section id="CTA" className="w-full flex flex-col">
      <div className={`${styles.cell} p-3 bg-[var(--hover-bg)] pointer-events-none`}>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-text)]">{data.idx}</span>
      </div>
      
      <div className={styles.gridRow}>
        <div className={`${styles.cell} col-span-1 md:col-span-3 p-12 md:p-24 lg:p-32 flex flex-col justify-center`}>
          <h2 className="text-5xl md:text-[6vw] font-black tracking-tighter leading-[0.9]">
            {data.title1} <br/> <span className="font-light italic text-[var(--muted-text)]">{data.title2}</span> <br/> {data.title3}
          </h2>
        </div>
        
        <div className="col-span-1 flex flex-col">
          <a href={`mailto:${data.email}`} className={`${styles.cell} flex-1 p-8 flex items-center justify-center ${styles.btn} group`}>
            <span className="text-sm font-bold uppercase tracking-widest group-hover:italic">{data.email}</span>
          </a>
          <div className={`${styles.cell} flex-1 p-8 flex items-center justify-center bg-[var(--hover-bg)]`}>
            <span className="text-xs font-mono uppercase text-center text-[var(--muted-text)]">{data.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
