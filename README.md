# React Native Weather App

This is a simple React Native application that fetches and displays weather information using the OpenWeatherMap API.

## Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/react_weather_app.git
   cd react_weather_app
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `config.ts` file in the `app` directory and add your OpenWeatherMap API key:

   ```typescript
   // filepath: /c:/Users/romik/OneDrive - khwopa.edu.np/Documents/romik/react_native/react_weather_app/app/config.ts
   export const API_KEY = "your_api_key_here";
   ```

4. Run the application:
   ```sh
   npm start
   ```

## Usage

The app fetches weather data for London and displays the temperature in Celsius. You can modify the city by changing the `fetchWeather` function in `app/index.tsx`.

## License

This project is licensed under the MIT License.
