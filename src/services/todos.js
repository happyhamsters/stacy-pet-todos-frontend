import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/todos'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newTodo => {
    const request = axios.post(baseUrl, newTodo)
    return request.then(response => response.data)
}

const deleteTodo = (id) => {
    console.log(`Deleting todo with id: ${id}`);
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const update = (id, newTodo) => {
    const request = axios.put(`${baseUrl}/${id}`, newTodo)
    return request.then(response => response.data)
  }

export default { getAll, create, deleteTodo, update }