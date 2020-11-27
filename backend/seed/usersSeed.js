const axios = require('axios')

axios.delete('http://localhost:4000/users')

axios.post('http://localhost:4000/users', {
    username: 'jason',
    password: 'password',
    role: 'restrict'
}, () => {
    console.log('success')
})
axios.post('http://localhost:4000/users', {
    username: 'brett',
    password: 'password',
    role: 'view'
}, () => {
    console.log('success')
})
axios.post('http://localhost:4000/users', {
    username: 'barry',
    password: 'password',
    role: 'edit'
}, () => {
    console.log('success')
})