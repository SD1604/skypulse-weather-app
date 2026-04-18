import { Box } from "@mui/material";

function StarryNight() {
  const stars = Array.from({ length: 60 }, (_, i) => ({
    cx: Math.random() * 100,
    cy: Math.random() * 100,
    r: Math.random() * 1.5 + 0.5,
    delay: Math.random() * 3,
    dur: 2 + Math.random() * 2,
  }));
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      <defs>
        <radialGradient id="bg-grad" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#0f172a" />
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="url(#bg-grad)" />
      {stars.map((s, i) => (
        <circle
          key={i}
          cx={`${s.cx}%`}
          cy={`${s.cy}%`}
          r={s.r}
          fill="white"
          opacity="0.8"
        >
          <animate
            attributeName="opacity"
            values="0.2;1;0.2"
            dur={`${s.dur}s`}
            begin={`${s.delay}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  );
}

function RainyBg() {
  const drops = Array.from({ length: 30 }, (_, i) => ({
    x: Math.random() * 100,
    delay: Math.random() * 2,
    dur: 0.8 + Math.random() * 0.5,
  }));
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      <defs>
        <linearGradient id="rain-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#rain-bg)" />
      {drops.map((d, i) => (
        <line
          key={i}
          x1={`${d.x}%`}
          y1="-5"
          x2={`${d.x - 2}%`}
          y2="20"
          stroke="rgba(96,165,250,0.25)"
          strokeWidth="0.4"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0;0,110"
            dur={`${d.dur}s`}
            begin={`${d.delay}s`}
            repeatCount="indefinite"
          />
        </line>
      ))}
    </svg>
  );
}

function CloudyBg() {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      <defs>
        <linearGradient id="cloud-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#cloud-bg)" />
      {[
        { cx: 20, cy: 25, rx: 18, ry: 8, delay: 0 },
        { cx: 70, cy: 15, rx: 22, ry: 10, delay: "1s" },
        { cx: 50, cy: 40, rx: 28, ry: 11, delay: "2s" },
      ].map((c, i) => (
        <ellipse
          key={i}
          cx={`${c.cx}%`}
          cy={`${c.cy}%`}
          rx={`${c.rx}%`}
          ry={`${c.ry}%`}
          fill="rgba(148,163,184,0.07)"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="-5,0;5,0;-5,0"
            dur="8s"
            begin={c.delay}
            repeatCount="indefinite"
          />
        </ellipse>
      ))}
    </svg>
  );
}

function SunnyBg() {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      <defs>
        <radialGradient id="sun-bg" cx="60%" cy="20%" r="80%">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="60%" stopColor="#0f2340" />
          <stop offset="100%" stopColor="#0f172a" />
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="url(#sun-bg)" />
      <circle cx="80%" cy="15%" r="8%" fill="rgba(251,191,36,0.08)">
        <animate
          attributeName="r"
          values="8%;10%;8%"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

function SnowBg() {
  const flakes = Array.from({ length: 25 }, (_, i) => ({
    x: Math.random() * 100,
    size: 0.5 + Math.random() * 1,
    delay: Math.random() * 4,
    dur: 3 + Math.random() * 3,
  }));
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      <defs>
        <linearGradient id="snow-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#snow-bg)" />
      {flakes.map((f, i) => (
        <circle
          key={i}
          cx={`${f.x}%`}
          cy="-2"
          r={f.size}
          fill="rgba(186,230,253,0.7)"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0;0,110"
            dur={`${f.dur}s`}
            begin={`${f.delay}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  );
}

export default function WeatherBackground({ condition }) {
  let BgComponent = StarryNight;
  if (condition?.includes("rain") || condition?.includes("drizzle"))
    BgComponent = RainyBg;
  else if (condition?.includes("snow")) BgComponent = SnowBg;
  else if (condition?.includes("cloud")) BgComponent = CloudyBg;
  else if (condition?.includes("clear")) BgComponent = SunnyBg;
  else if (condition?.includes("thunder")) BgComponent = RainyBg;

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        background: "#0f172a",
      }}
    >
      <BgComponent />
    </Box>
  );
}
