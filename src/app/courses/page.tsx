import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function CoursesPage({ searchParams, }: { searchParams: Promise<{ [key: string]: string }>; }) {
  const { category, difficulty } = await searchParams;

  const where: any = {};
  if (category) where.category = category;
  if (difficulty) where.difficulty = difficulty;

  const courses = await prisma.course.findMany({ where });

  return (
    <main className="container mx-auto px-4 py-12" suppressHydrationWarning >
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
        Available Courses
      </h1>

      {courses.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-white p-6 rounded-2xl shadow-md hover:scale-[1.03] transition-all duration-300 border border-gray-200"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {course.title}
                </h2>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  course.category === 'math' ? 'bg-blue-100 text-blue-800' :
                  course.category === 'science' ? 'bg-green-100 text-green-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {course.category}
                </span>

                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  course.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                  course.difficulty === 'hard' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {course.difficulty}
                </span>
              </div>

              <div className="mt-6">
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-all">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-600 mt-12">
          No courses found. <a href="/courses" className="text-indigo-600 underline">View all courses</a>
        </p>
      )}
    </main>
  );
}
