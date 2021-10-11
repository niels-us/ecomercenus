import React from "react";
import axios from "axios";
import { Modal, NavLink } from "react-bootstrap";
import { useDispatch, useSelector, state } from "react-redux";
import Swal from "sweetalert2";
import { URL_BACKEND } from "../../../environments/environments";
import { eliminarTodolosproductos } from "../../../redux/actions/carritoAction";
import logo from "./../../../assets/img/logo.png";
const ModalBoleta = ({ mostrar, setMostrar }) => {
  const dispatch = useDispatch();
  const carrito = useSelector((state) => state.carrito);
  const { usu_id,usu_nombre,usu_direc,usu_numedocu } = useSelector((state) => state.login);
  const tipopagos = useSelector((state) => state.tipopago);

  const fecharegistro = new Date();
  // 1 - boleta
  // 2 - Factura

  //consultar el nombre del documento
  // const evaluarNombreComp = async () => {
  //   const endpoint = `${URL_BACKEND}/nombrecomprobante/${tipopagos.tipopagos.tipocomprobante}`;
  //   const nombreComprob = await axios.get(endpoint);
  //   const resultado= nombreComprob.data.content[0].nombre
  //   return resultado
  // };
  // console.log(evaluarNombreComp());

  const valorImpuesto = () => {
    // const endpoint = `${URL_BACKEND}/nombrecomprobante/${tipopagos.tipopagos.tipocomprobante}`;
    // const nombreComprob = await axios.get(endpoint);
    // const resultado= nombreComprob.data.content[0].nombre
    // console.log(resultado)
    if (tipopagos.tipopagos.tipocomprobante === "1") {
      return 0;
    } else {
      return parseFloat(carrito.total - carrito.total / 1.18).toFixed(3);
    }
  };
  console.log(valorImpuesto);
  let objventa = {
    serie_comprobante: "0001",
    numero_comprobante: "1",
    fecha: fecharegistro,
    impuesto: valorImpuesto(),
    total: carrito.total,
    estado: true,
    moneda_id: tipopagos.tipopagos.tipomoneda,
    tipo_comprobante_id: tipopagos.tipopagos.tipocomprobante,
    usuario_id: usu_id,
  };

  const postVenta = async (objVenta) => {
    const response1 = await fetch(`${URL_BACKEND}/venta`, {
      method: "POST",
      body: JSON.stringify(objVenta),
      headers: {
        "Content-type": "application/json",
      },
    });

    const endpoint = `${URL_BACKEND}/ventamax`;
    const response2 = await axios.get(endpoint);
    console.log(response2.data.content[0].idventa);

    const objventasdetalle = carrito.productos.map((obj) => {
      return obj;
    });

    for (let i in objventasdetalle) {
      const objventi = {
        cantidad: objventasdetalle[i].cantidad,
        precio: objventasdetalle[i].precio_venta,
        descuento: 0,
        producto_id: objventasdetalle[i].id,
        ventas_id: response2.data.content[0].idventa,
      };
      const response3 = await fetch(`${URL_BACKEND}/detalleventa`, {
        method: "POST",
        body: JSON.stringify(objventi),
        headers: {
          "Content-type": "application/json",
        },
      });
    }
  };

  let objActual = carrito.productos.map((data) => {
    return data;
  });

  const handlePagar = () => {
    postVenta(objventa);
    dispatch(eliminarTodolosproductos(objActual));

    setMostrar(false);

    Swal.fire({
      icon: "success",
      title: "Éxito!",
      text: "Pedido pagado con éxito",
    });
  };

  return (
    <>
      <Modal size={"lg"} show={mostrar} onHide={() => setMostrar(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Facturación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <div className="col-md-12">
              <div className="invoice">
                <div className="invoice-company text-inverse f-w-600">
                  <img src={logo} alt="MultiShop" />
                </div>
                <div className="invoice-header">
                  <div className="invoice-from">
                    <strong>SOLUCIONES INTEGRALES</strong>
                    <address className="m-t-5 m-b-5">
                      <br />
                      ECOMMERCE - CODIGO
                      <br />
                      <br />
                      Av. Republica Panama N° 1356 - Lima
                      <br />
                      Teléfono: (123) 456-7890
                      <br />
                  
                    </address>
                  </div>
                    <br/>
                  <div className="invoice-date">
                    <small><strong>Datos del Cliente:</strong></small><br/>
                    <small>Razon Social: {usu_nombre} </small><br/>
                    <small>Dirección: {usu_direc} </small><br/>
                    <small>N° Documento: {usu_numedocu} </small><br/>
                  </div>
                </div>
                <br/>
                <div className="invoice-content">
                  <div className="table-responsive">
                    <table className="table table-success table-striped">
                      <thead>
                        <tr>
                          <th width="30%">Descripción</th>
                          <th className="text-center" width="10%">
                            P. Unitario
                          </th>
                          <th className="text-center" width="10%">
                            Cantidad
                          </th>
                          <th className="text-center" width="20%">
                            Sub Total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {carrito.productos.map((objProducto) => {
                          return (
                            <tr>
                              <td>
                                <span className="text-center">
                                  {objProducto.nombre}
                                </span>
                              </td>
                              <td className="text-center">
                                S/ {objProducto.precio_venta}
                              </td>
                              <td className="text-center">
                                {objProducto.cantidad}
                              </td>
                              <td className="text-center">
                                S/{" "}
                                {+objProducto.precio_venta *
                                  +objProducto.cantidad}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  <div className="invoice-price">
                    <div className="invoice-price-left">
                      <table className="table table-success table-striped">
                        <thead>
                          <tr>
                            <th width="30%"></th>
                            <th className="text-center" width="10%">
                              Sub Total
                            </th>
                            <th className="text-center" width="10%">
                              Impuesto
                            </th>
                            <th className="text-center" width="20%">
                              Total
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              {/* <span className="text-inverse">
                                <small>Sub Total</small>
                              </span>
                              <span className="text-inverse">
                           
                              </span> */}
                            </td>
                            <td className="text-center">
                              <span className="text-inverse"> S/.{carrito.total - valorImpuesto()} </span>
                            </td>
                            <td className="text-center">
                              <small>S/.{valorImpuesto()}</small>
                            </td>
                            <td className="text-center">
                              <span className="text-inverse">S/.{carrito.total}
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="invoice-note">
                  * Make all cheques payable to [Your Company Name]
                  <br />
                  * Payment is due within 30 days
                  <br />* If you have any questions concerning this invoice,
                  contact [Name, Phone Number, Email]
                </div>
                <hr />
                <div className="card text-center">
                  <p className="text-center m-b-5 f-w-600">
                    GRACIAS POR TUS COMPRAS
                  </p>
                  <p className="text-center">
                    <span className="m-r-10">
                      <i className="fa fa-fw fa-lg fa-globe"></i>{" "}
                      www.ecommerce.com.pe
                    </span>
                    <span className="m-r-10">
                      <i className="fa fa-fw fa-lg fa-phone-volume"></i>{" "}
                      T:016-18192302
                    </span>
                    <span className="m-r-10">
                      <i className="fa fa-fw fa-lg fa-envelope"></i>{" "}
                      ecommerces@gmail.com
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-success"
            onClick={handlePagar}
            // disabled={cargandoPago}
          >
            PAGAR
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalBoleta;
