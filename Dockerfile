# Etapa de construcción
FROM node:24-alpine AS builder

WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm ci --silent

# Copiar código fuente
COPY . .

# Compilar en modo producción
RUN npm run build -- --configuration=production

# Etapa de producción: servidor estático con nginx
FROM nginx:alpine

# Copiar app compilada
COPY --from=builder /app/dist/*/browser/ /usr/share/nginx/html/

# Copiar configuración de nginx para SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf