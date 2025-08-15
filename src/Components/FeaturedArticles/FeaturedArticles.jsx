import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiUser, FiCalendar } from "react-icons/fi";
// ⬇️ Adjust this import path to wherever your articles data lives
import articles from "../../Pages/Articles/articles";
import "./FeaturedArticles.css";

const pickThree = (list) => {
  if (!Array.isArray(list) || list.length === 0) return [];
  const arr = [...list];
  // Fisher–Yates shuffle (deterministic enough for UI; runs once)
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, 3);
};

const FeaturedArticles = ({ title = "From the Blog" }) => {
  const picks = useMemo(() => pickThree(articles), []);

  if (!picks.length) return null;

  return (
    <section className="featured-articles">
      <div className="fa-shell">
        <div className="fa-head">
          <h2 className="fa-title">{title}</h2>
          <Link to="/articles" className="fa-all">
            View all articles <FiArrowRight />
          </Link>
        </div>

        <div className="fa-grid">
          {picks.map((a) => (
            <article key={a.id} className="fa-card">
              <Link to={`/articles/${a.id}`} className="fa-link" aria-label={a.title}>
                <div className="fa-media">
                  {/* fallback color if no image */}
                  {a.image ? (
                    <img src={a.image} alt={a.alt || a.title} loading="lazy" />
                  ) : (
                    <div className="fa-media-fallback" aria-hidden="true" />
                  )}
                  <div className="fa-media-gradient" />
                </div>

                <div className="fa-body">
                  <h3 className="fa-card-title">{a.title}</h3>
                  {a.excerpt && <p className="fa-excerpt">{a.excerpt}</p>}

                  <div className="fa-meta">
                    <span className="fa-meta-item">
                      <FiUser /> {a.author || "Maggie’s Spa"}
                    </span>
                    {a.date && (
                      <span className="fa-meta-item">
                        <FiCalendar /> {a.date}
                      </span>
                    )}
                  </div>

                  <div className="fa-cta">
                    <span className="fa-btn">
                      Read article <FiArrowRight />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
