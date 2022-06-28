import {GRUDGE_ADD, GRUDGE_FORGIVE} from "./actionTypes";
import { v4 as id } from 'uuid';

export const reducer = (state = [], action) => {
    if(action.type === GRUDGE_ADD){
        return [
            {
                id: id(),
                forgiven: false,
                ...action.payload // Object.assign()
            },
            ...state
        ]
    }

    if(action.type === GRUDGE_FORGIVE){
        return state.map((grudge) => {
           if(grudge.id === action.payload.id){
               return {...grudge, forgiven: !grudge.forgiven}
           }
           return grudge
        });
    }
    return state;
}