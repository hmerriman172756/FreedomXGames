body {
  background-image: url('freedomx_chalkboard_background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #111; /* Fallback color */
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  padding: 0;
  color: #ffffff;
  text-align: center;
  image-rendering: -webkit-optimize-contrast;
}

.container {
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.75);
}

.header-title {
  font-size: 3rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.games-blue {
  color: #00bfff;
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #00bfff;
  font-weight: bold;
}

.division-box {
  background-color: #1e1e2f;
  border-radius: 10px;
  padding: 1.5rem;
  margin: 1rem auto;
  width: 90%;
  max-width: 600px;
  border: 2px solid #207eff;
  box-shadow: 0 0 15px #ff2c2c;
}

.division-box:hover {
  transform: scale(1.02);
  transition: transform 0.2s ease-in-out;
  box-shadow: 0 0 20px #ff2c2c;
}

.division-box h2 {
  color: #ffffff;
}

button {
  background-color: #ff2c2c;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
}

button:hover, button:focus {
  background-color: #e02424;
  outline: 2px solid #ffffff;
  outline-offset: 2px;
}

button:disabled {
  background-color: #666;
  cursor: not-allowed;
}

footer {
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #e0e0e0;
}

@media (max-width: 600px) {
  .header-title {
    font-size: 2rem;
  }
  .subtitle {
    font-size: 1rem;
  }
  .division-box {
    padding: 1rem;
    width: 95%;
  }
  button {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
}
