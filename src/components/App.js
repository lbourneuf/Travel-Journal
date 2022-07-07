import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import data from "../data";
import everest from "../img/everest.png";

const cards = data.map((item) => {
  return <Card key={item.id} item={item} />;
});
function App() {
  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
