import React from 'react';
import { useDispatch } from 'react-redux';
import { BuyPokemonActions, ReturnPokemonActions } from '../redux/actions';

export default function ActionPokemon() {
    const dispatch = useDispatch()
    return (
        <div>
            <button className="btn btn-dark btn-sm mb-2" onClick={() => {
                dispatch(BuyPokemonActions(1));
            }}>Comprar Pokemon</button>

            <button className="btn btn-dark btn-sm " onClick={() => {
                dispatch(ReturnPokemonActions(1))
            }}>Devolver Pokemon</button>

        </div>
    )

}