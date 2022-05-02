import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import FetchUsers from "./data.service"





function Lista() {
    const dispatch = useDispatch()

    useEffect(() => {
        FetchUsers(dispatch)
    }, [])
   
    return (
        <div>Hello world</div>
    )
}

export default Lista