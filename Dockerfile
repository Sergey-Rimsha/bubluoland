# Используйте официальную среду выполнения Node.js в качестве базового образа
FROM node:18 as build

# Установите рабочий каталог в контейнере
WORKDIR /app

# Скопируйте package.json и package-lock.json в рабочий каталог
COPY package*.json . /

# Установить зависимости
RUN npm ci

# Скопировать весь код приложения в контейнер
COPY . .

# Создайте приложение React для производства
RUN npm run build

# Используйте Nginx в качестве рабочего сервера
FROM nginx:alpine

# Скопируйте созданное приложение React в каталог веб-сервера Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Открыть порт 80 для сервера Nginx
EXPOSE 80

# Запустить Nginx, когда контейнер запускает
CMD [ "nginx" , "-g" , "daemon off;" ]