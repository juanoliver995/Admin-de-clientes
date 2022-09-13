import Client from './Client'

const ClientList = ({ clientes, setCliente, deleteClient }) => {

  return (
    <div className="md:w-3/5 container px-2 my-5 md:overflow-y-scroll md:h-screen">
      {
        clientes && clientes.length 
          ?  
          <>
            <h2 className=" text-center font-black text-2xl mb-3">Lista de Clientes</h2>
            <div className="">
              <p className="text-center font-normal text-lg">Administra tus clientes</p>
              {clientes.map((cliente)=> {
                return(
                  <Client cliente={cliente} key={cliente.id} setCliente={setCliente} deleteClient={deleteClient}/>
                )
              })}
        
            </div> 
          </>
          :
          <>
            <h2 className=" text-center font-black text-2xl mb-3">No hay Clientes</h2>
            <div className="">
              <p className="text-center font-normal text-lg">Agrega clientes para poder administrarlos</p>
            </div> 
          </>
          

      }
      
    </div>
  )
}

export default ClientList