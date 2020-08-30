import React from 'react';
import Especie from './Especie';

const ListadoEspecies = ({especie}) => {
    return ( 
        <div className="col-12 p-5 row">
            
            {especie.map(especies => (
                <Especie
                    key={especies.id}
                    especie={especies}
                />
            ))
            
            }
        </div>
    );
}
 
export default ListadoEspecies;