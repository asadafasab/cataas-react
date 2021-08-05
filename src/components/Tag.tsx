import React from "react";
type Prop = {
  names: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Tag: React.FC<Prop> = ({ names, callback }) => (
  <>
    <h3>Select from Tags</h3>
    <div>
      {names.map((name) => (
        <button className="btn" key={name} value={name} onClick={callback}>
          {name}
        </button>
      ))}
    </div>
  </>
);

export default Tag;
