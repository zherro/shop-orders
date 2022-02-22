import react from "react"

// função que executa uma ação
const Text = () => {

  // declara variavel 
  // java script por padrão não necessita ponto e virgula para terminar uma expressão
  let sText = 'arrow function'
  return sText
}

// componente React
const Api = () => {
   return <>
    { /* binding para execução de codigo java script */ }
    {  Text()  }
   </>
}

// exportamos o componente
export default Api
