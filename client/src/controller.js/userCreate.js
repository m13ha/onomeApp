import axios from "axios";

const createUser = (data) => {
    axios.post('api/reg', data)
}


export default createUser;