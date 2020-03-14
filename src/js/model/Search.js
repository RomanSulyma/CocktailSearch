import axios from 'axios';
import {values} from '../Base';

/**
 * Get list of recipes from api
 *
 * @returns {Promise<*>}
 * @param searchInput
 */
export const getRecipes = async (searchInput) => {
    try {
    const data = await axios({
        "method":"GET",
        "url":`https://${values.host}/filter.php`,
        "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":`${values.host}`,
            "x-rapidapi-key":`${values.key}`
        },"params":{
            "i": `${searchInput}`
        }
    });
    return data.data.drinks;
    } catch (e) {
        alert('Something wrong :(');
    }
};

/**
 * Get single recipe from api
 *
 * @param id
 * @returns {Promise<*>}
 */
export const getSingleRecipeInfo = async (id) => {
    try {
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
    } catch (e) {
        alert('Something wrong :(');
    }
};
