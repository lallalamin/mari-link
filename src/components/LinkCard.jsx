import { FiArrowUpRight } from "react-icons/fi";

function LinkCard({
  title,
  description,
  url,
  emoji,
  index,
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`link-card link-card-${index + 1}`}
    >
      <div className="link-card-icon">
        {emoji}
      </div>

      <div className="link-card-content">
        <h2>{title}</h2>

        <p>{description}</p>
      </div>

      <div className="link-card-arrow">
        <FiArrowUpRight />
      </div>
    </a>
  );
}

export default LinkCard;