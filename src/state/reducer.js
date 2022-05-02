const initialState = {
    isLoading: false,
    users: []
}


const AppReducer = (state=initialState, action) => {

    

    switch(action.type) {


        case 'IS_LOADING':
            return {...state, isLoading: true}

        case 'LOAD_USERS':
            return {...state, users: [...action.users], isLoading: false}

        default:
            return {...state}
    }



}


export default AppReducer