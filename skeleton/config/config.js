const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: process.env.MONGODB_URI ||
        process.env.MONGO_HOST ||
        'mongodb://' + (process.env.DB_USER || 'user1') + ':' + (process.env.DB_PASSWORD || 'password123') + '@' + 
        (process.env.IP || 'localhost') + ':' +
        (process.env.MONGO_PORT || '27017') + '/my_database'
}

export default config
'mongodb://user1:password123@localhost:27017/my_database'