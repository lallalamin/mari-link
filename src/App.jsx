import { useEffect, useState } from "react";

import "./App.css";

import ThemeToggle from "./components/ThemeToggle";
import Profile from "./components/Profile";
import SocialLinks from "./components/SocialLinks";
import LinkCard from "./components/LinkCard";
import CurrentlyMaking from "./components/CurrentlyMaking";
import Decorations from "./components/Decorations";

import {
  mainLinks,
  socialLinks,
} from "./data/links";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme =
      localStorage.getItem("mari-theme");

    if (savedTheme) {
      return savedTheme;
    }

    const prefersDark =
      window.matchMedia &&
      window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    localStorage.setItem(
      "mari-theme",
      theme
    );

    document.documentElement.dataset.theme =
      theme;
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "light"
        ? "dark"
        : "light"
    );
  }

  return (
    <div className={`site theme-${theme}`}>
      <main className="page">
        <Decorations />

        <ThemeToggle
          theme={theme}
          toggleTheme={toggleTheme}
        />

        <div className="page-content">
          <Profile />

          <SocialLinks
            links={socialLinks}
          />

          <section className="links">
            {mainLinks.map(
              (link, index) => (
                <LinkCard
                  key={link.title}
                  {...link}
                  index={index}
                />
              )
            )}
          </section>

          <CurrentlyMaking />

          <a
            href="mailto:YOUR_EMAIL@gmail.com?subject=Hello%20Mari!"
            className="email-link"
          >
            <span>✉</span>
            send me a little note
          </a>

          <footer className="footer">
            <span>made with ♡ by mari</span>

            <span className="footer-flower">
              ✿
            </span>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;