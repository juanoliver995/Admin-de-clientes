import Form from './Components/Form'
import Header from './Components/Header'
import ClientList from './Components/ClientList'
import { useState, useEffect } from 'react'

const App = () => {
  const [clientes, setClientes]= useState([])
  const [cliente, setCliente] = useState({})

  useEffect(() => {
    const getClientesLS = () => {
      const clientesLS =  JSON.parse(localStorage.getItem('clientes')) ?? []
      setClientes(clientesLS)
    }

    getClientesLS()
  },[])


  useEffect(() => {
    const setClientesLS = () => {
      localStorage.setItem('clientes', JSON.stringify(clientes))
    }
    setClientesLS()
  },[clientes])

  const deleteClient = id => {
    const updatesClients = clientes.filter((clientState) => clientState.id !== id )
    setClientes(updatesClients)
  }

  return (
    <div className='container mx-auto'>
      <Header/>
      <div className='md:flex gap-3 mx-auto'>
        <Form clientes={clientes} setClientes={setClientes} cliente={cliente} setCliente={setCliente} />
        <ClientList clientes={clientes} setCliente={setCliente} cliente={cliente} deleteClient={deleteClient}/>
      </div>
    </div>
  )
}

export default App