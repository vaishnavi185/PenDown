import React from 'react';

function Card({ title, text }) {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <button class='btn btn-primary'>download</button>
        </div>
      </div>
    </div>
  );
}

export default function CardGrid() {
  const cards = [
    { title: 'Card title 1', text: 'This is a longer card with supporting text below as a natural lead-in to additional content. ' },
    { title: 'Card title 2', text: 'This is a longer card with supporting text below as a natural lead-in to additional content. ' },
    { title: 'Card title 3', text: 'This is a longer card with supporting text below as a natural lead-in to additional content.' },
    { title: 'Card title 4', text: 'This is a longer card with supporting text below as a natural lead-in to additional content. ' },
  ];

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} text={card.text} />
      ))}
    </div>
  );
}
