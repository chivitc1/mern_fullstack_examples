const auth = {
    isAuthenticated() {
        if (typeof window == "undefined") return false

        if (sessionStorage.getItem('access_token'))
            return JSON.parse(sessionStorage.getItem('access_token'))
        else 
            return false
    },
    authenticate(token, callback) {
        if (typeof window !== "undefined") {
            sessionStorage.setItem('access_token', JSON.stringify(token))
        }
        callback()
    },
    signout(callback) {
        if (typeof window !== "undefined") {
            sessionStorage.removeItem('access_token')
        }
        callback()
    }
}

export default auth
