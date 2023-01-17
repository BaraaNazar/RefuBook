import React, { useState, useEffect } from 'react';

function RandomQuotes() {
  const [quote, setQuote] = useState({});
  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => setQuote(data));
  }, []);
  return (
    <div className="text-lg text-center m-5">
      <p>{quote.content}</p>
      <h1 className="font-bold">- {quote.author}</h1>
    </div>
  );
}

export default RandomQuotes;
