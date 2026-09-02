import "./App.css";
import profilePic from "./assets/profile.jpg";
import {
  FaInstagram,
  FaPinterest,
  FaLinkedin,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

function App() {
  const links = [
    { title: "my art + crafts", url: "#" },
    { title: "things i build", url: "#" },
    { title: "youtube", url: "#" },
    { title: "pinterest", url: "#" },
  ];

  return (
    <main className="page">
      <section className="profile">
        <div className="avatar">
          <img src={profilePic} alt="Mari" />
        </div>

        <h1>mari ♡</h1>

        <p>
          software engineer • artist • maker
        </p>
      </section>

      <section className="socials">
        <div className="social-icons">
          <a href="https://www.instagram.com/lallalamari" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>

          <a href="https://www.pinterest.com/lallalamari/" target="_blank" rel="noreferrer">
            <FaPinterest />
          </a>

          <a href="https://www.linkedin.com/in/mari-hirota/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href="https://www.youtube.com/@lallalamari" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>

          <a href="https://github.com/lallalamin" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
      </section>

      <section className="links">
        {links.map((link) => (
          <a
            className="link-card"
            href={link.url}
            key={link.title}
          >
            {link.title}
          </a>
        ))}
      </section>

      <p className="currently">
        currently making: tiny cyberdeck 🌱
      </p>
    </main>
  );
}

export default App;