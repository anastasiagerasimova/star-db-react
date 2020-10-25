# Приложение Star DB

Приложение позволяет просмотривать корабли, персонажей и планеты из саги «Звездные войны»

**Задача**: написать код компонентов с использованием React.js и его основных паттернов. Научиться обрабатывать серверные запросы и внедрять асинхронный код в синхронную работу приложения. Реализовать маршрутизацию в SPA-приложении.

В проекте используеться реальный сервис - https://swapi.dev для того, чтобы получать данные из API. Изображение кораблей, персонажей и планет подгружаются с ресурса https://starwars-visualguide.com, который так же работает с https://swapi.dev.

## Доступные команды

* `npm install` - установить зависимости
* `npm start` - запустить встроенный сервер и следить за изменениями файлов
* `npm build` - собрать проект в папку `dist` в режиме production
##
#### В процессе создания приложение были изучены и применены на практике следующие инструменты:

* Работа с REST API 
* Обработка ошибок сети в компоненте
* Lifecycle методы 
* Паттерны ппроектирования:
  * *Provider*
  * *Render props*
  * *Event switch*
  * *Компоненты высшего порядка (High-order components)*
* Использование Context API
* Simple routing, роутинг со Switch

## Структура проекта
```
├── src/                                 # Исходники
│   ├── components/                      # Компоненты
│   │   ├── app/                         # Главная страница
│   │   │   ├── app.css                  
│   │   │   ├── app.js                    
│   │   │   └── index.js                 # Вспомогательный файл для import/export из компонента
│   │   ├── error-boundry/               # Предохранитель
│   │   │   ├── error-boundry.css        
│   │   │   ├── error-boundry.js         
│   │   │   └── index.js                 
│   │   ├── error-indicator/             # Сообщение об ошибке
│   │   │   ├── error-indicator.css      
│   │   │   ├── error-indicator.js       
│   │   │   └── index.js                 
│   │   ├── header/                      # Шапка проекта
│   │   │   ├── header.css               
│   │   │   ├── header.js                    
│   │   │   └── index.js                 
│   │   ├── hoc-helper/                  # Компоненты высшего порядка
│   │   │   ├── compoce.js               # Функция compose
│   │   │   ├── with-data.js             # HOC with-data
│   │   │   └── with-swapi-service.js    # HOC with-swapi-service
│   │   ├── item-details/                # Блок с подробным описанием элемента
│   │   │   ├── item-details.css         
│   │   │   ├── item-details.js          
│   │   │   └── index.js                 
│   │   ├── item-list/                   # Список элементов
│   │   │   ├── item-list.css            
│   │   │   ├── iitem-list.js            
│   │   │   └── index.js                 
│   │   ├── pages/                       # Страницы приложения
│   │   │   ├── login-page.js            # Страница регистрации
│   │   │   ├── people-page.js           # Страница с персонажами
│   │   │   ├── planet-page.js           # Страница с планетами
│   │   │   ├── secret-page.js           # Страница доступная для зарегистрированных пользователей
│   │   │   ├── starship-page.js         # Страница с короблями
│   │   │   └── index.js                 
│   │   ├── random-planet/               # Блок со случайной планетой
│   │   │   ├── random-planet.css         
│   │   │   ├── random-planet.js         
│   │   │   └── index.js                 
│   │   ├── row/                         # Структурный компонент
│   │   │   ├── row.css                  
│   │   │   ├── row.js                   
│   │   │   └── index.js                 
│   │   ├── spinner/                     # Спиннер для загрузки
│   │   │   ├── spinner.css              
│   │   │   ├── spinner.js               
│   │   │   └── index.js                
│   │   ├── swapi-service-context/       # Context API
│   │   │   ├── swapi-service-context.js  
│   │   │   └── index.js                      
│   │   └── sw-components/               # Компоненты 
│   │       ├── item-lists.js            # Списки с персонажами, c планетами, с короблями
│   │       ├── person-details.js        # Блок с подробным описанием персонажа
│   │       ├── planet-details.js        # Блок с подробным описанием планеты
│   │       ├── starship-details.js      # Блок с подробным описанием коробля
│   │       └── index.js                
│   └── services/                        # Сервисы
│   │   └── swapi-service.js             # Сервис для работы с API
│   └── index.js                         # Корневой файл проекта                                  
├── .gitignore                           # Список исключённых файлов из Git
├── README.md                            # Описание проекта
├── package-lock.json                    # Дерево установленных пакетов с блокировкой их версий
└── package.json                         # Список зависимостей
```
