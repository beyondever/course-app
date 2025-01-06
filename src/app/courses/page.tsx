import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function CoursesPage({ searchParams, }: { searchParams: Promise<{ [key: string]: string }>; }) {
  const { category, difficulty } = await searchParams;

  const where: any = {};
  if (category) where.category = category;
  if (difficulty) where.difficulty = difficulty;

  const courses = await prisma.course.findMany({ where });

  return (
    <main className="container mx-auto p-8" suppressHydrationWarning >
      <h1 className="text-3xl font-bold mb-6">Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.length > 0 ? (
          courses.map(course => (
            <div key={course.id} className="p-6 border rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold">{course.title}</h2>
              <p className="text-gray-600">Category: {course.category}</p>
              <p className="text-gray-600">Difficulty: {course.difficulty}</p>
            </div>
          ))
        ) : (
          <p>No courses found</p>
        )}
      </div>
    </main>
  );
}
