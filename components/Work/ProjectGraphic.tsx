export default function ProjectGraphic({ index }: { index: number }) {
  return (
    <div className="w-full h-full flex items-center justify-center p-8 relative overflow-hidden bg-[#080808] border-b border-[var(--border-color)] group-hover:bg-[#0c0c0c] transition-all duration-500">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

      <svg
        className="w-full h-36 max-w-sm stroke-zinc-500 fill-none transition-all duration-700 group-hover:stroke-zinc-200 group-hover:scale-105"
        viewBox="0 0 400 180"
        xmlns="http://www.w3.org/2000/svg"
      >

        {index === 0 && (
          <>
            <path
              d="M0 90 Q 60 20, 120 90 T 240 90 T 360 90 T 400 90"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            <path
              d="M0 90 Q 60 160, 120 90 T 240 90 T 360 90 T 400 90"
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity="0.4"
            />

            <path
              d="M0 120 Q 100 40, 200 120 T 400 60"
              strokeWidth="1"
              opacity="0.25"
            />

            <circle
              cx="120"
              cy="90"
              r="3"
              fill="currentColor"
              className="text-zinc-400 group-hover:text-white transition-colors"
            />

            <circle
              cx="240"
              cy="90"
              r="3"
              fill="currentColor"
              className="text-zinc-400 group-hover:text-white transition-colors"
            />
          </>
        )}

        {index === 1 && (
          <>
            <circle
              cx="200"
              cy="90"
              r="50"
              strokeWidth="1"
              strokeDasharray="3 3"
              opacity="0.3"
            />

            <circle
              cx="200"
              cy="90"
              r="25"
              strokeWidth="1.5"
            />

            <path
              d="M120 90 H175"
              strokeWidth="1.5"
            />

            <path
              d="M225 90 H280"
              strokeWidth="1.5"
            />

            <path
              d="M200 35 V65"
              strokeWidth="1.5"
            />

            <path
              d="M200 115 V145"
              strokeWidth="1.5"
            />

            <rect
              x="194"
              y="84"
              width="12"
              height="12"
              strokeWidth="1.5"
              fill="#080808"
            />

            <circle
              cx="120"
              cy="90"
              r="2"
              fill="currentColor"
            />

            <circle
              cx="280"
              cy="90"
              r="2"
              fill="currentColor"
            />

            <circle
              cx="200"
              cy="35"
              r="2"
              fill="currentColor"
            />

            <circle
              cx="200"
              cy="145"
              r="2"
              fill="currentColor"
            />
          </>
        )}

        {index === 2 && (
          <>
            <path
              d="M80 45 H135 V70 H185 V45 H245 V70 H320"
              strokeWidth="1.2"
            />

            <path
              d="M80 45 V105 H110 V135 H170 V105 H220 V135 H275"
              strokeWidth="1.2"
            />

            <path
              d="M110 70 V45"
              strokeWidth="1"
              opacity="0.35"
            />

            <path
              d="M135 70 V120 H160"
              strokeWidth="1"
              opacity="0.35"
            />

            <path
              d="M185 45 V90 H230"
              strokeWidth="1"
              opacity="0.35"
            />

            <path
              d="M245 70 V120 H295 V90"
              strokeWidth="1"
              opacity="0.35"
            />

            <path
              d="M275 135 H320 V105"
              strokeWidth="1.2"
            />

            <path
              d="M82 105 H108 V135 H158 V105 H218 V135 H273 V90 H318"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeDasharray="6 6"
              className="group-hover:stroke-zinc-200 transition-all duration-700"
            />

            <rect
              x="74"
              y="97"
              width="16"
              height="16"
              strokeWidth="1"
              fill="#080808"
            />

            <rect
              x="79"
              y="102"
              width="6"
              height="6"
              fill="currentColor"
              className="text-zinc-400 group-hover:text-white transition-colors"
            />

            <rect
              x="310"
              y="82"
              width="16"
              height="16"
              strokeWidth="1"
              fill="#080808"
            />

            <path
              d="M315 87 L321 93 M321 87 L315 93"
              strokeWidth="1"
            />

            <rect
              x="112"
              y="57"
              width="5"
              height="5"
              fill="currentColor"
              opacity="0.25"
            />

            <rect
              x="212"
              y="112"
              width="5"
              height="5"
              fill="currentColor"
              opacity="0.2"
            />

            <rect
              x="286"
              y="62"
              width="5"
              height="5"
              fill="currentColor"
              opacity="0.15"
            />
          </>
        )}

        {index > 2 && (
          <>
            <circle
              cx="200"
              cy="90"
              r="42"
              strokeWidth="1"
              strokeDasharray="3 4"
              opacity="0.25"
            />

            <circle
              cx="200"
              cy="90"
              r="18"
              strokeWidth="1.5"
            />

            <path
              d="M125 90 H182"
              strokeWidth="1"
            />

            <path
              d="M218 90 H275"
              strokeWidth="1"
            />

            <circle
              cx="125"
              cy="90"
              r="2"
              fill="currentColor"
            />

            <circle
              cx="275"
              cy="90"
              r="2"
              fill="currentColor"
            />

            <circle
              cx="200"
              cy="90"
              r="3"
              fill="currentColor"
              className="text-zinc-400 group-hover:text-white transition-colors"
            />
          </>
        )}
      </svg>
    </div>
  );
}
