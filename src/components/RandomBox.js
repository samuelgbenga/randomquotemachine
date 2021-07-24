import React, { useState } from "react";
import { FaTwitter, FaFacebook, FaQuoteLeft } from "react-icons/fa";
import axios from "axios";

const RandomBox = ({ getColor }) => {
  const colors = [
    "red",
    "blue",
    "orange",
    "grey",
    "indigo",
    "purple",
    "green",
    "yellow",
    "brown",
    "pink",
  ];
  const [color, setColor] = useState("blue");
  const [quote, setQuote] = useState({});
  const [toggle, setToggle] = useState("false");
  const handleOnClick = () => {
    var options = {
      method: "GET",
      url: "https://quotes15.p.rapidapi.com/quotes/random/",
      headers: {
        "x-rapidapi-key": "86ec4e722cmshb326e4f824b391cp1c67c7jsne42429987b0c",
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setQuote(response.data);
      })
      .then(() => {
        setColor(colors[Math.floor(Math.random() * colors.length)]);
      })
      .catch(function (error) {
        console.error(error);
      });
    return getColor(color);
  };
  const handleReadmore = () => {
    setToggle(!toggle);
  };
  var something = quote.content
    ? quote.content.substring(0, 150)
    : "loading...";
  return (
    <div className="rb-container">
      <div className="quote">
        {quote.content ? (
          <p>
            <FaQuoteLeft />
            &nbsp;
            {toggle ? something : quote.content}
            {quote.content.length > 149 && (
              <button
                className={toggle ? "readmore" : "readless"}
                onClick={handleReadmore}
              >
                <span> </span>
              </button>
            )}
          </p>
        ) : (
          <p>
            <FaQuoteLeft />
            &nbsp;Everybody is a genius. But if you judge a fish by its ability
            to climb a tree, it will live its whole life believing that it is
            stupid.
          </p>
        )}
      </div>
      <div>
        {quote.originator ? (
          <span className="name">- {quote.originator.name}</span>
        ) : (
          <span className="name">- Albert Einstein</span>
        )}
      </div>

      <div className={`rb-container-btm ${color}s`}>
        <div className="icon-box">
          <div>
            <FaTwitter />
          </div>
          <div>
            <FaFacebook />
          </div>
        </div>
        <div>
          <button onClick={handleOnClick}>Random Qoute</button>
        </div>
      </div>
    </div>
  );
};

export default RandomBox;
