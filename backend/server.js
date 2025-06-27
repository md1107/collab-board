const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const boardRoutes = require('./routes/boards');
const taskRoutes = require('./routes/tasks');

const app = express();
app.use(cors({origin: '*'}));
app.use(express.json());

app.use('/boards', boardRoutes);
app.use('/tasks', taskRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(4000,() => console.log('Server running on port4000'));
}).catch(err => console.error(err));
