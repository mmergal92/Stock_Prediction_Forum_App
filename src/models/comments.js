import axios from 'axios';
const url = "https://stock-prediction-forum-backend.herokuapp.com/user/comments"

class UserComments {
    static all (){
        return axios.get(url);
    }
    // static categories(){
    //     return axios.get(`http://stock-prediction-forum-app.herokuapp.com/user/comments`)
    // // }
    // static create(formData){
    //     return axios.post(`http://stock-prediction-forum-app.herokuapp.com/user/comments`, formData)
    // }
    // static questionsByCategory(category){
    //     return axios.get(`https://pure-ocean-22147.herokuapp.com/categories/${category}`)
    // }
    // static byId(id){
    //     return axios.get(`https://pure-ocean-22147.herokuapp.com/questions/${id}`)
    // }
    static addComment(obj){
        return axios.post(url, obj)
    }
    // static update(id,obj){
    //     return axios.put(`https://pure-ocean-22147.herokuapp.com/questions/${id}`,obj)
    // }
    // static delete(id){
    //     return axios.delete(`https://pure-ocean-22147.herokuapp.com/questions/${id}`)
    // }
    // static findByUserId(id){
    //     const userId = {userId: id}
    //     return axios.post(`https://pure-ocean-22147.herokuapp.com/questions/findById`,userId)
    // }
}

export default UserComments;