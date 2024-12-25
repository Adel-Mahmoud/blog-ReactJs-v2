import MasterLayout from "../../layouts/MasterLayout";

const About = () => {
  return (
    <>
      <MasterLayout>
        <main
          style={{
            marginTop: "80px",
            maxWidth: "800px",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "2rem",
          }}
        >
          <section className="about-section">
            <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
              About NewsHub
            </h1>

            <img
              src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167"
              alt="NewsHub Office"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "2rem",
              }}
            />

            <div className="about-content">
              <h2
                style={{ color: "var(--primary-color)", marginBottom: "1rem" }}
              >
                Our Story
              </h2>
              <p style={{ marginBottom: "1.5rem" }}>
                Founded in 2024, NewsHub has grown to become one of the most
                trusted sources of news and information. Our commitment to
                accurate, unbiased reporting has earned us the trust of millions
                of readers worldwide.
              </p>

              <h2
                style={{ color: "var(--primary-color)", marginBottom: "1rem" }}
              >
                Our Mission
              </h2>
              <p style={{ marginBottom: "1.5rem" }}>
                We believe in the power of informed citizens. Our mission is to
                provide accurate, timely, and comprehensive news coverage that
                helps our readers understand the world around them.
              </p>

              <h2 style={{ color: "var(--primary-color)", marginBottom: "1rem" }}>
                Our Team
              </h2>
              <p style={{ marginTop: "1.5rem" }}>
                Our team consists of experienced journalists, editors, and
                content creators who are passionate about delivering
                high-quality news coverage across various categories including
                politics, technology, sports, and entertainment.
              </p>
            </div>
          </section>
        </main>
      </MasterLayout>
    </>
  );
};

export default About;
