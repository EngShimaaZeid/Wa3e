import React from "react";
import Card from "./Card"; // Ensure you have the Tailwind-based Card component

const CardContainer = () => {
  const cards = [
    {
      image: require("../assets/card1.jpg"),
      title: "Card 1",
      description: "This is a description of Card 1.",
      buttonText: "Learn More",
    },
    {
      image: require("../assets/card2.jpg"),
      title: "Card 2",
      description: "This is a description of Card 2.",
      buttonText: "Learn More",
    },
    {
      image: require("../assets/card3.jpg"),
      title: "Card 3",
      description: "This is a description of Card 3.",
      buttonText: "Learn More",
    },
  ];

  return (
    <div className="container mx-auto px-16 py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Services</h1>
      <div className="flex flex-wrap justify-center gap-3">
        {cards.map((card, index) => (
          <div className="w-full sm:w-auto" key={index}>
            <Card
              image={card.image}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
