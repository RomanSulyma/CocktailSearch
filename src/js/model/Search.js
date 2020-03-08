import axios from 'axios';
import {values} from '../Base';

export class Search {

    async getReciepts(reciept) {
        const data = await axios({
            "method":"GET",
            "url":`https://${values.host}/filter.php`,
            "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":`${values.host}`,
                "x-rapidapi-key":`${values.key}`
            },"params":{
                "i": `${reciept}`
            }
        });
        return data.data.drinks;
    }

    getSingleRecieptInfo (id) {
        return axios({
            "method":"GET",
            "url":`https://${values.host}/recipes/${id}/information`,
            "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host": `${values.host}`,
                "x-rapidapi-key": `${values.key}`
            }
        });
    }

}