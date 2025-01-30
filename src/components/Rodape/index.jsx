import './Rodape.css'

const Rodape = () => {
  return (
    <footer>
        <div className="redesSociais">
            <img src="../../../public/imagens/fb.png" alt="Facebook" />
            <img src="../../../public/imagens/tw.png" alt="Twitter" />
            <img src="../../../public/imagens/ig.png" alt="Instagram" />
        </div>
        <div className="logo">
            <img src="../../../public/imagens/logo.png" alt="Logo" />
        </div>

        <div className="dev">
            <p>Desenvolvido por Kauana.</p>
        </div>
    </footer>
  )
}

export default Rodape