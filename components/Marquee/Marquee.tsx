import styles from './Marquee.module.css';

import { content, Locale } from '@/data/content';

export default function Marquee({ lang }: { lang: Locale }) {
  const items = content[lang].marquee;
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div className={styles.cell}>
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          {repeatedItems.map((item, index) => (
            <div key={index} className="flex items-center gap-12 text-xs font-mono uppercase tracking-widest font-bold">
              <span>{item}</span>
              <span>+</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
