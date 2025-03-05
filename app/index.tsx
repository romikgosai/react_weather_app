import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { API_KEY } from "./config";

export default function Index() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <Text>Error: {error}</Text>
      ) : weather ? (
        <Text>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</Text>
      ) : (
        <Text>Failed to load weather data.</Text>
      )}
    </View>
  );
}
