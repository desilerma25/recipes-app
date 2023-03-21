import React, { useEffect, useState } from 'react';
import './index.css';

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://recipes-app-production-ae73.up.railway.app/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
          <h3 class="text-3xl font-bold underline">{message}</h3>
      </header>
    </div>
  );
}

export default App;
