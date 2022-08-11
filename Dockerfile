#stage 0

FROM node:18.7-alpine3.16 as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

#stage 1
FROM nginx:1.23-alpine
WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 443
CMD [ "nginx", "-g", "daemon off;"]
