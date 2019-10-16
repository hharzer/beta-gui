import {createStore, combineReducer} from 'redux'
import {Actions, ActionCreator} from './actions'
import {ElementContent,initialState} from './reducer'

export const ElementApp = createStore(ElementContent,initialState)
