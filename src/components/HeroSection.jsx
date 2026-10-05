import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  const circularCards = [
    // Left Side Cards (Larger & Prominent)
    {
      id: 1,
      position: 'left-top',
      title: 'Academics',
      img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      position: 'left-middle',
      title: 'Sports & Life',
      img: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      position: 'left-bottom',
      title: 'Global Exchange',
      img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80',
    },

    // Right Side Cards (Bold & Prominent)
    {
      id: 4,
      position: 'right-top',
      title: 'Campus Life',
      img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 5,
      position: 'right-middle',
      title: 'Innovation Lab',
      img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 6,
      position: 'right-bottom',
      title: 'Cultural Events',
      img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=500&q=80',
    },
  ];

  return (
    <section className="hero-container">
      {/* 6 Animated Circular Cards */}
      {circularCards.map((card) => (
        <div key={card.id} className={`circle-card ${card.position}`}>
          <img src={card.img} alt={card.title} className="circle-img" />
          <div className="card-overlay">
            <span>{card.title}</span>
          </div>
        </div>
      ))}

      {/* Central Banner Title */}
      <div className="central-title-wrapper">
        <h1 className="central-title">
          LET'S DO IT <span className="highlight-text">with Tulas</span>
        </h1>
      </div>
    </section>
  );
}