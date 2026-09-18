import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <h1>DISCOVER MOVIES</h1>
      <p>
        Explore and discover your favorite movies and TV shows from
        around the world, powered by the TVMaze database.
      </p>
      <Link to="/movies" className="hero-cta">
        Explore Now
      </Link>
    </section>
  );
}