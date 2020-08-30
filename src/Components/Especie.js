import React from 'react';

function Especie({especie}){

    // extraer los datos
    const { id, name, image, status, species, gender, origin } = especie;
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={image} className="card-img-top" />
                <div className="card-body">
                    <p className="card-text">nombre: {name}</p>
                    <p className="card-text">estado: {status}</p>
                    <p className="card-text">especie: {species}</p>
                    <p className="card-text">genero: {gender}</p>
                    <p className="card-text">origen: {origin.name}</p>
                </div>
                {/*
                 <h2>Desde aqui se logro</h2> */}
            </div>
        </div>  
    );
}

export default Especie;      