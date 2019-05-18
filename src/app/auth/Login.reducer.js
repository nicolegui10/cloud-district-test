import { SET_CREDENTIAL, LOGOUT } from '../common/actions/types';

export default function auth(state = [], action) {
    switch (action.type) {
      case SET_CREDENTIAL:
        return {
          ...state, 
          ...action.payload
        };
      case LOGOUT: 
        return {
          ...state,
          user: {},
          isAuthenticated: false
        };
      default: 
        return state;
    }    
}