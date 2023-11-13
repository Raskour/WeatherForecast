import { useState, useEffect } from "react";

export default function SelectCity() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      const res = await fetch(
        "https://api.weatherapi.com/v1/forecast.json?key=eaf41e8c9c9a44eea7c114007231011&q=Sydney&days=5&aqi=no&alerts=no"
      );
      const data = await res.json();
      setWeather(data);
    }
    fetchWeather();
  }, []);

  console.log(weather);

  if (!weather) {
    return <p>Loading..</p>;
  }
  return (
    <div>
      <h1>Weather</h1>
      <h2>
        {weather.location.name}, {weather.location.region}
      </h2>
      <strong>{weather.current.temp_c} C</strong>

      <section>
        <h2>Forecasting</h2>
        <ul>
          {weather.forecast.forecastday.map((forecast) => (
            <li key={forecast.date}>
              {forecast.date} MAX {forecast.day.maxtemp_c}C MIN{" "}
              {forecast.day.mintemp_c}C
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
