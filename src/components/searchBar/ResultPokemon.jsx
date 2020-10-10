import React from 'react';
import { useSelector } from 'react-redux';


export default function ResultPokemon() {
    const seeker = useSelector(state => state.seeker)
    return (
        <div>
            <h3 className="text-white">Resultado: </h3>
            {seeker.loading && <div className="text-warning">Buscando...</div>}
            {seeker.pokemon.length >= 1 && <div className="text-success">
                <img src={seeker.pokemon[0].sprites.other["official-artwork"].front_default} alt={seeker.pokemon[0].name} />
            </div>}
            {seeker.error !== '' && <span className="text-danger">{seeker.error}</span>}
        </div>
    )
}