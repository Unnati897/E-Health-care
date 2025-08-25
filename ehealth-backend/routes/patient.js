// ehealth-backend/routes/patients.js
const express = require('express');
const router = express.Router();
const Patient = require('../route/Patient');
const auth = require('../middleware/auth');

router.get('/', auth, async (req,res) => {
  const patients = await Patient.find().sort({ createdAt: -1 });
  res.json(patients);
});

router.post('/', auth, async (req,res) => {
  const p = new Patient(req.body);
  await p.save();
  res.status(201).json(p);
});

module.exports = router;
