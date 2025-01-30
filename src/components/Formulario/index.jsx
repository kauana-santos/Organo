import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"


const Formulario = (props) => {

  const [nome, setNome] = useState("")
  const [cargo, setCargo] = useState("")
  const [imagem, setImagem] = useState("")
  const [time, setTime] = useState("")

  const Salvar = (e) => {
    e.preventDefault()

    props.colaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })

    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  
  }

  return (
    <section className="formulario">
        <form onSubmit={Salvar}>
            <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
        obrigatorio={true} 
        label="Nome" 
        placeholder="Digite seu nome"
        valor={nome}
        aoAlterado={valor => setNome(valor)}
        />

        <CampoTexto 
        obrigatorio={true} 
        label="Cargo" 
        placeholder="Digite seu cargo"
        valor={cargo}
        aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto 
        obrigatorio={true} 
        label="Imagem" 
        placeholder="Digite o endereço da imagem"
        valor={imagem}
        aoAlterado={valor => setImagem(valor)}
        />

        <ListaSuspensa 
        
        label={"Times"} 
        itens={props.times}
        valor={time}
        aoAlterado={valor => setTime(valor)}
        />

        <Botao texto="Criar cards"/>
        </form>
    </section>
  )
}

export default Formulario