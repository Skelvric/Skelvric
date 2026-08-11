import styles from './Navbar.module.css';

import { content, Locale } from '@/data/content';

interface NavbarProps {
  lang: Locale;
  toggleLang: () => void;
  toggleTheme: () => void;
  theme: string;
}

export default function Navbar({ lang, toggleLang, toggleTheme, theme }: NavbarProps) {
  const data = content[lang].nav;

  return (
    <nav className={styles.gridRow}>
      <div className={`${styles.cell} p-6 flex items-center justify-between`}>
        <h1 className="text-2xl font-black uppercase tracking-tighter">{data.title}</h1>
        <span className="text-[10px] font-mono uppercase tracking-widest hidden md:block text-[var(--muted-text)]">{data.est}</span>
      </div>
      
      <div className={`${styles.cell} p-6 flex items-center justify-between`}>
        <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-[var(--muted-text)] mb-1">{data.founder}</span>
            <span className="text-xs font-bold uppercase">{data.founderName}</span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted-text)] mt-1">{data.role}</span>
        </div>
      </div>
      
      <div className={`${styles.cell} p-6 flex items-center justify-between`}>
        <button onClick={toggleTheme} className="text-xs font-mono uppercase font-bold hover:italic">
          [ {theme.toUpperCase()} ]
        </button>
        <button onClick={toggleLang} className="text-xs font-mono uppercase font-bold hover:italic">
          [ {lang.toUpperCase()} ]
        </button>
      </div>
      
      <a href="#CTA" className={`${styles.cell} ${styles.btn} p-6 flex items-center justify-center`}>
        <span className="text-xs uppercase font-bold tracking-widest">{data.btn}</span>
      </a>
    </nav>
  );
}
