import { useDebounce } from '@/hooks/debounce';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import search from '../../public/icons/search.svg';
import useSWR from 'swr';
import { City } from '@/models/models';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Search = ({ setCity }: Props) => {
  const [input, setInput] = useState('');
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(input);
  const { data, error } = useSWR<City[]>(
    debounced.length >= 3
      ? `https://api.weatherapi.com/v1/search.json?key=${process.env.NEXT_PUBLIC_WEATHER_API}&q=${debounced}`
      : null,
    fetcher
  );

  useEffect(() => {
    data?.length ? setDropdown(true) : setDropdown(false);
  }, [data]);

  const clickHandler = (city: City) => {
    setCity(city);
    setDropdown(false);
    setInput('');
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className='relative'>
      <div
        className='mx-auto mt-[35px] flex h-[50px] w-[320px] items-center justify-between rounded-[15px]
      bg-white/80 px-[15px] py-[13px] text-[20px] leading-[24px] md:w-[660px]'>
        <input
          className='absolute mx-[-15px] my-[-13px] h-[50px] w-[320px] rounded-[15px] bg-transparent
          px-[15px] py-[13px] leading-[24px] shadow-[0_6px_10px_rgba(0,0,0,0.25)]
          outline-none transition-all hover:shadow-[0_8px_10px_rgba(0,0,0,0.25)] focus:shadow-[0_10px_10px_rgba(0,0,0,0.25)]
          focus:outline-none md:w-[660px]'
          value={input}
          onChange={changeHandler}
          type='text'
        />
        {!input ? <span>Поиск</span> : <p></p>}
        <Image src={search} alt='Search icon' />
      </div>

      {dropdown && (
        <ul
          className='absolute z-[2] mt-[5px] w-full list-none rounded-[15px] bg-white/90 px-[8px]
          py-[13px] text-[20px] leading-[24px] shadow-[0_6px_10px_rgba(0,0,0,0.25)] backdrop-blur-sm'>
          {error && (
            <span className='text-red-700'>Что-то пошло не так...</span>
          )}
          {data?.map(city => (
            <li
              key={city.name}
              className='mb-[4px] cursor-pointer rounded-[5px] px-[7px] py-[2px] hover:bg-neutral-200/60'
              onClick={() => clickHandler(city)}>
              {city.name}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

interface Props {
  setCity: any;
}

export default Search;
