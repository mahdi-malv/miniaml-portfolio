import content from "../content.json";

export default function Home() {
  return (
    <main className="container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-image">
            <img
              src={content.image}
              alt={content.name}
              className="profile-image"
            />
          </div>
          <div className="hero-text">
            <h1 className="name">{content.name}</h1>
            <h2 className="title">{content.title}</h2>
            <p className="tagline">{content.tagline}</p>
            <p className="bio">{content.bio}</p>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      {content.sections.map((section, index) => (
        <section key={index} className="section">
          <h3 className="section-title">{section.title}</h3>
          <ul className="section-list">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex} className="section-item">
                {item}
              </li>
            ))}
          </ul>
        </section>
      ))}

      {/* Contact Section */}
      <section className="contact">
        <h3 className="section-title">Get in Touch</h3>
        <div className="contact-content">
          <a href={`mailto:${content.contact.email}`} className="email">
            {content.contact.email}
          </a>
          <div className="social-links">
            {content.contact.social.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} {content.name}. All rights reserved.</p>
      </footer>
    </main>
  );
}

