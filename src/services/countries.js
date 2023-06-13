import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'

const get10First = substring => {
    const request = axios.get(baseUrl + "all")
    return request.then(response => {
        let res = [];
        let i = 0;
        let n = response.data.length;
        while (i < n && res.length < 15){
            if(response.data[i].name.common.toLowerCase().startsWith(substring.toLowerCase())){
                res.push({
                    name: response.data[i].name.common,
                    flag: response.data[i].flag
                })
            }
            i++
        }
        if (res.length === 15)
            return "Please affine your search";
        else if (res.length === 0)
            return "No country has been found unfortunately";
        return res;
    })
}

const getByName = name => {
    const request = axios.get(baseUrl + "name/" + name);
    return request.then(response => response.data)

}

export default {get10First, getByName}