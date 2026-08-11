import styles from './Process.module.css';

import { content, Locale } from '@/data/content';

export default function Process({ lang }: { lang: Locale }) {
  const data = content[lang].process;

  return (
    <section className="w-full flex flex-col">
      <div className={`${styles.cell} p-3 bg-[var(--hover-bg)] pointer-events-none`}>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-text)]">{data.idx}</span>
      </div>
      
      <div className={styles.gridRow}>
        {data.steps.map((step, i) => (
          <div key={i} className={`${styles.cell} p-8 md:p-10 flex flex-col`}>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted-text)] border-b border-[var(--border-color)] pb-2 mb-6 block">
              {step.num}
            </span>
            <h4 className="text-xl font-black uppercase mb-3">{step.title}</h4>
            <p className="text-xs font-medium text-[var(--muted-text)]">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
