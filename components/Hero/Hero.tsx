import styles from './Hero.module.css';

import { content, Locale } from '@/data/content';

export default function Hero({ lang }: { lang: Locale }) {
  const data = content[lang].hero;

  return (
    <section className={styles.gridRow}>
      <div className={`${styles.cell} col-span-1 md:col-span-3 p-8 md:p-16 lg:p-24 flex flex-col justify-center`}>
        <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted-text)] mb-6">{data.idx}</span>
        <h2 className="text-5xl md:text-[6vw] font-black tracking-tighter leading-[0.9]">
          {data.title1} <br/>
          <span className="font-light italic text-[var(--muted-text)]">{data.title2}</span> <br/>
          {data.title3}
        </h2>
      </div>
      
      <div className="col-span-1 flex flex-col">
        <div className={`${styles.cell} p-6 flex-1 flex flex-col justify-between`}>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted-text)]">{data.systemStatus}</span>
          <p className="text-xs font-medium leading-relaxed mt-8">{data.desc}</p>
        </div>
        <div className={`${styles.cell} p-6 flex-1 flex flex-col justify-between`}>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted-text)]">{data.coreStack}</span>
          <ul className="text-xs font-bold uppercase mt-8 space-y-1">
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
