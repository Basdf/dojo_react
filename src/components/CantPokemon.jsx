import React from 'react';
import { useSelector } from 'react-redux';

export default function CantPokemon() {
    const gameShop = useSelector((state) => state.games)
    return (
        <React.Fragment>
            Unidades : {gameShop.pokemon}
        </React.Fragment>
    )

}