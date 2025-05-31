import React, { useState, useEffect } from 'react';
import './App.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import foodImages from './foodImages.json';
import menuItems from './menuItems';

function GalleryModal({ images, isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="ModalOverlay" onClick={onClose}>
      <div className="ModalContent" onClick={e => e.stopPropagation()}>
        <button className="ModalClose" onClick={onClose}>&times;</button>
        <div className="ModalImages">
          {images.map((src, idx) => (
            <img key={idx} src={src} alt={`Modal Gallery ${idx + 1}`} className="ModalImage" />
          ))}
        </div>
      </div>
    </div>
  );
}

function GalleryCarousel({ onImageClick }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="GallerySlick">
      {foodImages.map((src, idx) => (
        <div key={idx}>
          <img src={src} alt={`Gallery ${idx + 1}`} className="GalleryCarousel-img" onClick={onImageClick} style={{ cursor: 'pointer' }} />
        </div>
      ))}
    </Slider>
  );
}

function MenuModal({ items, isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="ModalOverlay" onClick={onClose}>
      <div className="ModalContent MenuModalContent" onClick={e => e.stopPropagation()}>
        <button className="ModalClose" onClick={onClose}>&times;</button>
        <h2 className="MenuModalTitle">תפריט</h2>
        <div className="MenuItems">
          {items.map((item, idx) => (
            <div key={idx} className="MenuItem">
              <div className="MenuItemHeader">
                <span className="MenuItemName">{item.name}</span>
                <span className="MenuItemPrice">{item.price}</span>
              </div>
              <div className="MenuItemDesc">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src="images/logo/logo.jpg" className="App-logo" alt="Coffee Shop Logo" />
        <h1>Cafe Rooka - קפה רוקא</h1>
        <p>עגלת קפה כפרית 🌲<br />קיבוץ עין המפרץ 📍</p>
        <button className="MenuButton" onClick={() => setMenuOpen(true)}>תפריט</button>
      </header>
      <section className="Gallery">
        <h2>Our Food & Place</h2>
        <GalleryCarousel onImageClick={() => setModalOpen(true)} />
      </section>
      <GalleryModal images={foodImages} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <MenuModal items={menuItems} isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <section className="Contact">
        <div className="Contact-line"><span role="img" aria-label="Address">📍</span> קיבוץ עין המפרץ</div>
        <div className="Contact-line"><span role="img" aria-label="Clock">🕒</span> שישי - שבת 9:00-14:00</div>
        <div className="Contact-line Contact-instagram">
          <span role="img" aria-label="Instagram">📸</span> Instagram: <a href="https://www.instagram.com/caferooka/" target="_blank" rel="noopener noreferrer">@caferooka</a>
        </div>
        <div className="Contact-line"><span role="img" aria-label="Phone">📞</span> ליצירת קשר: 050-2266538</div>
      </section>
      <section className="Map">
        <div className="Map-frame">
          <iframe
            title="Cafe Rooka Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.857964857389!2d35.0963405!3d32.9023018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dc9518cdafc77%3A0x55f8f474bb8750a6!2sCafe%20Rooka%20-%20%D7%A7%D7%A4%D7%94%20%D7%A8%D7%95%D7%A7%D7%90%E2%80%AD!5e0!3m2!1sen!2sil!4v1718030000000!5m2!1sen!2sil"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default App;
