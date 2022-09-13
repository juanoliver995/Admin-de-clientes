import { useState, useEffect } from 'react'
import ErrorMessage from './ErrorMessage'

const Form = ({ clientes, setClientes, cliente, setCliente }) => {
  
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [dia, setDia] = useState('')
  const [hora, setHora] = useState('')
  const [descripcion, setDescipcion] = useState('')
  const [error, setError] = useState(false)

  useEffect(()=>{
    if( Object.keys(cliente).length > 0 ) {
      setNombre(cliente.nombre)
      setEmail(cliente.email)
      setTelefono(cliente.telefono)
      setDia(cliente.dia)
      setHora(cliente.hora)
      setDescipcion(cliente.descripcion)
    }

  },[cliente])

  const generateId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    
    if([nombre, email, telefono, dia, hora, descripcion].includes('')){
      setError(true)
      return
    } 

    setError(false)

    const objetocliente = {
      nombre,
      email,
      telefono,
      dia,
      hora,
      descripcion,
    }

    if(cliente.id){
      objetocliente.id = cliente.id
      const updatesClients = clientes.map((clienteState) => clienteState.id === cliente.id ? objetocliente : clienteState)
      setClientes(updatesClients)
      setCliente({})
    } else{
      objetocliente.id = generateId()
      setClientes([...clientes, objetocliente])
    }
    
    
    setNombre('')
    setEmail('')
    setTelefono('')
    setDia('')
    setHora('')
    setDescipcion('')
  }

  return (
    <div className="md:w-2/5 container px-2 my-5">
      <h2 className=" text-center font-black text-2xl mb-3">Agregar Clientes</h2>
      <p className="text-center font-normal text-lg">Agrega y Administra tus clientes</p>
      <div className="bg-white px-8 py-5 shadow-md rounded-sm my-5">
        <form className="mt-3" onSubmit={handleSubmit}>
          <div className="my-2">
            <label htmlFor="nombre" className="block font-bold uppercase">Nombre Completo</label>
            <input
              placeholder="Nombre del cliente"
              type="text"
              id="nombre"
              className="w-full bg-gray-50 p-1 rounded-sm placeholder-grey-600 outline-sky-600"
              value={nombre}
              onChange={({target}) => setNombre(target.value)}
            />
          </div>
          <div className="my-2">
            <label htmlFor="Email" className="block font-bold uppercase">Email</label>
            <input
              placeholder="Email"
              type="email"
              id="Email"
              className="w-full bg-gray-50 p-1 rounded-sm placeholder-grey-600 outline-sky-600"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
          <div className="my-2">
            <label htmlFor="Telefono" className="block font-bold uppercase">Telefono</label>
            <input
              placeholder="Telefono"
              type="tel"
              id="Telefono"
              className="w-full bg-gray-50 p-1 rounded-sm placeholder-grey-600 outline-sky-600"
              value={telefono}
              onChange={({ target }) => setTelefono(target.value)}
            />
          </div>
          <div className="my-2">
            <label htmlFor="Dia" className="block font-bold uppercase">Dia</label>
            <input
              placeholder="Dia"
              type="date"
              id="Dia"
              className="w-full bg-gray-50 p-1 rounded-sm placeholder-grey-600 outline-sky-600"
              value={dia}
              onChange={({ target }) => setDia(target.value)}
            />
          </div>
          <div className="my-2">
            <label htmlFor="Hora" className="block font-bold uppercase">Hora</label>
            <input
              placeholder="Hora"
              type="time"
              id="Hora"
              className="w-full bg-gray-50 p-1 rounded-sm placeholder-grey-600 outline-sky-600"
              value={hora}
              onChange={({ target }) => setHora(target.value)}
            />
          </div>
          <div className="my-2">
            <label htmlFor="Descripcion" className="block font-bold uppercase">Descripcion del Cliente</label>
            <textarea
              type="time"
              id="Descripcion"
              className="w-full bg-gray-50 p-1 rounded-sm placeholder-grey-600 outline-sky-600"
              value={descripcion}
              onChange={({ target }) => setDescipcion(target.value)}
            />
          </div>
          {
            error && 
            <ErrorMessage><p className='text-red-600 font-bold text-md text-center'>Todos los campos son obligatorios</p></ErrorMessage>
          }
          <div className="my-2">
            <input
              type="submit"
              value={cliente.id ? 'Editar Cliente' : 'Agregar Cliente'}
              className="w-full bg-sky-800 p-1 rounded-sm placeholder-grey-600 cursor-pointer text-white font-bold hover:bg-sky-600 transition-colors"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form