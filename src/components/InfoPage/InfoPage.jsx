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
      <h2>Challenges</h2>
      <ul>
        <li>
          The toughest 
          <br/>challenge I 
          <br/>overcame was 
          <br/>synchronizing all the 
          <br/>users items list so they 
          <br/>can have the ability to edit 
          <br/>and delete .
        </li>
      </ul>
      <h2>What's Next</h2>
      <ul>
        <li>
          Now that users can buy and sell their 
          <br/>equipments, the next challenge I’d love to tackle is 
          <br/>ability to add golfing accessories. Not only can user buy 
          <br/>and sell golf clubs, they can also purchase all necessary 
          <br/>items to start golfing. 
        </li>
      </ul>
    </div>
  );
}

export default InfoPage;
