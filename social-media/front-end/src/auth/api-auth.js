import config from '../config'
const API_BASE_URL = config.API_BASE_URL

const signin = (user) => {
    return fetch(`${API_BASE_URL}/auth/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .catch(err => console.log(err))
}

export { signin }
