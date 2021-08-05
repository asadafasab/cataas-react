import React, { useState, useEffect } from "react";
import "./App.css";
import Image from "./components/Image";
import Tag from "./components/Tag";
import Tile from "./components/Tile";
import { fetchCats, Cat, fetchTags, CAT_URL } from "./api";
import nf from "./imgs/nf.png";

const NUMBER_OF_CATS = 8;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [random, setRandom] = useState(false);
  const [cats, setCats] = useState<Cat[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const getTags = async () => {
    setLoading(true);
    const newTags = await fetchTags();
    setTags(newTags);
    setLoading(false);
  };

  useEffect(() => {
    if (tags.length === 0) {
      getTags();
    }
    console.log("cats", cats);
  }, []);

  const getRandomCat = () => {
    setCats([]);
    setRandom(true);
  };
  const getCatWithTags = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setLoading(true);

    const tag = e.currentTarget.value;
    const newCats = await fetchCats(NUMBER_OF_CATS, tag);
    setCats(newCats);

    setRandom(false);
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>CATS</h1>

      {!loading && random && (
        <div>
          <Image className="img-tile" src={CAT_URL} placeholder={nf} />
        </div>
      )}
      {cats.length !== 0 && <Tile cats={cats} />}
      <button onClick={getRandomCat} className="mt-3 btn">
        Show Random Cat
      </button>
      <h3>Or</h3>
      {!loading && tags.length !== 0 && (
        <Tag names={tags} callback={getCatWithTags} />
      )}
      {loading ? <p>Loading...</p> : null}
      <h2>
        Thanks to The Author of.
        <a href="https://cataas.com">Cataas API</a>
      </h2>
    </div>
  );
};

export default App;
