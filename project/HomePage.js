import React from 'react';
import './HomePage.css'; // Import the corresponding CSS for styling

function HomePage({ onLogout }) {
  const movies = [
    {
      title: 'Vaaranam Aayiram',
      poster: 'https://m.media-amazon.com/images/S/pv-target-images/c3de765e8089aad770556c2871641da2570af2c8fc01d38ffc0a2ddcb5dae596.jpg',
      description: 'Vaaranam Aayiram is a 2008 Tamil film about a father and sons relationship and how they help each other through lifes challenges. ',
    },
    {
      title: 'Mankatha',
      poster: 'https://sund-images.sunnxt.com/31594/1000x1500_be1c6c1e-cd91-4e19-a189-ec7fa19c1d59.jpg',
      description: 'A suspended cop helps a group of four men rob cricket betting money amounting to 500 crores INR',
    },
    {
      title: 'Ok Kanmani',
      poster: 'https://m.media-amazon.com/images/S/pv-target-images/e21a6b38670c9d1fb4720f7cd28be13ad8d31a5c600f088bb0bd557176c1b4a5.jpg',
      description: 'O Kadhal Kanmani is a movie about a couple who live together without commitment, but decide to get married when they face an imminent separation.',
    },
    {
      title: 'Nayakan',
      poster: 'https://m.media-amazon.com/images/M/MV5BOTc2YThmY2EtYmI1ZC00YTk4LWE3NTUtOGNhNTAzNDMxMWFmXkEyXkFqcGc@._V1_.jpg',
      description: 'It tells the story of Velu Nayakar, a man who becomes a vigilante in response to social circumstances.',
    },
  ];

  return (
    <div className="home-page">
      <header className="header">
        <h1>Welcome to Movie Ticket Booking</h1>
        <p>Select a movie and book your tickets!</p>
      </header>

      <div className="movie-list">
        {movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <img src={movie.poster} alt={`${movie.title} poster`} className="movie-poster" />
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <button>Book Tickets</button>
          </div>
        ))}
      </div>

      <footer className="footer">
        <button className="logout-button" onClick={onLogout}>Logout</button>
      </footer>
    </div>
  );
}

export default HomePage;
