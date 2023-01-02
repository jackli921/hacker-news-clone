//  store is a global data storage of the state 


function createStore(reducer){
    let currentState = reducer(undefined, {}) //initialize state with undefined array, empty object so default is returned

    return { //returning an object with the following methods
        getState: ()=> currentState, //returned intial state, which contains the most current favorites array, no action is provided
        dispatch: action => { //performs add or remove 
            currentState = reducer(currentState, action) //update currentState by running the reducer using the current state and action
        }
    }
}

const initialState = {
    favorites:[]
}

function favoritesReducer(state = initialState, action){
    switch (action.type){
        case "ADD_FAVORITE":{
            const addedFavorite = action.payload.favorite
            const favorites = [...state.favorites, addedFavorite]
            return { favorites }
            }
        case "REMOVE_FAVORITE":{
            const removedFavorite = action.payload.favorite
            const favorites = state.favorites.filter(favorite => favorite.id !== removedFavorite.id)
            return { favorites }
            }
        default:
            return state;
    }
}

const store = createStore(favoritesReducer)
export default store