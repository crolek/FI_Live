module.exports = {
    development: {
        env: 'developmnt',
        port: 3000
    }
}[process.env.NODE_ENV || 'development'];