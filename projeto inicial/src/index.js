const express = require('express')
const app = express()

app.use(express.json())

app.get('/projects', function(request, response) {
    const {title, owner, page} = request.query
    console.log(title, owner, page)

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ])
})

app.post('/projects', function(request, response) {
    const {name, owner} = request.body
    console.log(name, owner)

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
        'Projeto Teste'
    ])
})

app.put('/projects/:id', function(request, response) {
    const {id} = request.params
    const {name, owner} = request.body

    console.log(id, name, owner)

    return response.json([
        'Projeto 5',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4'
    ])
})

app.delete('/projects/:id', function(request, response) {
    return response.json([
        'Projeto 2',
        'Projeto 3',
        'Projeto 4'
    ])
})

app.listen(3000, () => {
    console.log('Server started on port 3000!')
})
