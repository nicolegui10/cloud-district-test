import { CREATE_USER, FETCH_USERS_PAGE, EDIT_USER, GET_USER } from '../common/actions/types';
import {API_URL} from '../common/constants/Constants'
import axios from 'axios';


export const createUser = (userInfo) => {
  console.log(userInfo);
    return (dispatch) => {
      if(!userInfo.first_name || !userInfo.first_name ) {
        return Promise.reject('Faltan Campos')
      } else {
      return axios.post(`${API_URL}/`, {body: userInfo})
        .then(response => {
          console.log(response.data)
          dispatch(createUserSuccess(response.data.body))
        })
        .catch(error => {
          throw(error);
        });
    };
  }
};

export const createUserSuccess =  (data) => {
  return {
    type: CREATE_USER,
    payload: {
      _id: data._id,
      first_name: data.first_name,
      last_name: data.last_name,
      job: data.job
    }
  }
};

export const editUser = (userInfo) => {
    return (dispatch) => {
      return axios.patch(`${API_URL}/${userInfo.id}`, {body: userInfo})
        .then(response => {
          dispatch(editUserSuccess(response.data.body))
        })
        .catch(error => {
          throw(error);
        });
    };
  };
  
export const editUserSuccess =  (data) => {
    return {
      type: EDIT_USER,
      payload: {
        id: data.id,
        first_name: data.first_name,
        last_name: data.last_name,
        job: data.job
      }
    }
};

export const fetchUsers = (res) => {
    return {
      type: FETCH_USERS_PAGE,
      payload: res
    }
  };
  
  export const fetchUsersPage = (number) => {
    return (dispatch) => {
      return axios.get(API_URL,{
        params: {
          page: number,
          per_page: 5
        }
      })
        .then(response => {
          dispatch(fetchUsers(response.data))
          console.log(response);
        })
        .catch(error => {
          throw(error);
        });
    };
};

export const fetchUser = (user) => {
    return {
      type: GET_USER,
      payload: user
    }
  };
  
  export const getUser = (userId) => {
    return (dispatch) => {
      return axios.get(`${API_URL}/${userId}`)
        .then(response => {
          console.log(response.data.data)
          dispatch(fetchUser(response.data.data))
        })
        .catch(error => {
          throw(error);
        });
    };
};


