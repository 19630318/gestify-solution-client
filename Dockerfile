# -------- Stage 1: Build Angular App --------
FROM node:24-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci --silent

COPY . .

# Compilar en modo producción
RUN npx -y @angular/cli@20 build --configuration production

# -------- Stage 2: Servidor con NGINX --------
FROM nginx:alpine

# Copiar app compilada
COPY --from=build /app/dist/gestify-solution-client/browser/ /usr/share/nginx/html/

# Copiar configuración de nginx para SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf