import Quadrado from "./Quadrado";

export default function Tabuleiro() {
  const linhas = 8;
  const colunas = 8;
  const gap = 2;

  return (
    <div style={{ background: "#fff", padding: 10 }}>
      {Array.from({ length: linhas }).map((_, linha) => (
        <div
          key={linha}
          style={{
            display: "flex",
            gap,
            justifyContent: "center",
          }}
        >
          {Array.from({ length: colunas }).map((_, col) => {
            const mostrar = (linha + col) % 2 === 1;
            return mostrar ? <Quadrado key={col} /> : <div key={col} style={{ width: 80, height: 80 }} />;
          })}
        </div>
      ))}
    </div>
  );
}