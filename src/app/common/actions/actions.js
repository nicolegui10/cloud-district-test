import Storage from '../utils/Storage';
import { LOGOUT } from './types';

export const logout = () => (dispatch) => {
  Storage.removeItem('AUTH_INFO');
  dispatch({
    type: LOGOUT
  })
  window.location.reload('/')
};

