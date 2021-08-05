import React from "react";
import { Cat, CAT_URL } from "../api";

type Prop = {
  cats: Cat[];
};

const Tile: React.FC<Prop> = ({ cats }) => (
  <>
    <h1>Your kittens.</h1>
    <div>
      {cats.map((cat: Cat) => (
        <div key={cat.id}>
          <img className="img-tile" src={CAT_URL + "/" + cat.id} alt="" />
          <div className="tags">
            {cat.tags.map((tag: string) => (
              <p className="tag-img">{tag}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  </>
);

export default Tile;
