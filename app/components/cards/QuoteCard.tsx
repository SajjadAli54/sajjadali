import React, { useEffect, useState } from "react";

import "./quote.css";

function QuoteCard() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://quotes-api-self.vercel.app/quote")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.quote);
        setAuthor(data.author);
      })
      .catch((error) => console.error("Error fetching quote:", error));
  }, []);

  return (
    <div className="quote-section text-center my-5">
      <div className="quote-card">
        <h2 className="display-4">Quote of the Moment</h2>
        <blockquote className="blockquote">
          <p className="mb-0 quote-text">{quote}</p>
        </blockquote>
        <footer className="blockquote-footer">{author}</footer>
      </div>
    </div>
  );
}

export default QuoteCard;
