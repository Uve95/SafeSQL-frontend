# Establece la imagen base con Node.js
#Primera Etapa
FROM node:17 as build

RUN mkdir -p /

WORKDIR /

COPY package.json /


# Copia todos los archivos de tu proyecto al directorio de trabajo en el contenedor
COPY . .

# Instala las dependencias de la aplicación
RUN npm install --save-dev @angular/cli@latest


# Etapa 2: Servir la aplicación con NGINX
FROM nginx:alpine
COPY dist/com.frontend.safe-sql /usr/share/nginx/html
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]


