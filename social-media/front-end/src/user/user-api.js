import config from '../config'
const API_BASE_URL = config.API_BASE_URL

const create = (user) => {
    return fetch(`${API_BASE_URL}/api/users`, {
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

const list = () => {
    return fetch(`${API_BASE_URL}/api/users`, {
        method: 'GET'
    })
        .then(response => response.json())
        .catch(err => console.log(err))
}

const read = (params, credentials) => {
    return fetch(`${API_BASE_URL}/api/users/${params.userId}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${credentials.token}`
        }
    })
        .then(response => response.json())
        .catch(err => console.log(err))
}

const update = (params, credentials, user) => {
    return fetch(`${API_BASE_URL}/api/users/${params.userId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${credentials.token}`
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .catch(err => console.log(err))
}

const remove = (params, credentials) => {
    return fetch(`${API_BASE_URL}/api/users/${params.userId}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${credentials.token}`
        }
    })
}

export {
    create,
    list,
    read,
    update,
    remove
}