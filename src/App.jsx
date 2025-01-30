import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Formulario from './components/Formulario'
import Time from './components/Time'
import Rodape from './components/Rodape'


function App() {

  const Times = [
    {
      nome: "Programação",
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: "Front-end",
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: "Data Science",
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: "Devops",
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: "UX e Design",
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      nome: "Mobile",
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const adicionarColaborador = (colaborador) =>{
    // debugger
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <>
      <Banner/>
      <Formulario times={Times.map(time => time.nome)} colaboradorCadastrado={colaborador => adicionarColaborador(colaborador)}/>
      { Times.map (time => <Time 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      key={time.nome} 
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      // o filter serve para que o colaborador apareça somente na lista de times igual a do time selecionado
      />)}
      <Rodape/>
    </>
    
  )
}

export default App
