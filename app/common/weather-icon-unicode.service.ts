const codeMap = [
    'F056', // tornado
    'F06B', // thunderstorm
    'F073', // hurricane
    'F06B', // thunderstorm
    'F06B', // thunderstorm
    'F006', // rain-mix
    'F006', // rain-mix
    'F0B2', // sleet
    'F008', // rain
    'F008', // rain
    'F018', // rain-wind
    'F01A', // showers
    'F01A', // showers
    'F01B', // snow
    'F01B', // snow
    'F064', // snow-wind
    'F01B', // snow
    'F015', // hail
    'F0B2', // sleet
    'F063', // dust
    'F014', // fog
    'F0B6', // day-haze
    'F062', // smoke
    'F021', // windy
    'F021', // windy
    'F076', // snowflake-cold
    'F013', // cloudy
    'F02F', // night-cloudy
    'F002', // day-cloudy
    'F02F', // night-cloudy
    'F002', // day-cloudy
    'F02E', // night-clear
    'F00C', // day-sunny
    'F02E', // night-clear
    'F002', // day-cloudy
    'F015', // hail
    'F072', // hot
    'F06B', // thunderstorm
    'F06B', // thunderstorm
    'F06B', // thunderstorm
    'F01A', // showers
    'F01B', // snow
    'F01B', // snow
    'F01B', // snow
    'F013', // cloudy
    'F06B', // thunderstorm
    'F01B', // snow
    'F06B' // thunderstorm
];

export function getWeatherIconUnicode(codeIndex: string) {
    return codeMap[parseInt(codeIndex, 10)];
}
