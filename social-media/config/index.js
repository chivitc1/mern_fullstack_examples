const config = {
    env: process.env.NODE_ENV || 'development',
    api_port: process.env.API_PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || 'chinv secret',
    dbUri: process.env.DB_URI || 'mongodb://' 
    + (process.env.DB_USERNAME || 'admin') + ':' + (process.env.DB_PASSWORD || 'password123') + '@'
    + (process.env.DB_HOST || 'localhost') + ':' + (process.env.DB_PORT || '27017') + '/socialMedia',
}

export default config;