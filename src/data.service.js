
import { IsLoading, LoadUser } from "./state/action.creator"
import http from "./utils/http"


export default async function FetchUsers(dispatch) {
    dispatch(IsLoading())

    try {
        const users = await http.get('/user')
        dispatch(LoadUser(users))

    }

    catch(err) {

        console.log(err.message)
    }
}