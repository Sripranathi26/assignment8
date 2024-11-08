const express = require('express');
const mongoose = require('mongoose');
const eventRoutes = require('./routes/eventRoutes');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use('/events', eventRoutes);

mongoose.connect('mongodb+srv://ass_8:<db_password>@cluster0.yma9f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'));

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
