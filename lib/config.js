module.exports = {
    development: {
        env: 'developmnt',
        port: 3000
    },
    production: {
        env: 'production',
        port: 80
    }
}[process.env.NODE_ENV || 'development'];