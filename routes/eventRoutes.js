const express = require('express');
const router = express.Router();
const Event = require('../models/event');

router.post('/create', async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.redirect('/events');
  } catch (error) {
    res.status(400).send('Error creating event');
  }
});

router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.render('events/index', { events });
  } catch (error) {
    res.status(500).send('Error fetching events');
  }
});

router.post('/update/:id', async (req, res) => {
  try {
    await Event.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/events');
  } catch (error) {
    res.status(400).send('Error updating event');
  }
});

router.post('/delete/:id', async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.redirect('/events');
  } catch (error) {
    res.status(500).send('Error deleting event');
  }
});

module.exports = router;
