console.log(`API_PORT: ${process.env.REACT_APP_API_PORT}`)
const config = {
    API_BASE_URL: `${process.env.REACT_APP_API_PROTOCOL || 'http'}://${process.env.REACT_APP_API_HOST || 'localhost'}:${process.env.REACT_APP_API_PORT || 3001}`
}

export default config
