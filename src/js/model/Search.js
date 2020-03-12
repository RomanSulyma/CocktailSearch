import axios from 'axios';
import {values} from '../Base';

/**
 * Get list of recipes from api
 *
 * @param id
 * @returns {Promise<*>}
 */
export const getRecipes = async (id) => {
    const data = await axios({
        "method":"GET",
        "url":`https://${values.host}/filter.php`,
        "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":`${values.host}`,
            "x-rapidapi-key":`${values.key}`
        },"params":{
            "i": `${id}`
        }
    });

    return data.data.drinks;
};

/**
 * Get single recipe from api
 *
 * @param id
 * @returns {Promise<*>}
 */
export const getSingleRecipeInfo = async (id) => {
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
