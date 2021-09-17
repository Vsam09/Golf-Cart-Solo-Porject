import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <h2>Technology</h2>
      <ul>
        <li>Node.JS</li>
        <li>Express</li>
        <li>React</li>
        <li>Saga</li>
        <li>Material UI</li>
        <li>Postgres</li>
      </ul>
    </div>
  );
}

export default InfoPage;
