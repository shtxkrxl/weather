import Image from 'next/image';
import sun from '../../public/icons/sun.svg';
import wind from '../../public/icons/wind.svg';
import droplet from '../../public/icons/droplet.svg';
import { City, CurrentWeather } from '@/models/models';
import useSWR from 'swr';
import { getDate } from '@/utils/date';
import { kphToMps } from '@/utils/speedConverter';
import { weatherConverter } from '@/utils/weatherConverter';
import { weatherIcon } from '@/utils/weatherIcon';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const WeatherCard = ({ city }: Props) => {
  const { data, error } = useSWR<CurrentWeather>(
    `http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API}&q=${city.name}&aqi=no&lang=ru`,
    fetcher
  );

  const condition = weatherConverter(data?.current.condition.text!);
  const today = getDate();

  if (data) {
    return (
      <div
        className='flex h-[180px] w-[320px] select-none flex-col gap-[12px] rounded-[15px] bg-white/80
        p-[15px] shadow-[0_6px_10px_rgba(0,0,0,0.25)] transition-all hover:shadow-[0_10px_10px_rgba(0,0,0,0.25)]'>
        <div className='flex justify-between'>
          <span className='text-[20px] leading-[24px]'>{`${today.weekday}, ${today.day} ${today.month}`}</span>
          <span className='text-[20px] leading-[24px]'>{city.name}</span>
        </div>

        <div className='flex items-center justify-center gap-[25px]'>
          <span className='text-[64px] leading-[77px]'>
            {data?.current.temp_c! > 0 && <span>+</span>}
            {Math.round(data?.current.temp_c!)}
          </span>
          <div className='flex flex-col gap-0'>
            <div className='flex gap-[5px]'>
              <span className='flex gap-[3px] text-[24px] font-semibold leading-[29px]'>
                {condition}
                <Image
                  src={weatherIcon(condition)}
                  alt={condition}
                  sizes='27'
                  className='h-[27px] w-[27px]'
                />
              </span>
            </div>
            <span className='text-[20px] leading-[24px]'>
              Ощущается как {data?.current.feelslike_c! > 0 && <span>+</span>}
              {Math.round(data?.current.feelslike_c!)}
            </span>
          </div>
        </div>

        <div className='flex gap-[15px]'>
          <div className='flex items-center gap-[5px]'>
            <Image src={wind} alt='Wind' sizes='24' />
            <span className='text-[20px] leading-[24px]'>
              {kphToMps(data?.current.wind_kph!)} м/с
            </span>
          </div>
          <div className='flex items-center gap-[5px]'>
            <Image src={droplet} alt='Droplet' sizes='24' />
            <span className='text-[20px] leading-[24px]'>
              {data?.current.humidity} %
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

interface Props {
  city: City;
}

export default WeatherCard;
