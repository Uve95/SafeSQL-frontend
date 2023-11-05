#Primera Etapa
FROM node:17 as build
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./
RUN npm install --save-dev @angular/cli@latest
COPY . .
# Instala las dependencias de la aplicación
# Etapa 2: Servir la aplicación con NGINX

# Usa una imagen base de NGINX
FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf 
COPY ./dist/com.frontend.safe-sql /usr/share/nginx/html

# Exponer el puerto 80 (puerto predeterminado de NGINX)
EXPOSE 4200

# Comando para iniciar NGINX en el primer plano
CMD ["nginx", "-g", "daemon off;"]
