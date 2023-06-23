const express = require('express');
const { PrismaClient } = require('@prisma/client');
const tasksRouter = require('./routes/tasks');

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(express.json());

app.use('/tasks', tasksRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
