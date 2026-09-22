const express = require('express');
const cors = require('cors');
const path = require('path');

const planetsRouter = require('./routes/planets');
const missionsRouter = require('./routes/missions');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/planets', planetsRouter);
app.use('/api/missions', missionsRouter);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Mission Control is online 🚀' });
});

// Serve the built Angular app in production
// (run `ng build` in /frontend first, it outputs to /frontend/dist/space-site)
const angularDist = path.join(__dirname, '..', 'frontend', 'dist', 'space-site', 'browser');
app.use(express.static(angularDist));

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  res.sendFile(path.join(angularDist, 'index.html'), (err) => {
    if (err) next();
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Space Explorer API listening on http://localhost:${PORT}`);
});
