import {signout} from './auth-api.js'

const auth = {
    isAuthenticated() {
        if (typeof window == "undefined")
            return false
        if (sessionStorage.getItem('jwt')) {
            return JSON.parse(sessionStorage.getItem('jwt'))
        }
        else
            return false
    },
    authenticate(jwt, cb) {
        if (typeof window !== "undefined")
            sessionStorage.setItem('jwt', JSON.stringify(jwt))
        cb()
    },
    logout(cb) {
        if (typeof window !== "undefined")
            sessionStorage.removeItem("jwt")
        console.log("FUNC:")
        console.log(cb)
        cb()
        signout().then((data) => {
            document.cookie = "t=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        })
    }
}

export default auth