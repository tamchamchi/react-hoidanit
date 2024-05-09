import axios from "./CustomizeAxios";

const fectAllUser = () => {
     return axios.get('/api/users?page=1')
}

export { fectAllUser } 