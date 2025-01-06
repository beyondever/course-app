# Course List App (Next.js + Prisma + Tailwind CSS)

A server-side rendered (SSR) course listing app built with **Next.js 15**, **Prisma**, and **Tailwind CSS**.  
The app fetches and filters courses directly from the database with zero client-side data fetching.

---

## Features
- **Server-Side Rendering (SSR):** All courses are fetched on the server using Prisma.  
- **Filtering by Category & Difficulty:** Supports URL query filtering (e.g., `?category=math`).  
- **Responsive Design:** Grid layout adapts to various screen sizes with Tailwind CSS.  
- **Clean UI/UX:** Modern, soft design with hover effects, tags, and buttons.

---

## Installation & Setup

### 1. Clone the Repository  
```bash
git clone https://github.com/beyondever/course-app.git
cd course-app
```

### 2. Install Dependencies
```bash
npm install
```

### 2. Initialise Prisma
```bash
npx prisma generate
```

### 3. Run the Development Server
```bash
npm run dev
```


Visit the app at http://localhost:3000/courses

---

## Usage
- View all courses at /courses.
- Filter by category or difficulty:
```
/courses?category=math
/courses?difficulty=easy
```

## Updating the Database (Course Data)

If you want to update or add new course data, you can use manipulate directly in the Prisma Studio simply with the command of `npx prisma studio`, or you can easily update the `seed.ts` file, and then reset the database using `npx prisma migrate reset`

## Consideration for further enhancement of UI

- Add pagination to the course list
- Add links in form of tabs or drop down for the filtering (e.g., `<Link href="/courses?category=math">Math</Link>`)
- Implement a detail view for each course