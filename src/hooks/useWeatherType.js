const useWeatherType = () => {
  const weatherTypeData = [
    {
      descidTipoTempoEN: "--",
      descidTipoTempoPT: "---",
      idTipoTempo: -99,
    },
    {
      descidTipoTempoEN: "No information",
      descidTipoTempoPT: "Sem informação",
      idTipoTempo: 0,
    },
    {
      descidTipoTempoEN: "Clear sky",
      descidTipoTempoPT: "Céu limpo",
      idTipoTempo: 1,
    },
    {
      descidTipoTempoEN: "Partly cloudy",
      descidTipoTempoPT: "Céu pouco nublado",
      idTipoTempo: 2,
    },
    {
      descidTipoTempoEN: "Sunny intervals",
      descidTipoTempoPT: "Céu parcialmente nublado",
      idTipoTempo: 3,
    },
    {
      descidTipoTempoEN: "Cloudy ",
      descidTipoTempoPT: "Céu muito nublado ou encoberto",
      idTipoTempo: 4,
    },
    {
      descidTipoTempoEN: "Cloudy (High cloud)",
      descidTipoTempoPT: "Céu nublado por nuvens altas",
      idTipoTempo: 5,
    },
    {
      descidTipoTempoEN: "Showers/rain",
      descidTipoTempoPT: "Aguaceiros/chuva",
      idTipoTempo: 6,
    },
    {
      descidTipoTempoEN: "Light showers/rain",
      descidTipoTempoPT: "Aguaceiros/chuva fracos",
      idTipoTempo: 7,
    },
    {
      descidTipoTempoEN: "Heavy showers/rain",
      descidTipoTempoPT: "Aguaceiros/rain fortes",
      idTipoTempo: 8,
    },
    {
      descidTipoTempoEN: "Rain/showers",
      descidTipoTempoPT: "Chuva/aguaceiros",
      idTipoTempo: 9,
    },
    {
      descidTipoTempoEN: "Light rain",
      descidTipoTempoPT: "Chuva fraca ou chuvisco",
      idTipoTempo: 10,
    },
    {
      descidTipoTempoEN: "Heavy rain/showers",
      descidTipoTempoPT: "Chuva/aguaceiros forte",
      idTipoTempo: 11,
    },
    {
      descidTipoTempoEN: "Intermittent rain",
      descidTipoTempoPT: "Períodos de chuva",
      idTipoTempo: 12,
    },
    {
      descidTipoTempoEN: "Intermittent ligth rain",
      descidTipoTempoPT: "Períodos de chuva fraca",
      idTipoTempo: 13,
    },
    {
      descidTipoTempoEN: "Intermittent heavy rain",
      descidTipoTempoPT: "Períodos de chuva forte",
      idTipoTempo: 14,
    },
    {
      descidTipoTempoEN: "Drizzle",
      descidTipoTempoPT: "Chuvisco",
      idTipoTempo: 15,
    },
    {
      descidTipoTempoEN: "Mist",
      descidTipoTempoPT: "Neblina",
      idTipoTempo: 16,
    },
    {
      descidTipoTempoEN: "Fog",
      descidTipoTempoPT: "Nevoeiro ou nuvens baixas",
      idTipoTempo: 17,
    },
    {
      descidTipoTempoEN: "Snow",
      descidTipoTempoPT: "Neve",
      idTipoTempo: 18,
    },
    {
      descidTipoTempoEN: "Thunderstorms",
      descidTipoTempoPT: "Trovoada",
      idTipoTempo: 19,
    },
    {
      descidTipoTempoEN: "Showers and thunderstorms",
      descidTipoTempoPT: "Aguaceiros e possibilidade de trovoada",
      idTipoTempo: 20,
    },
    {
      descidTipoTempoEN: "Hail",
      descidTipoTempoPT: "Granizo",
      idTipoTempo: 21,
    },
    {
      descidTipoTempoEN: "Frost",
      descidTipoTempoPT: "Geada",
      idTipoTempo: 22,
    },
    {
      descidTipoTempoEN: "Rain and thunderstorms",
      descidTipoTempoPT: "Chuva e possibilidade de trovoada",
      idTipoTempo: 23,
    },
    {
      descidTipoTempoEN: "Convective clouds",
      descidTipoTempoPT: "Nebulosidade convectiva",
      idTipoTempo: 24,
    },
    {
      descidTipoTempoEN: "Partly cloudy",
      descidTipoTempoPT: "Céu com períodos de muito nublado",
      idTipoTempo: 25,
    },
    {
      descidTipoTempoEN: "Fog",
      descidTipoTempoPT: "Nevoeiro",
      idTipoTempo: 26,
    },
    {
      descidTipoTempoEN: "Cloudy",
      descidTipoTempoPT: "Céu nublado",
      idTipoTempo: 27,
    },
    {
      descidTipoTempoEN: "Snow showers",
      descidTipoTempoPT: "Aguaceiros de neve",
      idTipoTempo: 28,
    },
    {
      descidTipoTempoEN: "Rain and snow",
      descidTipoTempoPT: "Chuva e Neve",
      idTipoTempo: 29,
    },
    {
      descidTipoTempoEN: "Rain and snow",
      descidTipoTempoPT: "Chuva e Neve",
      idTipoTempo: 30,
    },
  ];

  return {
    weatherTypeData,
  };
};

export default useWeatherType;
