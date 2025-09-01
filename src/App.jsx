import { useState } from 'react'
import './App.css'

function App() {

  var nome = "Zezão"
  var sobrenome = "Silva"

  const [name, setName] = useState("Valor inicial");
  const [lastName, setLastName] = useState("Sobrenome inicial");

  function mudarNome(event) {
    nome = event.target.value
    setName(event.target.value)
  }

  function mudarSobrenome(event) {
    sobrenome = event.target.value
    setLastName(event.target.value)
  }

  return (
    <>
      <p>Informe seu nome</p>
      <input onChange={mudarNome} />

      <p>Informe seu sobrenome</p>
      <input onChange={mudarSobrenome} />

      <p>Nome (variável normal): {nome}</p>
      <p>Sobrenome (variável normal): {sobrenome}</p>

      <p>Agora via useState: {name}</p>
      <p>Sobrenome via useState: {lastName}</p>
    </>
  )
}

export default App