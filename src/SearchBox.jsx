import { useState } from "react";
import { TextField, Button, Box, CircularProgress } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "8cde12387854c001f59a1d4ca5d2e7b4";

export default function SearchBox({
  setWeatherData,
  setError,
  setLoading,
  loading,
}) {
  const [city, setCity] = useState("");

  const getWeatherInfo = async (cityName) => {
    try {
      const response = await fetch(
        `${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`,
      );
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();

      const condition = data.weather[0].main.toLowerCase();
      return {
        city: data.name,
        country: data.sys.country,
        temp: Math.round(data.main.temp),
        temp_min: Math.round(data.main.temp_min),
        temp_max: Math.round(data.main.temp_max),
        humidity: data.main.humidity,
        feels_like: Math.round(data.main.feels_like),
        weather: data.weather[0].description,
        condition,
        wind: data.wind.speed,
        visibility: data.visibility / 1000,
        pressure: data.main.pressure,
        icon: data.weather[0].icon,
      };
    } catch (err) {
      throw err;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    setLoading(true);
    setError("");
    setWeatherData(null);
    try {
      const info = await getWeatherInfo(city.trim());
      setWeatherData(info);
    } catch {
      setError("City not found. Please check the name and try again.");
    } finally {
      setLoading(false);
      setCity("");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 1.5,
        width: "100%",
        maxWidth: 520,
        alignItems: "center",
      }}
    >
      <TextField
        fullWidth
        label="Search city..."
        variant="outlined"
        required
        value={city}
        onChange={(e) => setCity(e.target.value)}
        disabled={loading}
        InputProps={{
          startAdornment: (
            <SearchIcon sx={{ color: "rgba(255,255,255,0.3)", mr: 1 }} />
          ),
        }}
      />
      <Button
        variant="contained"
        type="submit"
        disabled={loading}
        sx={{ minWidth: 110, height: 56 }}
      >
        {loading ? (
          <CircularProgress size={22} sx={{ color: "#fff" }} />
        ) : (
          "Search"
        )}
      </Button>
    </Box>
  );
}
