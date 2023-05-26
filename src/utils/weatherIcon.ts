import sun from '../../public/icons/sun.svg';
import cloudSun from '../../public/icons/cloudSun.svg';
import cloudyDark from '../../public/icons/cloudyDark.svg';
import fog from '../../public/icons/fog.svg';
import rain from '../../public/icons/rain.svg';
import snowfall from '../../public/icons/snowfall.svg';
import thunderstorm from '../../public/icons/thunderstorm.svg';

export const weatherIcon = (weather: string) => {
  return map[weather] ? map[weather] : sun;
};

const map: any = {
  Ясно: sun,
  Облачно: cloudSun,
  Пасмурно: cloudyDark,
  Дымка: fog,
  Дождь: rain,
  Снегопад: snowfall,
  Морось: rain,
  Гроза: thunderstorm,
  Поземок: fog,
  Метель: snowfall,
  Туман: fog,
};
