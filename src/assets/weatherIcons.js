import c from './c.svg';
import h from './h.svg';
import hc from './hc.svg';
import hr from './hr.svg';
import lc from './lc.svg';
import lr from './lr.svg';
import s from './s.svg';
import sl from './sl.svg';
import sn from './sn.svg';
import t from './t.svg';

const returnCurrentWeatherIcon = (weather_state_abbr) => {
    // let baseUrl = "https://www.metaweather.com/static/img/weather"
    let icon;
    switch (weather_state_abbr) {
        case "sn":
          icon = sn;
          break;
        case "sl":
          icon = sl;
          break;
        case "h":
           icon = h;
          break;
        case "t":
          icon = t;
          break;
        case "hr":
          icon = hr;
          break;
        case "lr":
          icon = lr;
          break;
        case "s":
          icon = s;
          break;
        case "hc":
          icon = hc;
          break;
        case "lc":
          icon = lc;
          break;
          default:
              icon = c;
      }

      return icon;
}

export default returnCurrentWeatherIcon;