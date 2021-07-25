const returnCurrentWeatherIcon = (weather_state_abbr) => {
    let baseUrl = "https://www.metaweather.com/static/img/weather"
    let icon;
    switch (weather_state_abbr) {
        case "sn":
          icon = baseUrl+"/sn.svg";
          break;
        case "sl":
          icon = baseUrl+"/sl.svg";
          break;
        case "h":
           icon = baseUrl+"/h.svg";
          break;
        case "t":
          icon = baseUrl+"/t.svg";
          break;
        case "hr":
          icon = baseUrl+"/hr.svg";
          break;
        case "lr":
          icon = baseUrl+"/lr.svg";
          break;
        case "s":
          icon = baseUrl+"/s.svg";
          break;
        case "hc":
          icon = baseUrl+"/hc.svg";
          break;
        case "lc":
          icon = baseUrl+"/lc.svg";
          break;
          default:
              icon = baseUrl+"/c.svg";
      }

      return icon;
}

export default returnCurrentWeatherIcon;