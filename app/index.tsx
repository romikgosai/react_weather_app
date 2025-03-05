import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator, StyleSheet, Button } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { API_KEY } from "./config";

export default function Index() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("Bhaktapur");

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const fetchWeather = async (city) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
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

  const handleCityChange = (selectedCity) => {
    setCity(selectedCity);
    fetchWeather(selectedCity);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={city}
        style={styles.picker}
        onValueChange={(itemValue) => handleCityChange(itemValue)}
      >
        <Picker.Item label="Bhaktapur" value="Bhaktapur" />
        <Picker.Item label="Kathmandu" value="Kathmandu" />
        <Picker.Item label="Lalitpur" value="Lalitpur" />
        <Picker.Item label="Pokhara" value="Pokhara" />
        <Picker.Item label="Biratnagar" value="Biratnagar" />
      </Picker>
      {error ? (
        <Text style={styles.errorText}>Error: {error}</Text>
      ) : weather ? (
        <View style={styles.weatherContainer}>
          <Text style={styles.cityText}>{weather.name}</Text>
          <Text style={styles.tempText}>
            Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C
          </Text>
        </View>
      ) : (
        <Text style={styles.errorText}>Failed to load weather data.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  weatherContainer: {
    alignItems: "center",
    height: 200,
    justifyContent: "center",
  },
  cityText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  tempText: {
    fontSize: 18,
    marginTop: 10,
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  picker: {
    height: 80,
    width: "100%",
    marginBottom: 20,
  },
});
