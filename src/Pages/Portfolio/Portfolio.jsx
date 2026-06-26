import { useState } from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

const PORTFOLIO_IMAGE = "/portfolio-placeholder.png";

const portfolioItems = [
  {
    title: "THE GILL EXIM",
    category: "Customer Website",
    description:
      "Premium Indian agro exports website — onions, ginger, chillies, lemons and pomegranates.",
    url: "https://the-gill-exim.vercel.app/",
  },
  {
    title: "BEEJAM",
    category: "Customer Website",
    description: "Professional business website built for BEEJAM.",
    url: "https://www.beejam.in/",
  },
  {
    title: "ELVA",
    category: "Customer Website",
    description: "Website factory helping local businesses grow online.",
    url: "https://www.elvatech.in/",
  },
  {
    title: "RBKVMUL",
    category: "Customer Website",
    description: "Professional website for RBKVMUL.",
    url: "https://www.rbkvmul.in/",
  },
  {
    title: "IndBhoomi",
    category: "Customer Website",
    description: "Real estate and land platform website for IndBhoomi.",
    url: "https://indbhoomi-preview.vercel.app/",
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Customer Websites", value: "Customer Website" },
];

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="portfolio-page">
      <div className="portfolio-container">
        <h1>Our Portfolio</h1>

        <p className="portfolio-subtitle">
          Explore live websites we&apos;ve built for our clients. Click any
          project to visit the site.
        </p>

        <div className="portfolio-filters">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={`filter-tag ${activeFilter === filter.value ? "filter-tag--active" : ""}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-card portfolio-card-link"
              >
                <div className="portfolio-image">
                  <img src={PORTFOLIO_IMAGE} alt={item.title} />
                </div>
                <div className="portfolio-info">
                  <span className="portfolio-category">{item.category}</span>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </a>
            ))
          ) : (
            <p className="portfolio-empty">No projects in this category yet.</p>
          )}
        </div>

        <div className="portfolio-cta">
          <p>Want a website like these for your business?</p>
          <Link to="/contact" className="btn-primary">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
