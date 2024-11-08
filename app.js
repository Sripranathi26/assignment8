const express = require('express');
const mongoose = require('mongoose');
const eventRoutes = require('./routes/eventRoutes');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use('/events', eventRoutes);

mongoose.connect('mongodb://localhost:27017/event-management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'));

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
