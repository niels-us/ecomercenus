import React from 'react'

const CarritoTipoComprobante = ({objtipocomprobante}) => {
    return (
        <>
            <option value={objtipocomprobante.id}>{objtipocomprobante.nombre}</option>
        </>
    )
}

export default CarritoTipoComprobante
