import { SET_CREDENTIAL } from '../common/actions/types';
import Storage from '../common/utils/Storage';

export const setCredentials = (user) => (dispatch) => {
    dispatch(saveCredentials(user))
    return Promise.resolve()
};

export const saveCredentials =  (user) => {
  Storage.setObjectItem('AUTH_INFO', user);
  return {
    type: SET_CREDENTIAL,
    payload: {
      isAuthenticated: true,
      user
    }
  }
};


