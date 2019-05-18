import { CREATE_USER, FETCH_USERS_PAGE, EDIT_USER, GET_USER} from '../common/actions/types';


  export default function users(state = [], action) {
  const {payload} = action
    switch (action.type) {
      case CREATE_USER:
        return {
          ...state, 
          user: payload,
      };
      case EDIT_USER: 
        return {
          ...state,
          ...state.usersList.pages.forEach((page) => {
            page.forEach((user) => {
              if(user.id === payload.id){
                console.log(user);
                user.fist_name = payload.first_name;
                user.last_name = payload.last_name;
                user.job = payload.job;
              }
            }
            )
        })
      };
      case GET_USER: 
        return {
          ...state, 
          user: payload
        };
      case FETCH_USERS_PAGE: 
        return {
          ...state, 
          usersList: {
            total: payload.total,
            per_page: payload.per_page,
            total_pages: payload.total_pages,
            page: payload.page,
            pages: state.usersList ?  [...state.usersList.pages, payload.data] : [[], payload.data] 
          }
        };
      default: 
        return state;
    }    
}