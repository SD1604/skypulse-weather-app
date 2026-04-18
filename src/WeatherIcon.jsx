import { Box } from "@mui/material";

const SunSVG = () => (
  <svg viewBox="0 0 120 120" width="110" height="110">
    <style>{`
      .sun-core { animation: sun-pulse 3s ease-in-out infinite; transform-origin: 60px 60px; }
      .sun-ray { animation: sun-rotate 8s linear infinite; transform-origin: 60px 60px; }
      @keyframes sun-pulse { 0%,100%{r:22} 50%{r:25} }
      @keyframes sun-rotate { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
    `}</style>
    <g className="sun-ray">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <line
          key={i}
          x1={60 + 32 * Math.cos((angle * Math.PI) / 180)}
          y1={60 + 32 * Math.sin((angle * Math.PI) / 180)}
          x2={60 + 44 * Math.cos((angle * Math.PI) / 180)}
          y2={60 + 44 * Math.sin((angle * Math.PI) / 180)}
          stroke="#fbbf24"
          strokeWidth="4"
          strokeLinecap="round"
        />
      ))}
    </g>
    <circle className="sun-core" cx="60" cy="60" r="22" fill="#fbbf24" />
    <circle cx="60" cy="60" r="16" fill="#fde68a" />
  </svg>
);

const CloudSVG = () => (
  <svg viewBox="0 0 120 90" width="120" height="90">
    <style>{`.cloud-drift { animation: drift 4s ease-in-out infinite; } @keyframes drift { 0%,100%{transform:translateX(0)} 50%{transform:translateX(6px)} }`}</style>
    <g className="cloud-drift">
      <ellipse cx="75" cy="52" rx="35" ry="26" fill="rgba(148,163,184,0.9)" />
      <circle cx="55" cy="50" r="22" fill="rgba(148,163,184,0.9)" />
      <circle cx="80" cy="44" r="18" fill="rgba(148,163,184,0.9)" />
      <rect
        x="28"
        y="52"
        width="82"
        height="22"
        rx="11"
        fill="rgba(148,163,184,0.9)"
      />
    </g>
  </svg>
);

const RainSVG = () => (
  <svg viewBox="0 0 120 110" width="120" height="110">
    <style>{`
      .cloud-r { animation: drift-r 4s ease-in-out infinite; } @keyframes drift-r { 0%,100%{transform:translateX(0)} 50%{transform:translateX(4px)} }
      .drop1 { animation: fall 1.2s linear infinite; } .drop2 { animation: fall 1.2s linear infinite 0.3s; } .drop3 { animation: fall 1.2s linear infinite 0.6s; } .drop4 { animation: fall 1.2s linear infinite 0.9s; }
      @keyframes fall { 0%{opacity:0;transform:translateY(0)} 20%{opacity:1} 80%{opacity:1} 100%{opacity:0;transform:translateY(30px)} }
    `}</style>
    <g className="cloud-r">
      <ellipse cx="75" cy="45" rx="32" ry="23" fill="rgba(100,116,139,0.9)" />
      <circle cx="55" cy="43" r="20" fill="rgba(100,116,139,0.9)" />
      <circle cx="78" cy="37" r="16" fill="rgba(100,116,139,0.9)" />
      <rect
        x="28"
        y="44"
        width="78"
        height="20"
        rx="10"
        fill="rgba(100,116,139,0.9)"
      />
    </g>
    <line
      className="drop1"
      x1="45"
      y1="72"
      x2="40"
      y2="90"
      stroke="#60a5fa"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <line
      className="drop2"
      x1="62"
      y1="72"
      x2="57"
      y2="90"
      stroke="#60a5fa"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <line
      className="drop3"
      x1="79"
      y1="72"
      x2="74"
      y2="90"
      stroke="#60a5fa"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <line
      className="drop4"
      x1="96"
      y1="72"
      x2="91"
      y2="90"
      stroke="#60a5fa"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const SnowSVG = () => (
  <svg viewBox="0 0 120 110" width="120" height="110">
    <style>{`
      .cloud-s { animation: drift-s 4s ease-in-out infinite; } @keyframes drift-s { 0%,100%{transform:translateX(0)} 50%{transform:translateX(4px)} }
      .flake1 { animation: snowfall 2s ease-in infinite; } .flake2 { animation: snowfall 2s ease-in infinite 0.5s; } .flake3 { animation: snowfall 2s ease-in infinite 1s; } .flake4 { animation: snowfall 2s ease-in infinite 1.5s; }
      @keyframes snowfall { 0%{opacity:0;transform:translateY(0) rotate(0deg)} 30%{opacity:1} 80%{opacity:1} 100%{opacity:0;transform:translateY(32px) rotate(180deg)} }
    `}</style>
    <g className="cloud-s">
      <ellipse cx="75" cy="42" rx="32" ry="23" fill="rgba(148,163,184,0.9)" />
      <circle cx="55" cy="40" r="20" fill="rgba(148,163,184,0.9)" />
      <circle cx="78" cy="34" r="16" fill="rgba(148,163,184,0.9)" />
      <rect
        x="28"
        y="42"
        width="78"
        height="20"
        rx="10"
        fill="rgba(148,163,184,0.9)"
      />
    </g>
    {[
      [45, 70],
      [62, 72],
      [79, 70],
      [96, 72],
    ].map(([x, y], i) => (
      <text
        key={i}
        className={`flake${i + 1}`}
        x={x}
        y={y}
        fontSize="18"
        fill="#bae6fd"
        textAnchor="middle"
      >
        ❄
      </text>
    ))}
  </svg>
);

const ThunderSVG = () => (
  <svg viewBox="0 0 120 110" width="120" height="110">
    <style>{`
      .cloud-t { animation: drift-t 4s ease-in-out infinite; } @keyframes drift-t { 0%,100%{transform:translateX(0)} 50%{transform:translateX(4px)} }
      .bolt { animation: flash 1.5s ease-in-out infinite; } @keyframes flash { 0%,100%{opacity:1;filter:drop-shadow(0 0 8px #fbbf24)} 50%{opacity:0.4;filter:drop-shadow(0 0 2px #fbbf24)} }
    `}</style>
    <g className="cloud-t">
      <ellipse cx="75" cy="42" rx="32" ry="23" fill="rgba(71,85,105,0.95)" />
      <circle cx="55" cy="40" r="20" fill="rgba(71,85,105,0.95)" />
      <circle cx="78" cy="34" r="16" fill="rgba(71,85,105,0.95)" />
      <rect
        x="28"
        y="42"
        width="78"
        height="20"
        rx="10"
        fill="rgba(71,85,105,0.95)"
      />
    </g>
    <polygon
      className="bolt"
      points="68,65 58,85 64,85 52,105 74,78 66,78"
      fill="#fbbf24"
    />
  </svg>
);

const FogSVG = () => (
  <svg viewBox="0 0 120 90" width="120" height="90">
    <style>{`
      .fog-line { animation: fog-drift 3s ease-in-out infinite; } @keyframes fog-drift { 0%,100%{transform:translateX(0);opacity:0.6} 50%{transform:translateX(8px);opacity:1} }
    `}</style>
    {[20, 35, 50, 65].map((y, i) => (
      <line
        key={i}
        className="fog-line"
        x1="15"
        y1={y}
        x2="105"
        y2={y}
        stroke="rgba(148,163,184,0.7)"
        strokeWidth="7"
        strokeLinecap="round"
        style={{ animationDelay: `${i * 0.3}s` }}
      />
    ))}
  </svg>
);

export default function WeatherIcon({ condition, icon }) {
  let IconComponent = CloudSVG;

  if (condition?.includes("clear")) IconComponent = SunSVG;
  else if (condition?.includes("rain") || condition?.includes("drizzle"))
    IconComponent = RainSVG;
  else if (condition?.includes("snow")) IconComponent = SnowSVG;
  else if (condition?.includes("thunder")) IconComponent = ThunderSVG;
  else if (
    condition?.includes("fog") ||
    condition?.includes("mist") ||
    condition?.includes("haze")
  )
    IconComponent = FogSVG;
  else if (condition?.includes("cloud")) IconComponent = CloudSVG;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: 1,
      }}
    >
      <IconComponent />
    </Box>
  );
}
