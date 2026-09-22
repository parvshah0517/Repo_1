# Space Explorer 🚀

A space-themed website with an **Angular** frontend and a **Node.js/Express** backend API.

## Structure

```
space-site/
├── backend/          Node.js + Express API (planets & missions data)
│   ├── routes/
│   ├── server.js
│   └── package.json
└── frontend/         Angular 18 standalone app (starfield UI, planets, missions)
    ├── src/
    ├── angular.json
    └── package.json
```

## Prerequisites

- Node.js 18+ and npm
- Angular CLI (`npm install -g @angular/cli`) — optional, `npx` works too

## 1. Run the backend

```bash
cd backend
npm install
npm start
```

The API runs at `http://localhost:3000` with endpoints:
- `GET /api/health`
- `GET /api/planets`
- `GET /api/planets/:id`
- `GET /api/missions`
- `GET /api/missions/:id`

## 2. Run the frontend (development)

In a separate terminal:

```bash
cd frontend
npm install
npm start
```

This runs `ng serve` on `http://localhost:4200` and proxies `/api/*` requests
to the backend on port 3000 (see `proxy.conf.json`), so keep the backend running.

## 3. Production build

```bash
cd frontend
npm run build
```

This outputs static files to `frontend/dist/space-site/browser`. The Express
server (`backend/server.js`) is already configured to serve that folder and
handle client-side routing, so in production you only need to run:

```bash
cd backend
npm install
npm start
```

and visit `http://localhost:3000` — no separate frontend server needed.

## Features

- Animated CSS starfield background
- Home dashboard with live stats pulled from the API
- Planets page — click a planet card to expand details (diameter, distance, moons, fun fact)
- Missions page — chronological mission timeline (Apollo 11 → Artemis II)
- Dark "mission control" theme using Orbitron + Exo 2 fonts

## Customizing

- Add/edit data in `backend/routes/planets.js` and `backend/routes/missions.js`
- Theme colors/tokens live in `frontend/src/styles.scss` (`:root` CSS variables)
- Add new pages by creating a component under `frontend/src/app/components/`
  and registering it in `frontend/src/app/app.routes.ts`
