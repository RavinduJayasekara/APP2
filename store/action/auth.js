export const RESTORE_TOKEN = 'RESTORE_TOKEN';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

// export const restoreToken = () => {
//     return { type: RESTORE_TOKEN, token: }
// }

export const signIn = (username, password) => {
    return async dispatch => { 
        dispatch({ type: SIGN_IN, token: 'dummy-auth-token' })
     };
};