import Background from '@/components/Background';
import Forecast from '@/components/Forecast';
import Search from '@/components/Search';
import WeatherCard from '@/components/WeatherCard';
import Wrapper from '@/components/Wrapper';
import { City } from '@/models/models';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { useState } from 'react';

const inter = Inter({ subsets: ['cyrillic'] });

export default function Home() {
  const [city, setCity] = useState<City>({
    name: 'Москва',
  });

  navigator.geolocation.getCurrentPosition(position => {
    setCity({
      name: `${position.coords.latitude},${position.coords.longitude}`,
    });
  });

  return (
    <main className={`${inter.className} text-[#303030]`}>
      <Head>
        <title>Погода</title>
        <meta
          name='description'
          content='Сайт предоставляющий прогноз погоды'
        />
      </Head>
      <Background />
      <Wrapper>
        <div className='flex flex-col items-center justify-center gap-[50px] md:gap-[20px]'>
          <Search setCity={setCity} />
          <div className='flex flex-col gap-[50px] md:flex-row md:gap-[20px]'>
            <WeatherCard city={city} />
            <Forecast city={city} />
          </div>
        </div>
      </Wrapper>
    </main>
  );
}
