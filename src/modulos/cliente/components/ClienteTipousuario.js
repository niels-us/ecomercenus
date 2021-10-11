import React from 'react'

const ClienteTipousuario = ({objtipousuario}) => {
    return (
        <>
            <option value={objtipousuario.id}>{objtipousuario.nombre}</option>
        </>
    )
}

export default ClienteTipousuario
