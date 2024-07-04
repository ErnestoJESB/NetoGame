import React, { useState, useEffect, useCallback } from "react";
function Memorama() {
  const [cards, setCards] = useState<
    { id: number; name: string; flipped: boolean }[]
  >([]);

  useEffect(() => {
    const card = [
      { id: 1, name: "perro", flipped: false },
      { id: 2, name: "perro", flipped: false },
      { id: 3, name: "gato", flipped: false },
      { id: 4, name: "gato", flipped: false },
      { id: 5, name: "vaca", flipped: false },
      { id: 6, name: "vaca", flipped: false },
      { id: 7, name: "cerdo", flipped: false },
      { id: 8, name: "cerdo", flipped: false },
      { id: 9, name: "pollo", flipped: false },
      { id: 10, name: "pollo", flipped: false },
      { id: 11, name: "caballo", flipped: false },
      { id: 12, name: "caballo", flipped: false },
    ];
    const shuffledCards = card.sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }, []);

  const handleFlip = useCallback(
    (id: number) => {
      setCards((cards) =>
        cards.map((card) =>
          card.id === id ? { ...card, flipped: !card.flipped } : card
        )
      );
    },
    [setCards]
  );

  const checkForMatch = useCallback(() => {
    const flippedCards = cards.filter((card) => card.flipped);
    if (flippedCards.length === 2) {
      if (flippedCards[0].name === flippedCards[1].name) {
        setCards((cards) =>
          cards.map((card) =>
            card.name === flippedCards[0].name
              ? { ...card, flipped: true }
              : card
          )
        );
      } else {
        setTimeout(() => {
          setCards((cards) =>
            cards.map((card) =>
              card.flipped ? { ...card, flipped: false } : card
            )
          );
        }, 1000);
      }
    }
  }, [cards, setCards]);

  useEffect(() => {
    checkForMatch();
  }, [cards, checkForMatch]);

  useEffect(() => {
    const hasFlippedAll = cards.every((card) => card.flipped);
    if (hasFlippedAll) {
      alert("Ganaste");
    }
  }, [cards]);

  return (
    <div>
      <h1>Memorama</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleFlip(card.id)}
            style={{
              height: "100px",
              backgroundColor: card.flipped ? "lightblue" : "lightgray",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            {card.flipped ? card.name : "X"}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Memorama;
