import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="section" style={{ textAlign: "center" }}>
      <h1 className="section-title">404: Page not found</h1>
      <Link to="/">Go back home</Link>
    </section>
  );
}

export default NotFound;