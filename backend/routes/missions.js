const express = require('express');
const router = express.Router();

const missions = [
  {
    id: 1,
    name: 'Apollo 11',
    agency: 'NASA',
    year: 1969,
    status: 'Completed',
    description: 'First crewed mission to land humans on the Moon.'
  },
  {
    id: 2,
    name: 'Voyager 1',
    agency: 'NASA',
    year: 1977,
    status: 'Active — Interstellar Space',
    description: 'The farthest human-made object from Earth, still transmitting data.'
  },
  {
    id: 3,
    name: 'Hubble Space Telescope',
    agency: 'NASA / ESA',
    year: 1990,
    status: 'Active',
    description: 'Space telescope that has captured some of the deepest images of the universe.'
  },
  {
    id: 4,
    name: 'Perseverance Rover',
    agency: 'NASA',
    year: 2021,
    status: 'Active — Mars Surface',
    description: 'Searching for signs of ancient microbial life on Mars and caching samples.'
  },
  {
    id: 5,
    name: 'James Webb Space Telescope',
    agency: 'NASA / ESA / CSA',
    year: 2021,
    status: 'Active',
    description: 'Infrared observatory studying the earliest galaxies in the universe.'
  },
  {
    id: 6,
    name: 'Artemis II',
    agency: 'NASA',
    year: 2026,
    status: 'Planned',
    description: 'Crewed lunar flyby mission, a step toward returning humans to the Moon.'
  }
];

// GET /api/missions
router.get('/', (req, res) => {
  res.json(missions);
});

// GET /api/missions/:id
router.get('/:id', (req, res) => {
  const mission = missions.find(m => m.id === parseInt(req.params.id, 10));
  if (!mission) return res.status(404).json({ error: 'Mission not found' });
  res.json(mission);
});

module.exports = router;
