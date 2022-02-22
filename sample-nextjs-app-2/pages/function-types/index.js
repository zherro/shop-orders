import react from "react"

// função que executa uma ação
function Text() {

  // declara variavel 
  // java script por padrão não necessita ponto e virgula para terminar uma expressão
  let sText = 'Classic function';
  return sText;
}

// componente React
function Api() {
   return <>
    { /* binding para execução de codigo java script */ }
    {  Text()  }
   </>
}

// exportamos o componente
export default Api;
