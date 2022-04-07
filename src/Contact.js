import React from "react";
import "./index.css";

function Contacts({ people }) {
  return (
    <>
      {people.map((person) => {
        const { id, first_name, last_name, avatar } = person;
        return (
          <div key={id} className="person">
            <img src={avatar} alt={first_name} />
            <div>
              <h4>
                {first_name} {last_name}
              </h4>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Contacts;
