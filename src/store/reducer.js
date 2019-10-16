import {Actions} from './actions'

export const initialState = {
    isBusy:false,
    elements: [],
    content: []
} 

export const ElementContent = (state, action) => {
    switch(action.type) {
        case Actions.BUSY:
            return {...state, isBusy: action.state};
        default:
            return state;
    }
}