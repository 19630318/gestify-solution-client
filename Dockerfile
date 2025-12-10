# -------- Stage 1: Build Angular App --------
FROM node:24-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Compilar en modo producción
RUN npx -y @angular/cli@20 build --configuration production

# -------- Stage 2: Servidor con NGINX --------
FROM nginx:alpine

# Copiar archivos generados al servidor web
COPY --from=build /app/dist/* /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]