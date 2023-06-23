const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const router = express.Router();

// Rota para buscar todas as tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar as tasks.' });
  }
});

// Rota para criar uma nova task
router.post('/', async (req, res) => {
  const { title, description, status } = req.body;

  try {
    const task = await prisma.task.create({
      data: { title, description, status },
    });
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar a task.' });
  }
});

// Rota para atualizar uma task
router.put('/:id', async (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title, description, status } = req.body;

  try {
    const task = await prisma.task.update({
      where: { id: taskId },
      data: { title, description, status },
    });
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar a task.' });
  }
});

// Rota para deletar uma task
router.delete('/:id', async (req, res) => {
  const taskId = parseInt(req.params.id);

  try {
    const task = await prisma.task.delete({
      where: { id: taskId },
    });
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao deletar a task.' });
  }
});

module.exports = router;
