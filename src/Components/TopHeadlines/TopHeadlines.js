import React, { useEffect, useState } from "react";
import News from "../News/News";

const TopHeadlines = () => {
  const [headlines, setHeadlines] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=47b2afa717d64c3390a635f18a0e62ef"
    )
      .then((res) => res.json())
      .then((data) => setHeadlines(data.articles));
  }, []);
  //   console.log(headlines);
  return (
    <div>
      {headlines.map((nk) => (
        <News key={Math.random(2.3)} allNews={nk} />
      ))}
    </div>
  );
};

export default TopHeadlines;
