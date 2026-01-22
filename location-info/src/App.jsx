import { useState } from "react";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const getWeather = async () => {
    if (!city) {
      setError("Please enter a city name");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`,
      );
      const data = await res.json();

      if (data.error) {
        setError(data.error.message);
        setWeather(null);
      } else {
        setWeather(data);
      }
    } catch {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-zinc-800 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl p-6 text-white">
        <h1 className="text-3xl font-semibold text-center mb-6">
          🌍 Location Info
        </h1>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 rounded-xl bg-black/40 px-4 py-2 outline-none focus:ring-2 focus:ring-lime-400"
          />
          <button
            onClick={getWeather}
            className="rounded-xl bg-lime-400 px-4 py-2 font-semibold text-black hover:bg-lime-300 active:scale-95 transition"
          >
            Search
          </button>
        </div>

        {loading && (
          <p className="text-center text-sm mt-4 text-zinc-300">
            Fetching weather...
          </p>
        )}

        {error && (
          <p className="text-center text-sm mt-4 text-red-400">{error}</p>
        )}

        {weather && (
          <div className="mt-6 text-center">
            <p className="text-lg font-medium">
              📍 {weather.location.name}, {weather.location.country}
            </p>

            <p className="text-6xl font-bold text-lime-400 mt-2">
              {weather.current.temp_c}°
            </p>

            <p className="text-sm text-zinc-300 mt-1">
              {weather.current.condition.text}
            </p>

            <img
              src={weather.current.condition.icon}
              alt="weather icon"
              className="mx-auto mt-3"
            />
          </div>
        )}
      </div>
    </div>
  );
}
