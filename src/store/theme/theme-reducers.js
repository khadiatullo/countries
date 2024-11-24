import { ADD_THEME } from "./theme-actions";

export const themeReducers = (state = 'ligth', {type, payload}) => {
    switch(type){
        case ADD_THEME: {
            return payload
        }
        default: {
            return state
        }
    }
};