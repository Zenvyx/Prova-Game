export default function Character({ data, isHero, onAction, isHeroTurn }) {
  const lifePercent = Math.max(0, data.life) + "%";

  return (
    <div className="character">
      <div className="life-bar">
        <div className="life-fill" style={{ width: lifePercent }}></div>
        <span className="life-text">{data.life}</span>
      </div>

      <div className="sprite">
        <img
          src={isHero ? "/heroi1.png" : "/vilao1.png"}
          alt={isHero ? "Arion, o Guardião" : "Drakar, o Sombrio"}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderRadius: "5px"
          }}
        />
      </div>

      <h1>{isHero ? "Arion, o Guardião" : "Drakar, o Sombrio"}</h1>

      {isHero && onAction && (
        <div className="actions">
          <button disabled={!isHeroTurn} onClick={() => onAction("attack")}>Atacar</button>
          <button disabled={!isHeroTurn} onClick={() => onAction("defense")}>Defender</button>
          <button disabled={!isHeroTurn} onClick={() => onAction("usePotion")}>Usar Poção</button>
          <button disabled={!isHeroTurn} onClick={() => onAction("flee")}>Correr</button>
        </div>
      )}
    </div>
  );
}
