// config/config.js

module.exports = {
    server: {
        port: process.env.PORT || 3000,
    },
    
    database: {
        url: process.env.MONGODB_URI || 'mongodb+srv://DROP:harmosoftDROP@cluster0.jyg67g6.mongodb.net/?retryWrites=true&w=majority',
    },
    
    session: {
        secret: process.env.SESSION_SECRET || '0e9cbf25d12783332396d81565725b866940f64cfaf2120bcaa1e08443d51763d4f4d2e520e9045e2c0bc850fb7616f7403831eb556c995cb2e4af6dee64ddf9',
        resave: false,
        saveUninitialized: false,
    },
    
    jwt: {
        secret: process.env.JWT_SECRET || 'ba4386fd02a0f63072940d75be635b50dbf38f57f228e9e5b0fcc92d8d78dffcdfba117ead49e589dd4f406e29873354bd92fda3e24223381fb6f8d414e926f6',
        expiresIn: '1d',
    },
};
