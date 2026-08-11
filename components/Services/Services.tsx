import styles from './Services.module.css';

import { content, Locale } from '@/data/content';

export default function Services({ lang }: { lang: Locale }) {
  const data = content[lang].services;
  const sData = [
    { num: data.s1_num, title: data.s1_title, desc: data.s1_desc },
    { num: data.s2_num, title: data.s2_title, desc: data.s2_desc },
    { num: data.s3_num, title: data.s3_title, desc: data.s3_desc },
    { num: data.s4_num, title: data.s4_title, desc: data.s4_desc, isDark: true },
  ];

  return (
    <section id="Services" className="w-full flex flex-col">
      <div className={`${styles.cell} p-3 bg-[var(--hover-bg)]`}>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-text)]">{data.idx}</span>
      </div>
      
      <div className={styles.gridRow}>
        {sData.map((s, i) => (
          <div key={i} className={`${styles.cell} col-span-1 md:col-span-2 lg:col-span-1 ${styles.serviceCard}`} 
               style={s.isDark ? { backgroundColor: 'var(--hover-bg)', color: 'var(--text-color)' } : {}}>
            <span className={styles.cardNumber}>{s.num}</span>
            <div>
              <h4 className="text-lg font-bold mb-2 uppercase">{s.title}</h4>
              <p className="text-xs opacity-80 leading-relaxed font-medium">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
