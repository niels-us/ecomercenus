import React from 'react'

const CarritoTipoMoneda = ({objtipomoneda}) => {
    return (
        <>
            <option value={objtipomoneda.id}>{objtipomoneda.nombre}</option>
        </>
    )
}

export default CarritoTipoMoneda
