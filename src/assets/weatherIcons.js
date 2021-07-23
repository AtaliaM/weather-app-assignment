const returnCurrentWeatherIcon = (weather_state_abbr) => {
    let baseUrl = "https://www.metaweather.com/"
    let icon;
    switch (weather_state_abbr) {
        case "sn":
          icon = baseUrl+"/static/img/weather/sn.svg";
          break;
        case "sl":
          icon = baseUrl+"/static/img/weather/sl.svg";
          break;
        case "h":
           icon = baseUrl+"/static/img/weather/h.svg";
          break;
        case "t":
          icon = baseUrl+"/static/img/weather/t.svg";
          break;
        case "hr":
          icon = baseUrl+"/static/img/weather/hr.svg";
          break;
        case "lr":
          icon = baseUrl+"/static/img/weather/lr.svg";
          break;
        case "s":
          icon = baseUrl+"/static/img/weather/s.svg";
          break;
        case "hc":
          icon = baseUrl+"/static/img/weather/hc.svg";
          break;
        case "lc":
          icon = baseUrl+"/static/img/weather/lc.svg";
          break;
          default:
              icon = baseUrl+"/static/img/weather/c.svg";
      }

      return icon;
}

export default returnCurrentWeatherIcon;