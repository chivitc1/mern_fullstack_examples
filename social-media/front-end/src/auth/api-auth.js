const signin = (user) => {
    return fetch('/api/signin', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .catch(err => console.log(err))
}

export { signin }
