import React from 'react';

function Article({ title, date, preview, minutesToRead }) {
  // Bonus Feature: 'Minutes to Read'
  const coffeeCups = Math.ceil(minutesToRead / 5);
  const bentoBoxes = Math.ceil(minutesToRead / 10);

  const renderCoffeeCups = () => Array(coffeeCups).fill("☕️").join(' ');
  const renderBentoBoxes = () => Array(bentoBoxes).fill("🍱").join(' ');

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>
        {minutesToRead <= 30
          ? renderCoffeeCups() + ` ${minutesToRead} min read`
          : renderBentoBoxes() + ` ${minutesToRead} min read`
        }
      </p>
    </article>
  );
}

export default Article;