import { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import SearchBox from "./SearchBox.jsx";
import WeatherCard from "./WeatherCard.jsx";
import WeatherBackground from "./Weatherbackground.jsx";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#60a5fa" },
    secondary: { main: "#f472b6" },
    background: { default: "#0f172a", paper: "rgba(255,255,255,0.05)" },
  },
  typography: {
    fontFamily: "'Outfit', 'Segoe UI', sans-serif",
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "14px",
            backdropFilter: "blur(10px)",
            background: "rgba(255,255,255,0.07)",
            "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
            "&:hover fieldset": { borderColor: "rgba(96,165,250,0.6)" },
            "&.Mui-focused fieldset": { borderColor: "#60a5fa" },
          },
          "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.5)" },
          "& .MuiInputBase-input": { color: "#fff" },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "14px",
          textTransform: "none",
          fontWeight: 600,
          fontSize: "1rem",
          padding: "12px 28px",
          background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
          boxShadow: "0 4px 24px rgba(59,130,246,0.4)",
          "&:hover": {
            background: "linear-gradient(135deg, #2563eb, #7c3aed)",
            boxShadow: "0 6px 28px rgba(59,130,246,0.6)",
            transform: "translateY(-1px)",
          },
          transition: "all 0.2s ease",
        },
      },
    },
  },
});

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WeatherBackground condition={weatherData?.condition} />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          py: 6,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Logo / Title */}
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Box
            component="span"
            sx={{
              fontSize: "3rem",
              display: "block",
              mb: 1,
              filter: "drop-shadow(0 0 16px rgba(96,165,250,0.6))",
            }}
          >
            🌤
          </Box>
          <Box
            sx={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: { xs: "2.2rem", md: "3rem" },
              fontWeight: 800,
              background: "linear-gradient(135deg, #60a5fa, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-1px",
            }}
          >
            SkyPulse
          </Box>
          <Box
            sx={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "0.95rem",
              mt: 0.5,
            }}
          >
            Real-time weather at your fingertips
          </Box>
        </Box>

        <SearchBox
          setWeatherData={setWeatherData}
          setError={setError}
          setLoading={setLoading}
          loading={loading}
        />

        {error && (
          <Box
            sx={{
              mt: 3,
              px: 3,
              py: 1.5,
              borderRadius: "12px",
              background: "rgba(239,68,68,0.15)",
              border: "1px solid rgba(239,68,68,0.3)",
              color: "#fca5a5",
              fontSize: "0.9rem",
            }}
          >
            ⚠️ {error}
          </Box>
        )}

        {weatherData && !error && <WeatherCard data={weatherData} />}
      </Box>
    </ThemeProvider>
  );
}
