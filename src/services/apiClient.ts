import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'cc285656e91e4749b70abd31942ae3f9'
    }
})