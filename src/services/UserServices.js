import axios from "./CustomizeAxios";

const fectAllUser = (page) => {
     return axios.get(`/api/users?page=${page}`)
}

export { fectAllUser } 