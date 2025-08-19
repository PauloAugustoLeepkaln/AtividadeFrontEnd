import Produto from "./Produto";
import CartaoPessoa from "./CartaoPessoa";

export default function App() {
  return (
       <div style={{padding: "30px"}}>
      <h1>Componentes</h1>

      <h2>Produtos</h2>
      <Produto nome="arroz" preco="10,00"/>
      <Produto nome="feijao" preco="8,00"/>
      <Produto nome="macarrão" preco="5,00"/>

      <h2>Pessoas</h2>
      <CartaoPessoa nome="maria" idade={25} profissao="designer"/>
      <CartaoPessoa nome="joão" idade={30} profissao="pedreiro"/>
      <CartaoPessoa nome="ana" idade={23} profissao="uber"/>
     </div>
  )
   
  
}