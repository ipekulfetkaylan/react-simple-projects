import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person, i) => {
        return (
          <div className="person-container">
            <img className="person-image" src={person.image} alt="" />
            <div className="person-info">
              <span>{person.name}</span>
              <span>{person.age}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
