import React from 'react'

const ClienteTipodocumento = ({objtipodocumento}) => {
    return (
        <>
          <option value={objtipodocumento.id}>{objtipodocumento.nombre}</option>  
        </>
    )
}

export default ClienteTipodocumento
