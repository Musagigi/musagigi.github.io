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
### При обновлении страницы выдает 404, локально работает нормально
На данный момент реализованны:

- моковый бэк (с помощью axios перехватывю запросы) для:
  - регистрации
  - авторизации
  - разавторизации
- генерация роботов (происходит при помощи 3 видов комбинаторики):
  - запрос к стороннему api https://robohash.org/
  - отрисовка полученных данных
- токен авторизации (время жизни 1 час)
