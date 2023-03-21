import React from "react";
import oscar from '../assets/images/oscar.png'
import emmy from '../assets/images/emmy.png'

export default function Contacts({picture,name,popularity,wonOscar,wonEmmy,handleDelete,id}){
    const handleDelete_contact = () => {
        handleDelete(id)
    }

    return (
        <div className="Contact_container">
            <div>
                <img src={picture} alt={name}/>
            </div>
            <div>
                <h2>{name}</h2>
            </div>
            <div>
                <h2>{popularity.toString()}</h2>
            </div>
            <div>
                {wonOscar===true && <img src={oscar} alt='oscar'/>}
            </div>
            <div>
                {wonEmmy===true && <img src={emmy} alt='emmy'/>}
            </div>
            <div>
                <button onClick={handleDelete_contact}>Delete</button>
            </div>
        </div>
    )
}