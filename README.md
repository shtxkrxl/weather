<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![commits][commits-shield]][commits-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/shtxkrxl/weather">
    <img src="public/icon.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Movie</h3>

  <p align="center">
    Веб-сайт предоставляющий информацию о текущей погоде и прогнозе на несколько дней для различных городов
    <br />
    <a href="https://weather-shtxkrxl.vercel.app/">Сайт</a>
    ·
    <a href="https://github.com/shtxkrxl/weather/issues">Сообщить об ошибке</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Содержание</summary>
  <ol>
    <li>
      <a href="#о-проекте">О проекте</a>
    </li>
    <li>
      <a href="#запуск-локально">Запуск локально</a>
    </li>
    <li><a href="#лицензия">Лицензия</a></li>
    <li><a href="#контакты">Контакты</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## О проекте

![image](https://github.com/shtxkrxl/weather/assets/68380962/e1552a2f-69cb-42fd-88dc-9ff46b865870)

Проект Weather - это веб-сайт, который предоставляет информацию о текущей погоде и прогнозе на несколько дней для различных городов. Он был разработан с использованием API погодного сервиса www.weatherapi.com для получения актуальной информации.

Основной функционал проекта включает в себя:
* Текущая погода: cайт отображает текущую погоду в выбранном городе, включая температуру, влажность и скорость ветра.
* Прогноз на несколько дней: помимо текущей погоды, сайт также предоставляет прогноз погоды на два дня вперед.
* Множество городов: сайт позволяет выбрать любой город из базы данных и получить информацию о погоде в выбранном месте.

Моя цель разработки проекта состоит в том, чтобы научиться использовать фреймворк Next, а также взаимодействовать с REST API. Для проекта был использован api сайта www.weatherapi.com

Во время разработки:
* Использовал фреймворк [Next](https://nextjs.org/)
* Использовал типизацию [TypeScript](https://www.typescriptlang.org/)
* Писал стили с помощью css-фреймворка - [Tailwindcss](https://tailwindcss.com/)
* Взаимодействовал с REST API сайта www.weatherapi.com
* Использовал библиотеку для фетчинга данных - [SWR](https://swr.vercel.app/ru)
* Разработал поиск по городам
* Использовал хостинг [Vercel](https://vercel.com)

<!-- GETTING STARTED -->
## Запуск локально
Если вы хотите запустить проект локально, следуйте следующим инструкциям.

1. Склонируйте репозиторий
   ```sh
   git clone https://github.com/shtxkrxl/movie.git
   ```
2. Установите NPM пакеты
   ```sh
   npm install
   ```
3. Получите бесплатный ключ на www.weatherapi.com
4. Введите свой ключ в `.env.local`
   ```sh
   NEXT_PUBLIC_API_KEY=YOUR_API
   ```
5. Запустите сервер для разработки
   ```sh
   npm run dev
   ```
6. Откройте [http://localhost:3000](http://localhost:3000) в своём браузере чтобы увидеть результат

<!-- LICENSE -->
## Лицензия

Распространяется под лицензией MIT License. Читайте `LICENSE.txt` для большей информации.

<!-- CONTACT -->
## Контакты

Александр Кальмаев - <a href="mailto:shtxkrxl@ya.ru" target="_blank">shtxkrxl@ya.ru</a>

Ссылка на проект: [https://github.com/shtxkrxl/weather](https://github.com/shtxkrxl/weather)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[commits-shield]: https://img.shields.io/github/commit-activity/t/shtxkrxl/weather.svg?style=for-the-badge
[commits-url]: https://github.com/shtxkrxl/weather/graphs/commit-activity
[issues-shield]: https://img.shields.io/github/issues/shtxkrxl/weather.svg?style=for-the-badge
[issues-url]: https://github.com/shtxkrxl/weather/issues
[license-shield]: https://img.shields.io/github/license/shtxkrxl/weather.svg?style=for-the-badge
[license-url]: https://github.com/shtxkrxl/weather/blob/master/LICENSE.txt
