export type WeatherResponse = {
  current_weather: {
    temperature: number
    windspeed: number
    winddirection: number
    weathercode: number
    is_day: number
    time: string
  }
};
