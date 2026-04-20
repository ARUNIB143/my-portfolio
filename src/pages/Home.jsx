function Home() {
  return (
    <div style={{ textAlign: "center", padding: "60px" }}>
      <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
        Hi, I'm Arun 👋
      </h1>

      <p style={{ fontSize: "18px", color: "gray" }}>
        I am a developer building modern web applications using React and Blazor.
      </p>

      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        View My Work
      </button>
    </div>
  );
}

export default Home;