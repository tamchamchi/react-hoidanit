import axios from "axios";

const instance = axios.create({
     baseURL: 'https://reqres.in',
})

//interceptors
//Giúp chúng ta can thiệp quá trình gửi resquest lên server / trước khi nhận resquest về

instance.interceptors.response.use(function (response) {
     return response.data
}, function (error) {
     return Promise.reject(error)
})
export default instance;