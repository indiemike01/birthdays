import React, { useState } from "react";
import { data } from "./data.js";

const Box = () => {
  const [people, setPeople] = useState(data);
  const [birthdays, setBirthdays] = useState(5);

  const handleClick = () => {
    setPeople([]);
    setBirthdays(0);
  };

  return (
    <div className="container">
      <h1>{birthdays} birthdays today</h1>
      {people.map((person) => {
        const { id, name, age, img } = person;
        return (
          <article className="person">
            <img src={img} alt="" />
            <div>
              <h2>{name}</h2>
              <h2>{age} years</h2>
            </div>
          </article>
        );
      })}
      <button className="" onClick={handleClick}>
        Clear all
      </button>
    </div>
  );
};

export default Box;
