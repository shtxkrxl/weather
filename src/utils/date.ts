export const getDate = (inputDate?: string) => {
  const date = inputDate ? new Date(inputDate!) : new Date();

  let weekday = new Intl.DateTimeFormat('ru-RU', { weekday: 'short' }).format(
    date
  );
  weekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);

  const day = date.getDate();
  const month: string = months[date.getMonth().toString()];

  return {
    weekday,
    day,
    month,
  };
};

const months: Map = {
  '0': 'Января',
  '1': 'Февраля',
  '2': 'Марта',
  '3': 'Апреля',
  '4': 'Мая',
  '5': 'Июня',
  '6': 'Июля',
  '7': 'Августа',
  '8': 'Сентября',
  '9': 'Октября',
  '10': 'Ноября',
  '11': 'Декабря',
};

interface Map {
  [key: string]: string;
}
