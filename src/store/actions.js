
const BUSY = 'BUSY'
const ADD_ELEMENT = 'ADD_ELEMENT'
const ADD_CONTENT = 'ADD_CONTENT'

const setBusy = isBusy =>{ return {type: BUSY, isBusy} }
const addElement = element => {return {type: ADD_ELEMENT, element}}
const addContent =content => {return {type: ADD_CONTENT, content}}


export const Actions = {BUSY, ADD_CONTENT, ADD_ELEMENT}
export const ActionCreator = {setBusy,addContent,addElement}