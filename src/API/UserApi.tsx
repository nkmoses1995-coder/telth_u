import axios from "axios";

const headers =  {
    headers: {
        "Content-Type": 'application/json',
        
    }
}

const loginData = (responseData) => {
    return axios.post('http://192.168.1.40:8000/api/users/',responseData, headers)
    .then(responseData => {
        return responseData.data
    })
} 

export {loginData}