const express = require('express');
const router = express.Router();

const planets = [
  {
    id: 1,
    name: 'Mercury',
    type: 'Terrestrial',
    diameterKm: 4879,
    distanceFromSunAU: 0.39,
    moons: 0,
    color: '#b1adad',
    fact: 'Mercury has the most extreme temperature swings of any planet in the solar system.'
  },
  {
    id: 2,
    name: 'Venus',
    type: 'Terrestrial',
    diameterKm: 12104,
    distanceFromSunAU: 0.72,
    moons: 0,
    color: '#e6c27a',
    fact: 'Venus rotates backwards compared to most other planets.'
  },
  {
    id: 3,
    name: 'Earth',
    type: 'Terrestrial',
    diameterKm: 12742,
    distanceFromSunAU: 1.0,
    moons: 1,
    color: '#3a8ee0',
    fact: 'Earth is the only known planet with liquid water on its surface.'
  },
  {
    id: 4,
    name: 'Mars',
    type: 'Terrestrial',
    diameterKm: 6779,
    distanceFromSunAU: 1.52,
    moons: 2,
    color: '#c1440e',
    fact: 'Mars is home to Olympus Mons, the tallest volcano in the solar system.'
  },
  {
    id: 5,
    name: 'Jupiter',
    type: 'Gas Giant',
    diameterKm: 139820,
    distanceFromSunAU: 5.2,
    moons: 95,
    color: '#d9b38c',
    fact: 'Jupiter is so massive that its center of gravity with the Sun sits outside the Sun.'
  },
  {
    id: 6,
    name: 'Saturn',
    type: 'Gas Giant',
    diameterKm: 116460,
    distanceFromSunAU: 9.58,
    moons: 146,
    color: '#e3d19c',
    fact: "Saturn's rings are made mostly of ice particles with some rock and dust."
  },
  {
    id: 7,
    name: 'Uranus',
    type: 'Ice Giant',
    diameterKm: 50724,
    distanceFromSunAU: 19.18,
    moons: 27,
    color: '#9fe3e3',
    fact: 'Uranus rotates on its side, with an axial tilt of about 98 degrees.'
  },
  {
    id: 8,
    name: 'Neptune',
    type: 'Ice Giant',
    diameterKm: 49244,
    distanceFromSunAU: 30.07,
    moons: 16,
    color: '#4166f5',
    fact: 'Neptune has the strongest winds in the solar system, reaching 2,100 km/h.'
  }
];

// GET /api/planets
router.get('/', (req, res) => {
  res.json(planets);
});

// GET /api/planets/:id
router.get('/:id', (req, res) => {
  const planet = planets.find(p => p.id === parseInt(req.params.id, 10));
  if (!planet) return res.status(404).json({ error: 'Planet not found' });
  res.json(planet);
});

module.exports = router;
