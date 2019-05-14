const config = {
    API_BASE_URL: `${process.env.API_PROTOCOL || 'http'}://${process.env.API_HOST || 'localhost'}:${process.env.API_PORT}`
}

export default config
