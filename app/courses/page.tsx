export default function CoursesPage() {
  return (
    <main className="page">
      <h1>รายวิชา</h1>

      <div className="courseGrid">
        <div className="courseCard">
          <h2>Web Programming</h2>
          <p>การเขียนโปรแกรมบนเว็บ</p>
        </div>

        <div className="courseCard">
          <h2>Database</h2>
          <p>ระบบฐานข้อมูล</p>
        </div>

        <div className="courseCard">
          <h2>JavaScript</h2>
          <p>การเขียนโปรแกรม JavaScript</p>
        </div>

        <div className="courseCard">
          <h2>Next.js</h2>
          <p>การพัฒนาเว็บด้วย Next.js</p>
        </div>
      </div>
    </main>
  );
}