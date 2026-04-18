import { Box, Grid, Divider } from "@mui/material";
import WeatherIcon from "./WeatherIcon.jsx";
import StatTile from "./StatTile.jsx";

// MUI SVG icons as inline SVG for stat tiles
const WindSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
    <path
      d="M9.59 4.59A2 2 0 1 1 11 8H2"
      stroke="#60a5fa"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12.59 19.41A2 2 0 1 0 14 16H2"
      stroke="#60a5fa"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M6.08 12H2"
      stroke="#60a5fa"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M19.91 12a2 2 0 1 1-2-2H22"
      stroke="#60a5fa"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
const HumiditySVG = () => (
  <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
    <path
      d="M12 2C8.5 7.5 5 11.5 5 15a7 7 0 0 0 14 0c0-3.5-3.5-7.5-7-13z"
      stroke="#60a5fa"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);
const FeelsSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
    <circle cx="12" cy="12" r="5" stroke="#c084fc" strokeWidth="2" />
    <path
      d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
      stroke="#c084fc"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
const VisibilitySVG = () => (
  <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
    <path
      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
      stroke="#34d399"
      strokeWidth="2"
    />
    <circle cx="12" cy="12" r="3" stroke="#34d399" strokeWidth="2" />
  </svg>
);
const PressureSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
    <circle cx="12" cy="12" r="9" stroke="#fb923c" strokeWidth="2" />
    <path
      d="M12 7v5l3 3"
      stroke="#fb923c"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function getConditionLabel(condition) {
  if (!condition) return "";
  if (condition.includes("clear")) return "Clear Sky";
  if (condition.includes("cloud")) return "Cloudy";
  if (condition.includes("rain") || condition.includes("drizzle"))
    return "Rainy";
  if (condition.includes("snow")) return "Snowy";
  if (condition.includes("thunder")) return "Stormy";
  if (condition.includes("fog") || condition.includes("mist")) return "Foggy";
  return condition;
}

export default function WeatherCard({ data }) {
  return (
    <Box
      sx={{
        mt: 4,
        width: "100%",
        maxWidth: 520,
        borderRadius: "28px",
        overflow: "hidden",
        backdropFilter: "blur(24px)",
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
        animation: "fadeSlideUp 0.5s ease",
        "@keyframes fadeSlideUp": {
          from: { opacity: 0, transform: "translateY(24px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      {/* Top Section */}
      <Box
        sx={{
          px: 4,
          pt: 4,
          pb: 3,
          background:
            "linear-gradient(160deg, rgba(59,130,246,0.2) 0%, rgba(139,92,246,0.15) 100%)",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* City */}
        <Box
          sx={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "0.85rem",
            mb: 0.5,
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          📍 {data.city}, {data.country}
        </Box>

        {/* Weather Icon */}
        <Box sx={{ my: 1 }}>
          <WeatherIcon condition={data.condition} icon={data.icon} />
        </Box>

        {/* Temp */}
        <Box
          sx={{
            fontSize: { xs: "5rem", md: "6.5rem" },
            fontWeight: 800,
            lineHeight: 1,
            background: "linear-gradient(135deg, #ffffff, #93c5fd)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-4px",
          }}
        >
          {data.temp}°
        </Box>

        {/* Description */}
        <Box
          sx={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "1.1rem",
            textTransform: "capitalize",
            mt: 0.5,
          }}
        >
          {data.weather}
        </Box>

        {/* Min / Max */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Box component="span" sx={{ color: "#60a5fa", fontSize: "0.8rem" }}>
              ↑
            </Box>
            <Box
              sx={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "0.9rem",
                fontWeight: 600,
              }}
            >
              {data.temp_max}°
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Box component="span" sx={{ color: "#818cf8", fontSize: "0.8rem" }}>
              ↓
            </Box>
            <Box
              sx={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "0.9rem",
                fontWeight: 600,
              }}
            >
              {data.temp_min}°
            </Box>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

      {/* Stats Grid */}
      <Box sx={{ px: 3, py: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <StatTile
              icon={<HumiditySVG />}
              label="Humidity"
              value={`${data.humidity}%`}
            />
          </Grid>
          <Grid item xs={6}>
            <StatTile
              icon={<WindSVG />}
              label="Wind"
              value={`${data.wind} m/s`}
            />
          </Grid>
          <Grid item xs={6}>
            <StatTile
              icon={<FeelsSVG />}
              label="Feels Like"
              value={`${data.feels_like}°C`}
            />
          </Grid>
          <Grid item xs={6}>
            <StatTile
              icon={<VisibilitySVG />}
              label="Visibility"
              value={`${data.visibility} km`}
            />
          </Grid>
          <Grid item xs={12}>
            <StatTile
              icon={<PressureSVG />}
              label="Pressure"
              value={`${data.pressure} hPa`}
              wide
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
