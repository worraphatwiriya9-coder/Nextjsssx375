export default function CoursesPage() {
  return (
    <main
      className="page"
      style={{
        minHeight: "100vh",
        padding: "50px 24px",
        background: "#f8fafc",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#1e293b",
          marginBottom: "32px",
        }}
      >
        รายการวิชาทั้งหมด
      </h1>

      <div
        className="courseGrid"
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
        }}
      >
        <div className="courseCard">
          <h2>Database</h2>
          <p>ระบบฐานข้อมูล</p>
        </div>

        <div className="courseCard">
          <h2>Web Programming</h2>
          <p>การเขียนโปรแกรมบนเว็บ</p>
        </div>

        <div className="courseCard">
          <h2>Next.js</h2>
          <p>การพัฒนาเว็บด้วย Next.js</p>
        </div>

        <div className="courseCard">
          <h2>JavaScript</h2>
          <p>การเขียนโปรแกรม JavaScript</p>
        </div>
      </div>
    </main>
  );
}