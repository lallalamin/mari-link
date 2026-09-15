import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

function SocialLinks({ links }) {
  return (
    <nav
      className="social-links"
      aria-label="Social media links"
    >
      <a
        href={links.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>

      <a
        href={links.pinterest}
        target="_blank"
        rel="noreferrer"
        aria-label="Pinterest"
      >
        <FaPinterestP />
      </a>

      <a
        href={links.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn />
      </a>

      <a
        href={links.youtube}
        target="_blank"
        rel="noreferrer"
        aria-label="YouTube"
      >
        <FaYoutube />
      </a>

      <a
        href={links.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
    </nav>
  );
}

export default SocialLinks;