// State arg is not app state. It's the state that this reducer is responsible for - It's the current state of the reducer
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}