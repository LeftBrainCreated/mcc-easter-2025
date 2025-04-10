# Stage 1: Builder
FROM node:22.14 AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production Runner
FROM node:22.14 AS runner
WORKDIR /usr/src/app

# Only copy over the necessary files/folders from builder
COPY --from=builder /usr/src/app/.next .next
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/public ./public
RUN npm install --omit=dev

EXPOSE 3000
CMD ["npm", "start"]
