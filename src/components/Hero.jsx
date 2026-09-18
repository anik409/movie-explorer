import { Link } from "react-router-dom";
import popcornBg from "../assets/popcorn.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `radial-gradient(circle at 50% -10%, rgba(38, 32, 51, 0.85) 0%, rgba(12, 14, 19, 0.92) 60%), url(${popcornBg})`,
      }}
    >
      <h1>YOUR NEXT WATCH IS HERE</h1>
      <p>Browse, search, and find something worth the popcorn.</p>
      <Link to="/movies" className="hero-cta">
        Explore Now
      </Link>
    </section>
  );
}

export default Hero;
