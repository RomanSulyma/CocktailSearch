import axios from 'axios';
import {values} from '../Base';


export const getReciepts = async (reciept) => {
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
};

export const getSingleRecieptInfo = async (id) => {
    const data = await axios({
        "method":"GET",
        "url":`https://${values.host}/lookup.php`,
        "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":`${values.host}`,
            "x-rapidapi-key":`${values.key}`
        },"params":{
            "i":`${id}`
        }
    });

    return data.data.drinks[0];
};
