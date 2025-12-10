# Dockerfile
# Stage 1: build
FROM node:18 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
# Ajusta el comando de build si usas un script distinto en package.json
RUN npx -y @angular/cli@20.0.0 build --configuration production

# Stage 2: nginx
FROM nginx:stable-alpine
COPY --from=builder /app/dist/gestify-solution-client /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]