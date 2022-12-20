import React, { useState, useEffect } from 'react';
import Twitter from 'twitter';

function TwitterPanel() {
  const [trendingTopics, setTrendingTopics] = useState([]);

  useEffect(() => {
    // Adicione suas credenciais da API do Twitter aqui
    const client = new Twitter({
      consumer_key: 'consumer_key',
      consumer_secret: 'consumer_secret',
      access_token_key: 'access_token_key',
      access_token_secret: 'access_token_secret'
    });

    client.get('trends/place', { id: 23424768 }, (error, tweets, response) => {
      if (error) {
        console.error(error);
      } else {
        setTrendingTopics(tweets[0].trends);
      }
    });
  }, []);

  return (
    <div>
      <h2>Assuntos mais comentados no Twitter </h2>
      <ul>
        {trendingTopics.map(topic => (
          <li key={topic.name}>{topic.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TwitterPanel;