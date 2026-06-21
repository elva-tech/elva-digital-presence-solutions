import "./Industries.css";

const industries = [
  {
    name: "Clinics",
    description:
      "Professional websites for clinics with appointment inquiry forms, service listings, and Google Maps integration.",
    example: "Showcase treatments, doctor profiles, and patient contact options.",
  },
  {
    name: "Hospitals",
    description:
      "Comprehensive hospital websites with department information, emergency contacts, and location details.",
    example: "Build trust with patients through a credible online presence.",
  },
  {
    name: "Builders",
    description:
      "Showcase your projects, portfolio, and contact information to attract new clients.",
    example: "Display completed projects and ongoing developments.",
  },
  {
    name: "Schools",
    description:
      "Inform parents and students with admissions info, facilities, and school updates.",
    example: "Professional school websites with inquiry forms and maps.",
  },
  {
    name: "Coaching Centers",
    description:
      "Highlight courses, faculty, and enrollment options to attract more students.",
    example: "Course listings with WhatsApp inquiry integration.",
  },
  {
    name: "Chartered Accountants",
    description:
      "Establish credibility with a professional website showcasing your services and expertise.",
    example: "Service pages with secure contact and consultation forms.",
  },
  {
    name: "Architects",
    description:
      "Display your portfolio and design philosophy to win new projects.",
    example: "Visual portfolio galleries with project showcases.",
  },
  {
    name: "Interior Designers",
    description:
      "Showcase your design work and attract clients with a stunning online portfolio.",
    example: "Before and after galleries with inquiry forms.",
  },
  {
    name: "Gyms",
    description:
      "Promote memberships, classes, and facilities to grow your fitness business.",
    example: "Class schedules with WhatsApp membership inquiries.",
  },
];

function Industries() {
  return (
    <section className="industries-page">
      <div className="industries-container">
        <h1>Industries We Serve</h1>

        <p className="industries-subtitle">
          Dedicated solutions for local businesses across multiple sectors.
          Each industry gets a tailored approach with relevant examples.
        </p>

        <div className="industries-grid">
          {industries.map((industry) => (
            <div key={industry.name} className="industry-card">
              <h2>{industry.name}</h2>
              <p className="industry-desc">{industry.description}</p>
              <p className="industry-example">
                <strong>Example:</strong> {industry.example}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
