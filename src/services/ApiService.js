import axios from 'axios';
 
const baseurl='https://localhost:44391/'; 

class ApiService{
    getAll(param) {
        return axios.get(baseurl+param);
    }

    getAllWithPaging(param) {
        return axios.get(baseurl+param+"1/10");
    }

    getDataById(param,Id) {
        return axios.get(baseurl+param + Id);
    }

    createData(param,Data) {
        return axios.post(baseurl+param , Data);
    }

    updateData(param,Data) {
        return axios.put(baseurl+param , Data);
    }

    deleteData(param,Id) {
         
        return axios.delete(baseurl+param+Id+'/');
    }
}

export default new ApiService()