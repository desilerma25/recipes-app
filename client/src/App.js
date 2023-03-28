import React, { useEffect, useState } from 'react';
import './index.css';
import Home from './components/Home';

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://recipes-app-production-ae73.up.railway.app/")    
    // fetch("http://localhost:8000")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <header>
          <h3 class="text-3xl font-bold underline">{message}</h3>
      </header>

      <h1> Welcome to the Recipes App! </h1>
      <h2> Select a Cuisine below to explore recipes.</h2>

      <Home />
    </div>
  );
}

export default App;
