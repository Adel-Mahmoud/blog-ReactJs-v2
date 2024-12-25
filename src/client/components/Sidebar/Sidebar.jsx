import React, { useState, useEffect } from "react";

const slides = [
  {
    image:
      "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    title: "Discover Nature's Beauty",
    description: "Explore the wonders of the natural world through our curated articles.",
  },
  {
    image:
      "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    title: "Tech Trends",
    description: "Stay updated with the latest in technology and innovation.",
  },
  {
    image:
      "https://images.pexels.com/photos/628776/pexels-photo-628776.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    title: "Culinary Adventures",
    description: "Embark on a journey through flavors from around the world.",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to update slide based on direction
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      (prevSlide - 1 + slides.length) % slides.length
    );
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000); // Slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div
        className="slides"
        style={{
          display: "flex",
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide"
            style={{
              minWidth: "100%",
              height: "400px",
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="slide-content" style={{ color: "white", textAlign: "center" }}>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="slider-btn prev" onClick={goToPrevSlide}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="slider-btn next" onClick={goToNextSlide}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Slider;
