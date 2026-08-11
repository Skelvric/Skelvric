export default function ProjectGraphic({ index }: { index: number }) {
  return (
    <div className="w-full h-full flex items-center justify-center p-8 relative overflow-hidden bg-[#080808] border-b border-[var(--border-color)] group-hover:bg-[#0c0c0c] transition-all duration-500">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

      <svg
        className="w-full h-36 max-w-sm stroke-zinc-500 fill-none transition-all duration-700 group-hover:stroke-zinc-200 group-hover:scale-105"
        viewBox="0 0 400 180"
        xmlns="http://www.w3.org/2000/svg"
      >
        {index === 0 ? (
          <>
            <path d="M0 90 Q 60 20, 120 90 T 240 90 T 360 90 T 400 90" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M0 90 Q 60 160, 120 90 T 240 90 T 360 90 T 400 90" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
            <path d="M0 120 Q 100 40, 200 120 T 400 60" strokeWidth="1" opacity="0.25" />
            <circle cx="120" cy="90" r="3" fill="currentColor" className="text-zinc-400 group-hover:text-white transition-colors" />
            <circle cx="240" cy="90" r="3" fill="currentColor" className="text-zinc-400 group-hover:text-white transition-colors" />
          </>
        ) : (
          <>
            <circle cx="200" cy="90" r="50" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
            <circle cx="200" cy="90" r="25" strokeWidth="1.5" />
            <path d="M120 90 H 175" strokeWidth="1.5" />
            <path d="M225 90 H 280" strokeWidth="1.5" />
            <path d="M200 35 V 65" strokeWidth="1.5" />
            <path d="M200 115 V 145" strokeWidth="1.5" />
            <rect x="194" y="84" width="12" height="12" strokeWidth="1.5" fill="#080808" />
            <circle cx="120" cy="90" r="2" fill="currentColor" />
            <circle cx="280" cy="90" r="2" fill="currentColor" />
            <circle cx="200" cy="35" r="2" fill="currentColor" />
            <circle cx="200" cy="145" r="2" fill="currentColor" />
          </>
        )}
      </svg>
    </div>
  );
}
