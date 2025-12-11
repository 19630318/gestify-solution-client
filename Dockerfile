# -------- Stage 1: Build Angular SSR --------
FROM node:24-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci --silent

COPY . .

# Construir SSR (browser + server)
RUN npm run build:ssr

# -------- Stage 2: Servidor Node para SSR --------
FROM node:24-alpine AS server

WORKDIR /app

# Copiar dist SSR generado
COPY --from=build /app/dist ./dist

# Puerto interno del container
ENV PORT=7172
EXPOSE 7172

# Ejecutar servidor SSR
CMD ["node", "dist/gestify-solution-client/server/server.mjs"]