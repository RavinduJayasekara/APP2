import {USERS} from '../../data/dummy-data';

const initialState = {
    users: USERS
}

const userReducer = (state = initialState,action) => {
    return state;
}

export default userReducer;