import React, { useState } from "react";
import data from "./API data";
import Contacts from "./Contact";
import "./index.css";

function App() {
  const [people, setpeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h6>Contact List</h6>
        <Contacts people={people} />
      </section>
    </main>
  );
}

export default App;
