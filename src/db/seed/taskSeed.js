const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seed() {
  try {
    await prisma.task.create({
      data: {
        title: 'Task 1',
        description: 'Description for Task 1',
        status: 'pending',
      },
    });

    await prisma.task.create({
      data: {
        title: 'Task 2',
        description: 'Description for Task 2',
        status: 'completed',
      },
    });

    // Adicione mais chamadas a `prisma.task.create` conforme necessário para criar mais tarefas

    console.log('Seed data created successfully.');
  } catch (error) {
    console.error('Error creating seed data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
