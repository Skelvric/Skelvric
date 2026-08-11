import styles from './Clients.module.css';

import { content, Locale } from '@/data/content';

export default function Clients({ lang }: { lang: Locale }) {
  const data = content[lang].clients;

  return (
    <section className="w-full flex flex-col">
      <div className={`${styles.cell} p-3 bg-[var(--hover-bg)] pointer-events-none`}>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-text)]">{data.idx}</span>
      </div>
      
      <div className={styles.gridRow}>
        {data.sectors.map((sector, i) => (
          <div key={i} className={`${styles.cell} p-12 md:p-16 flex items-center justify-center cursor-default`}>
            <span className="text-xl md:text-3xl font-black uppercase tracking-tighter">{sector}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
