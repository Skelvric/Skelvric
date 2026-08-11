import styles from './Approach.module.css';

import { content, Locale } from '@/data/content';

export default function Approach({ lang }: { lang: Locale }) {
  const data = content[lang].approach;

  return (
    <section className="w-full flex flex-col">
      <div className={`${styles.cell} p-3 bg-[var(--hover-bg)]`}>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-text)]">{data.idx}</span>
      </div>
      
      <div className={styles.gridRow}>
        <div className={`${styles.cell} col-span-1 md:col-span-3 p-8 md:p-16 flex items-center bg-[var(--bg-color)]`}>
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[1]">
            {data.title1} <br/> <span className="font-light italic text-[var(--muted-text)]">{data.title2}</span> <br/> {data.title3}
          </h3>
        </div>
        <div className={`${styles.cell} col-span-1 p-8 flex flex-col justify-center bg-[var(--hover-bg)]`}>
          <p className="text-sm font-bold uppercase leading-relaxed text-[var(--text-color)]">
            {data.desc}
          </p>
        </div>
      </div>
    </section>
  );
}
