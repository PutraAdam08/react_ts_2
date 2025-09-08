import {ReactNode} from 'react'
import { useCookies } from 'react-cookie'
import { Navigate } from 'react-router-dom'

interface PN {
    children:ReactNode;
}

const NeedCookie = ( { children } : PN ) => {
    const [cookies] = useCookies(['user'])
    if(!cookies.user){
        return <Navigate to="/login" replace />
    }

    return children;
}

export default NeedCookie