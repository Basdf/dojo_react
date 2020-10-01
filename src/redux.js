
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Axios from 'axios'


// DefaultState
const defaultGamesState = {
    pokemon: 10,
}
const defaultConsoleState = {
    ps5: 30,
    switch: 50
}
const initialStateSearch = {
    loading: false,
    pokemon: [],
    error: ''
}
// Type Actions

// Games Store
const BuyPokemon = "BUYPOKEMON"
const ReturnPokemon = "RETURNPOKEMON"

// Console Store
const BuyPs5 = "BUYPS5"
const ReturnPs5 = "RETURNPS5"
const BuySwitch = "BUYSWITCH"
const ReturnSwitch = "RETURNSWITCH"

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
// Reducer

const gamesReducer = (state = defaultGamesState, action) => {
    switch (action.type) {
        case BuyPokemon: {
            return {
                ...state,
                pokemon: state.pokemon - action.payload
            }
        }
        case ReturnPokemon:
            return {
                ...state,
                pokemon: state.pokemon + action.payload
            }
        default: return state;
    }

}

const consoleReducer = (state = defaultConsoleState, action) => {
    switch (action.type) {
        case BuyPs5: {
            return {
                ...state,
                pokemon: state.ps5 - action.payload
            }
        }
        case ReturnPs5:
            return {
                ...state,
                pokemon: state.ps5 + action.payload
            }
        case BuySwitch: {
            return {
                ...state,
                pokemon: state.switch - action.payload
            }
        }
        case ReturnSwitch:
            return {
                ...state,
                pokemon: state.switch + action.payload
            }
        default: return state;
    }

}

const SearchReducer = (state = initialStateSearch, action) => {
    switch (action.type) {
        case FetchPokemonRequest:
            return {
                ...state,
                loading: true
            }
        case FetchPokemonSuccess:
            return {
                loading: false,
                pokemon: action.payload,
                error: ''
            }
        case FetchPokemonFailure:
            return {
                loading: false,
                pokemon: [],
                error: action.payload
            }
        default: return state;
    }
}

// Store
const rootReducers = combineReducers({
    games: gamesReducer,
    consoles: consoleReducer,
    seeker:SearchReducer
})

const store = createStore(rootReducers, composeWithDevTools(
    applyMiddleware(thunk)
))

export default store;





