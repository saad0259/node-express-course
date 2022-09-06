const express = require('express');
const app = express();
const tasksRouter = require('./routes/tasks');

app.use(express.json());
app.use('/api/v1/tasks', tasksRouter);

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}...`));