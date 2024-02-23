import axios from 'axios'
const BASE_URL = "http://localhost:3000";


class API{
    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);
        const url = `${BASE_URL}/${endpoint}`;
        const params = (method === "get")
            ? data
            : {};
    
        try {
          return (await axios({ url, method, data, params })).data;
        } catch (err) {
          console.error("API Error:", err.response);
          let message = err.response.data.error.message;
          throw Array.isArray(message) ? message : [message];
        }
      }

    static async getUsers(){
        try{
        let response = await this.request("users")
        return response;
        }

        catch(e){
            console.log(e)
        }
    }

    static async getUser(id){
        try{
        let response = await this.request(`users/${id}`)
        return response
        }
        catch(e){
            console.log(e)
        }
    }


    static async register(data){
    try{ let res = await this.request("users", data, "post");
    console.log("**********",res.data)
    return res;
}
    
    catch(e){
        console.log(e)
    }

    }
}

export default API;