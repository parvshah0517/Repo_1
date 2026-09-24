# =========================
# Stage 1: Build Angular frontend
# =========================
FROM node:20-alpine AS frontend-build

WORKDIR /app/frontend

COPY frontend/package*.json ./

RUN npm ci

COPY frontend/ ./

RUN npm run build -- --configuration production


# =========================
# Stage 2: Production backend
# =========================
FROM node:20-alpine AS production

WORKDIR /app

# Install backend production dependencies
COPY backend/package*.json ./backend/

RUN cd backend && npm ci --omit=dev

# Copy backend source
COPY backend/ ./backend/

# Copy Angular production build
COPY --from=frontend-build /app/frontend/dist/space-site/browser ./frontend/dist/space-site/browser

# Application port
EXPOSE 3000

# Start Express server
CMD ["node", "backend/server.js"]
