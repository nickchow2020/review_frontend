import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";

class AppApi {

    static token;

    static async request(endpoint,data={},method="get"){
        
        const url = `${BASE_URL}/${endpoint}`;
        const headers = {Authorization: `Bearer ${AppApi.token}`};
        const params = (method === "get") ? data :{};

        try{
            return (await axios({url,method,data,params,headers})).data;
        }catch(err){
            let errorMsg = err.response.data.error.message;
            throw Array.isArray(errorMsg) ? errorMsg : [errorMsg];
        }
    };

    static async login(data){
        let resp = await this.request("auth/token",data,"post");
        return resp.token;
    };

    static async register(data){
        let resp = await this.request("auth/register",data,"post");
        return resp.token;
    };

    static async userInfo(username){
        let resp = await this.request(`users/${username}`);
        return resp.targetUser;
    };

    static async updateUserInfo(username,data){
        let resp = await this.request(`users/${username}`,data,"patch");
        return resp.userUpdate;
    }

    static async getTopSixs(){
        let resp = await this.request("");
        return resp;
    };

    static async getDogParks(){
        let resp = await this.request("dog_parks");
        return resp.parks;
    };

    static async getDogHospitals(){
        let resp = await this.request("dog_hospitals");
        return resp.hospitals;
    };

    static async getDogPark(id){
        let resp = await this.request(`dog_parks/${id}`);
        return resp.park;
    };

    static async getDogHospital(id){
        let resp = await this.request(`dog_hospitals/${id}`);
        return resp.hospital;
    };

    static async updateLikes(id,likes,dislikes){
        let resp = await this.request(`comment/like/${id}/${likes}/${dislikes}`,{},"patch");
        return resp.likes;
    };

    static async addComment(user_id,place_id,score,comment){ 
        let resp = await this.request(`comment/addComment/${user_id}/${place_id}/${score}/${comment}`);
        return resp.newComment;
    };

    static async getSearchResult(key){
        let resp = await this.request(`dog_place?search=${key}`);
        return resp.result;
    }

    static async addImage(place_id,url){
        let resp = await this.request(`add_image?place_id=${place_id}&image_url=${url}`);
        return resp.result;
    } 
}

export default AppApi;