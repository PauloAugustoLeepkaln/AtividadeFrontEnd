export default function CartaoPessoa({ nome, idade, profissao }) {
    
   return (
    <div>
      <h2>{nome}</h2>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
    </div>
  );
}