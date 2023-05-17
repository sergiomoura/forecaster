export const WeatherDictionary: Record<number, string> = {
  0: 'Céu limpo',
  1: 'Céu limpo',
  2: 'Parcialmente nublado',
  3: 'Nublado',
  45: 'Enevoado',
  48: 'Enevoado com geada',
  51: 'Garoa fraca',
  53: 'Garoa moderada',
  55: 'Garoa intensa',
  56: 'Chuva de gelo leve',
  57: 'Chuva de gelo intensa',
  61: 'Chuva fraca',
  63: 'Chuva moderada',
  65: 'Chuva intensa',
  66: 'Chuva congelante fraca',
  67: 'Chuva congelante intensa',
  71: 'Neve fraca',
  73: 'Neve moderada',
  75: 'Neve intensa',
  77: 'Grãos de neve',
  80: 'Pancada de chuva fraca',
  81: 'Pancada de chuva moderada',
  82: 'Pancada de chuva intensa',
  85: 'Nevasca fraca',
  86: 'Nevasca intensa',
  95: 'Tempestade',
  96: 'Tempestade com granizo fraca',
  99: 'Tempestade com granizo forte'
}

/*

Baseado em https://open-meteo.com/en/docs

0: Clear sky
1, 2, 3: Mainly clear, partly cloudy, and overcast
45, 48: Fog and depositing rime fog
51, 53, 55: Drizzle: Light, moderate, and dense intensity
56, 57: Freezing Drizzle: Light and dense intensity
61, 63, 65: Rain: Slight, moderate and heavy intensity
66, 67: Freezing Rain: Light and heavy intensity
71, 73, 75: Snow fall: Slight, moderate, and heavy intensity
77: Snow grains
80, 81, 82: Rain showers: Slight, moderate, and violent
85, 86: Snow showers slight and heavy
95 *: Thunderstorm: Slight or moderate
96, 99 *: Thunderstorm with slight and heavy hail

*/
