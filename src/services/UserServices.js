import axios from "axios"

const fectAllUser = () => {
     return axios.get('https://reqres.in/api/users?page=1')
}

export { fectAllUser } 