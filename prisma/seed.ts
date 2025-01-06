import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.course.createMany({
    data: [
      { title: 'Algebra 2025', category: 'math', difficulty: 'easy' },
      { title: 'Physics for Engineers', category: 'science', difficulty: 'medium' },
      { title: 'Advanced Calculus', category: 'math', difficulty: 'hard' },
      { title: 'Literature Basics', category: 'arts', difficulty: 'easy' }
    ],
  });
  console.log('Seeding complete');
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());