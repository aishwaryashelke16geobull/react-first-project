import NameInput from "../components/NameInput";

function Home() {
  return (
    <section className="section">
      <h1 className="app-title">Welcome to Our Company</h1>
      <p style={{ textAlign: "center", marginBottom: "24px" }}>
        We build great things with React.
      </p>
      <NameInput />
    </section>
  );
}

export default Home;