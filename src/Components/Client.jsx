import React from 'react'

const Patients = ({ cliente, setCliente, deleteClient }) => {

  const { nombre, email, telefono, dia, hora, descripcion, id } = cliente

  const handleDelete = () => {
    const response = confirm('deseas eliminar ese paciente')
    if (response) {
      deleteClient(id)
    }
  }
  
  return (
    <div className="my-5 bg-white rounded-sm px-8 py-5 shadow-md">
      <div>
        <p className="font-bold block text-sky-600 text-lg">Cliente</p>
        <p>{nombre}</p>
      </div>
      <div>
        <p className="font-bold block text-sky-600 text-lg">Contacto</p>
        <p>Email: {email}</p>
        <p>Telefono: {telefono}</p>
      </div>
      <div>
        <p className="font-bold block text-sky-600 text-lg">Cita</p>
        <p>Dia: {dia}</p>
        <p>Hora: {hora}</p>
      </div>
      <div>
        <p className="font-bold block text-sky-600 text-lg">Descripcion:{' '}
          <span className='font-normal text-black'>{descripcion}</span>
        </p>
      </div>
      <div className=' mt-2 flex justify-between'>
        <button 
          type='button' 
          className='py-1 px-5 bg-sky-700 rounded-sm text-white text-md hover:bg-sky-600 transition-colors uppercase'
          onClick={()=>{setCliente(cliente)}}
        >
          Editar
        </button>
        <button 
          type='button' 
          className='py-1 px-5 bg-red-700 rounded-sm text-white text-md hover:bg-red-600 transition-colors uppercase'
          onClick={handleDelete}
        >
        Eliminar
        </button>
      </div>
    </div>
  )
}

export default Patients