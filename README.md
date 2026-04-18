# 🌤 SkyPulse — Weather App

A sleek, real-time weather application built with **React** and **Material UI**, powered by the OpenWeatherMap API. Features dynamic animated backgrounds, weather icons, and detailed stats — all in a beautiful glassmorphism UI.

![SkyPulse Preview](https://via.placeholder.com/800x450.png?text=SkyPulse+Weather+App)

## ✨ Features

- 🔍 Search weather for any city in the world
- 🌡️ Real-time temperature, feels like, min/max
- 💧 Humidity, wind speed, visibility & pressure stats
- 🎨 Dynamic animated SVG backgrounds that change with weather conditions
- ⛅ Animated weather icons (sun, rain, snow, thunder, fog, clouds)
- 🌙 Dark-themed glassmorphism design
- 📱 Fully responsive layout

## 🛠️ Tech Stack

- [React](https://react.dev/) — UI library
- [Material UI (MUI)](https://mui.com/) — Component library
- [Vite](https://vitejs.dev/) — Build tool
- [OpenWeatherMap API](https://openweathermap.org/api) — Weather data

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/SD1604/skypulse-weather-app.git
cd skypulse-weather-app

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root of your project:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
```

> Get a free API key at [openweathermap.org](https://openweathermap.org/api)

Then update `SearchBox.jsx` to use:

```js
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
src/
├── App.jsx               # Root component, MUI theme setup
├── App.css               # Global styles & font import
├── SearchBox.jsx         # Search input + API call logic
├── WeatherCard.jsx       # Main weather display card
├── WeatherIcon.jsx       # Animated SVG weather icons
├── WeatherBackground.jsx # Dynamic full-page SVG backgrounds
└── StatTile.jsx          # Reusable stat tile component
```

## 🌍 Live Demo

🔗 [skypulse-weather-app.vercel.app](https://skypulse-weather-app.vercel.app)

## 📄 License

MIT © [Sushant](https://github.com/SD1604)
