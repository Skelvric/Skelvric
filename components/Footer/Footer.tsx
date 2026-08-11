import styles from './Footer.module.css';

import { content, Locale } from '@/data/content';

export default function Footer({ lang }: { lang: Locale }) {
  const data = content[lang].footer;

  return (
    <footer className={styles.gridRow}>
      <div className={`${styles.cell} col-span-1 md:col-span-2 p-10 md:p-16 flex flex-col justify-between`}>
        <div>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Skelvric.</h3>
          <p className="text-sm font-medium opacity-70 max-w-sm">{data.desc}</p>
        </div>
        <p className="text-[10px] font-mono uppercase opacity-50 mt-16">{data.rights}</p>
      </div>

      <div className={`${styles.cell} col-span-1 p-10 md:p-16 flex flex-col`}>
        <span className="text-[10px] font-mono uppercase tracking-widest opacity-50 mb-8 block">{data.navTitle}</span>
        <nav className="flex flex-col gap-4">
          <a href="#Services" className="text-sm font-bold uppercase hover:italic transition-colors">{data.navServices}</a>
          <a href="#Work" className="text-sm font-bold uppercase hover:italic transition-colors">{data.navWork}</a>
          <a href="#CTA" className="text-sm font-bold uppercase hover:italic transition-colors">{data.navContact}</a>
        </nav>
      </div>

      <div className={`${styles.cell} col-span-1 p-10 md:p-16 flex flex-col`}>
        <span className="text-[10px] font-mono uppercase tracking-widest opacity-50 mb-8 block">{data.locTitle}</span>
        <div className="text-sm font-bold uppercase mb-6">{data.loc}</div>

        <div className="flex flex-col gap-2 mb-8">
          <a href="https://github.skelvric.com" target="_blank" rel="noopener noreferrer" className="text-xs font-mono font-bold hover:italic transition-colors">
            GITHUB ↗
          </a>
          <a href="https://linkedin.skelvric.com" target="_blank" rel="noopener noreferrer" className="text-xs font-mono font-bold hover:italic transition-colors">
            LINKEDIN ↗
          </a>
        </div>

        <a href="https://www.skelvric.com" className="text-sm font-bold uppercase hover:italic transition-colors mb-2">www.skelvric.com</a>
        <a href="mailto:hello@skelvric.com" className="text-sm font-bold uppercase hover:italic transition-colors">hello@skelvric.com</a>
      </div>
    </footer>
  );
}
