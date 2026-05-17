"use client";

import { useState } from "react";
import Character from "../components/Character";

export default function GameManager() {
  const [hero, setHero] = useState({ name: "Herói", life: 100, maxLife: 100, potions: 2 });
  const [villain, setVillain] = useState({ name: "Vilão", life: 100, maxLife: 100 });
  const [isHeroTurn, setIsHeroTurn] = useState(true);
  const [message, setMessage] = useState("");
  const [defending, setDefending] = useState(false);
  const [fled, setFled] = useState(false); 

  const isGameOver = hero.life <= 0 || villain.life <= 0 || fled;

  const handleHeroAction = (action) => {
    if (!isHeroTurn || isGameOver) return;

    switch (action) {
      case "attack":
        setVillain((v) => ({ ...v, life: Math.max(0, v.life - 20) }));
        setMessage("Você atacou causando 20 de dano.");
        break;
      case "defense":
        setDefending(true);
        setMessage("Você se defendeu e reduziu o dano do próximo ataque.");
        break;
      case "usePotion":
        if (hero.potions > 0) {
          setHero((h) => ({
            ...h,
            life: Math.min(h.maxLife, h.life + 30),
            potions: h.potions - 1,
          }));
          setMessage("Você usou uma poção e recuperou 30 de vida.");
        } else {
          setMessage("Você não tem mais poções!");
          return;
        }
        break;
      case "flee":
        setMessage("Você fugiu da batalha!");
        setFled(true);
        return;
    }

    setIsHeroTurn(false);
    setTimeout(() => {
      if (villain.life > 0) {
        const damage = defending ? 5 : 15;
        setHero((h) => ({ ...h, life: Math.max(0, h.life - damage) }));
        setMessage(
          defending
            ? `Vilão atacou, mas você defendeu e recebeu apenas ${damage} de dano.`
            : `Vilão atacou causando ${damage} de dano.`
        );
        setDefending(false);
      }
      setIsHeroTurn(true);
    }, 1000);
  };

  const restartGame = () => {
    setHero({ name: "Herói", life: 100, maxLife: 100, potions: 2 });
    setVillain({ name: "Vilão", life: 100, maxLife: 100 });
    setIsHeroTurn(true);
    setMessage("");
    setDefending(false);
    setFled(false);
  };

  return (
    <div>
      <div className="battlefield">
        <Character
          data={hero}
          isHero={true}
          onAction={handleHeroAction}
          isHeroTurn={isHeroTurn && !isGameOver}
        />
        <Character data={villain} isHero={false} />
      </div>

      <div className="message-box">
        <h2>{message}</h2>
        {isGameOver && !fled && (
          <h1>
            {hero.life <= 0 ? "Você perdeu para o vilão..." : "Você venceu o vilão!"}
          </h1>
        )}
        {fled && (
          <button onClick={restartGame} className="restart-btn">
            Recomeçar Jogo
          </button>
        )}
      </div>
    </div>
  );
}
