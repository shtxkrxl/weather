import { City, Forecast } from '@/models/models';
import { getDate } from '@/utils/date';
import { weatherConverter } from '@/utils/weatherConverter';
import { weatherIcon } from '@/utils/weatherIcon';
import Image from 'next/image';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Forecast = ({ city }: Props) => {
  const { data, error } = useSWR<Forecast>(
    `http://api.weatherapi.com/v1/forecast.json?key=c632a86b19514565af1104101232505&q=${city.name}&days=3&aqi=no&alerts=no&lang=ru`,
    fetcher
  );

  if (data) {
    return (
      <div
        className='relative h-[180px] w-[320px] select-none rounded-[15px] bg-white/80 p-[15px]
        shadow-[0_6px_10px_rgba(0,0,0,0.25)] transition-all hover:shadow-[0_10px_10px_rgba(0,0,0,0.25)]'>
        <ul className='flex h-full w-full flex-col justify-between'>
          {data.forecast.forecastday
            .filter((day, index) => (index === 0 ? false : true))
            .map(day => (
              <li key={day.date.toString()} className='flex justify-between'>
                <div className='flex flex-col'>
                  <span className='text-[32px] leading-[29px]'>
                    {getDate(day.date.toString()).weekday}
                  </span>
                  <span className='text-[24px] leading-[29px]'>
                    {getDate(day.date.toString()).day}{' '}
                    {getDate(day.date.toString()).month}
                  </span>
                </div>

                <div className='flex items-center gap-[5px]'>
                  <span className='text-[40px] leading-[38px]'>
                    {day.day.avgtemp_c > 0 && <span>+</span>}
                    {Math.round(day.day.avgtemp_c)}
                  </span>
                  <Image
                    src={weatherIcon(weatherConverter(day.day.condition.text))}
                    alt={weatherConverter(day.day.condition.text)}
                    sizes='50'
                    className='h-[50px] w-[50px]'
                  />
                </div>
              </li>
            ))}
        </ul>
        <div className='absolute mx-[5px] mt-[-75px] h-[2px] w-[280px] bg-[#303030]'></div>
      </div>
    );
  }
  return null;
};

interface Props {
  city: City;
}

export default Forecast;
