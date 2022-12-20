import React, { useState, useEffect } from 'react';
import Brasileirao from 'campeonato-brasileiro-api';

function BrasileiraoPanel() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const client = new Brasileirao({
      apiKey: 'api_key'
    });

    client.getFixtures({ league: 'primera' }).then(response => {
      setEvents(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Eventos de futebol</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            {event.homeTeam.name} vs {event.awayTeam.name} on {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
}