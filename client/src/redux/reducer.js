import { ADD_FAV, REMOVE_FAV } from "./action-types";

const inicialState = {
    myFavorites: []
}

export default function reducer(state= inicialState, {type,payload}){
    //const {type, payload} = action
    switch(type){
        case ADD_FAV:
        return {
            ...state, 
            myFavorites:[...state.myFavorites, payload]
        }
        case REMOVE_FAV:
            const filteredFavs = state.myFavorites.filter(
                favorite => favorite.id !== Number(payload)
            )
            return {
                ...state,
                myFavorites: filteredFavs
            }
            default:
                return{...state}
    }
}