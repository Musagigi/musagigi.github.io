# Project 01

### проект для портфолио

#### стек:

- React
- TypeScript
- Vite
- Redux Toolkit
- Redux Persist
- React Router Dom
- React Hook Form

---
### При обновлении страницы или при переходе с помощью адресной строки браузера выдает 404 (проблема в gh pages), локально работает нормально
На данный момент реализованны:

- моковый бэк (с помощью axios перехватывю запросы) для:
  - регистрации
  - авторизации
  - разавторизации
- генерация роботов (происходит при помощи 3 видов комбинаторики):
  - запрос к стороннему api https://robohash.org/
  - отрисовка полученных данных
  - сохранение настроек панели
  - страница со списком сохраненных настроек
  - страница с выбранной настройкой панели
- токен авторизации (время жизни 1 час)
