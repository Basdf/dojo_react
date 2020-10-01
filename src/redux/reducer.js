// Reducer

import { BuyPokemon, BuyPs5, BuySwitch, FetchPokemonFailure, FetchPokemonRequest, FetchPokemonSuccess, ReturnPokemon, ReturnPs5, ReturnSwitch } from "./actions";
import { defaultConsoleState, defaultGamesState, initialStateSearch } from "./store";

export const gamesReducer = (state = defaultGamesState, action) => {
    
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

export const consoleReducer = (state = defaultConsoleState, action) => {
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

export const SearchReducer = (state = initialStateSearch, action) => {
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