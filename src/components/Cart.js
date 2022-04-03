import { addDoc, collection } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { cartContext } from '../context/CartContext'
import { dbFirebase } from '../firebaseConfig'
import "./cart.css"

export const Cart = () => {

    const {cart,total,removeItem,clear} = useContext(cartContext)

    const [UserForm, setUserForm] = useState({
        nombre: "",
        email: ""
    })

    const navigate = useNavigate()

    const {nombre,email} = UserForm

    const handleInputChange = (e)=>{

        setUserForm({
            ...UserForm,
            [e.target.name]: e.target.value
        })
    }

    const createOrder = (e)=>{
        e.preventDefault()

        const orden = {
            buyer: UserForm,
            items:cart,
            date: Date.now(),
            total
        }

        addDoc(collection(dbFirebase, "orders"), orden)
        .then((data)=> {
            alert("Muchas gracias por su compra, nos comunicaremos con usted pronto, el id de su orden es: " + data.id);
            clear()
            navigate("/")
        })
        .catch((err)=> console.log(err))


    }
    
    return (
        <div className='cart'>
            <h1>Shopping Cart</h1>
            {
                cart.length > 0 ?
                <div className='cart_container-form'>

                    <form onSubmitCapture={createOrder}>
                        <p>Formulario de contacto</p>
                        <label>Nombre:</label>
                        <input name="nombre" value={nombre} type="text" placeholder='Ingrese el nombre' required autoFocus onChange={handleInputChange} />
                        <label>Email:</label>
                        <input name="email" value={email} type="email" placeholder='Ingrese el Correo' required onChange={handleInputChange}/>
                        <button type='submit' className='cart_btn-comprar'>
                            Generar Orden
                        </button>
                    </form>


                    <ul>
                    { cart.map((item,index) => {
                        return <li key={index} className='cart_container'>
                            <div className='cart_container-top'>
                                <p className='cart_item-nombre'>{item.item.nombre}</p>
                                <p>$ {item.item.precio}</p>
                            </div>
                                <p>{item.item.descripcion}</p>
                                <div className='cart_container-bottom'>
                                    <p>Cantidad: {item.quantity}</p>
                                    <button onClick={()=> removeItem(item.item.id)} className='cart_btn-remove'>Eliminar</button>
                                </div>
                            </li>
                        })}
                        <div className='cart_comprar'>
                            <div className='cart_comprar_total'>
                                <p>Total</p>
                                <p>$ {total}</p>
                            </div>
                            <Link to="/" className='cart_continuar-comprando' >
                                <p style={{color: "black"}}>o Continuar Comprando</p> 
                            </Link>
                        </div>
                    </ul>
                </div>
                :
                <div className='cart_vacio'>
                     <p>No hay productos en el carrito</p>
                     <Link to="/">Volver al home</Link>

                </div>
                
            }
        </div>
    )
}
