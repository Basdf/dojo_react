import Axios from "axios"

// Type Actions

// Games Store
export const BuyPokemon = "BUYPOKEMON"
export const ReturnPokemon = "RETURNPOKEMON"

// Console Store
export const BuyPs5 = "BUYPS5"
export const ReturnPs5 = "RETURNPS5"
export const BuySwitch = "BUYSWITCH"
export const ReturnSwitch = "RETURNSWITCH"

// Type Async Action
export const FetchPokemonRequest = "FETCHPOKEMONREQUEST"
export const FetchPokemonSuccess = "FETCHPOKEMONSUCCESS"
export const FetchPokemonFailure = "FETCHPOKEMONFAILURE"

// Actions


export const BuyPokemonActions = (cant) => {
    return {
        type: BuyPokemon,
        payload: cant,
    }
}

export const ReturnPokemonActions = (cant) => {
    return {
        type: ReturnPokemon,
        payload: cant
    }
}

export const BuyPS5Actions = (cant) => {
    return {
        type: BuyPs5,
        payload: cant,
    }
}

export const ReturnPS5Actions = (cant) => {
    return {
        type: ReturnPs5,
        payload: cant
    }
}

export const BuySWITCHActions = (cant) => {
    return {
        type: BuySwitch,
        payload: cant,
    }
}

export const ReturnSWITCHActions = (cant) => {
    return {
        type: ReturnSwitch,
        payload: cant
    }
}

// Async Actions
export const FetchPokemonRequestAction = () => {
    return {
        type: FetchPokemonRequest,

    }
}
export const FetchPokemonSuccessAction = (pokemon) => {
    return {
        type: FetchPokemonSuccess,
        payload: pokemon

    }
}
export const FetchPokemonFailureAction = (error) => {
    return {
        type: FetchPokemonFailure,
        payload: error

    }
}
export const fetchPokemonAction = (valor) => {
    return (dispatch) => {
        dispatch(FetchPokemonRequestAction());
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
            .then(response => {
                dispatch(FetchPokemonSuccessAction([response.data]))
            })
            .catch(error => {
                dispatch(FetchPokemonFailureAction("No se encontro el pokemon"))
            })
    }

}