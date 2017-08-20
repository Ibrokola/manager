import { 
    EMAIL_CHANGED ,
    PASSWORD_CHNAGED
} from './types';

export const emailChanged = (text) => {
    return{
        type: EMAIL_CHANGED,
        payload: text
    };
};


export const passwordChanged  = (text) => {
    return {
        type: PASSWORD_CHNAGED,
        payload: text
    };
}; 

export const loginUser = ({ email, password }) => {
    
};