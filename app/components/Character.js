export default function Character({
  data,
  isHero,
  onAction,
  isHeroTurn,
}) {

  const lifePercent = Math.max(0, data.life) + "%";

  const basePath = process.env.NODE_ENV === "production"
    ? "/prova-jogo"
    : "";

  return (
    <div className="character">

      <div className="life-bar">
        <div
          className="life-fill"
          style={{ width: lifePercent }}
        />

        <span className="life-text">
          {data.life}
        </span>
      </div>

      <div className="sprite">
        <img
          src={
            isHero
              ? `${basePath}/heroi1.png`
              : `${basePath}/vilao1.png`
          }
          alt={
            isHero
              ? "Arion, o Guardião"
              : "Drakar, o Sombrio"
          }
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderRadius: "5px",
          }}
        />
      </div>

      <h1>
        {isHero
          ? "Arion, o Guardião"
          : "Drakar, o Sombrio"}
      </h1>

      {isHero && onAction && (
        <div className="actions">

          <button
            disabled={!isHeroTurn}
            onClick={() => onAction("attack")}
          >
            Atacar
          </button>

          <button
            disabled={!isHeroTurn}
            onClick={() => onAction("defense")}
          >
            Defender
          </button>

          <button
            disabled={!isHeroTurn}
            onClick={() => onAction("usePotion")}
          >
            Usar Poção
          </button>

          <button
            disabled={!isHeroTurn}
            onClick={() => onAction("flee")}
          >
            Correr
          </button>

        </div>
      )}
    </div>
  );
}
