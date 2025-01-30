import './ListaSuspensa.css'

const ListaSuspensa = ({label, itens, valor, aoAlterado}) => {
  return (
    <div className='Lista-suspensa'>
        <label>{label}</label>
        <select 
        onChange={e => aoAlterado(e.target.value)} 
        value = {valor}
        >
          <option value=""></option>
            {itens.map(
                item => <option key={item}>{item}</option>
                )
            }    {/* Para cada item aparece uma option */}
        </select>
    </div>
  )
}

export default ListaSuspensa