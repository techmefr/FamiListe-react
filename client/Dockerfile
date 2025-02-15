# Étape 1 : Build l'application React
FROM node:18 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2 : Image minimale pour le transfert
FROM alpine:latest
WORKDIR /dist
COPY --from=builder /app/dist .
