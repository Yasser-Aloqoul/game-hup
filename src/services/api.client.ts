import axios from  "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'42388e60f1dc4cdda7a978a6a88797a3'
    }
})