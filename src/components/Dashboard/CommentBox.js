import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
// import Form from "@rjsf/core"
// import UserComments from '../models/comments';
function CommentBox() {
//    console.log(window.location.href)
var posSym  = (window.location.href).split("/stocks/").pop().replace('?', '');
// console.log(posSym)
let sym = posSym
console.log(sym)
    const userCommentlist = [{
        symbol: "AAPL",
        date: "June 12, 2021",
        comment: "It will go up",
        username: "testuser"
    }]
    //STATES
    const [newList, setNewList] = useState(userCommentlist)
    const [date, setDate] = useState('');
    // const [symbol, setSymbol] = useState('');
    const [comment, setComment] = useState('');
    const [username, setUsername] = useState('');
    const [change, setChange] = useState(true)
    const tempArray = newList;
    //HANDLES
    const commentChange = (event) =>{
        console.log("Adding text of comment")
        setComment(event.target.value)
    };
    // const dateChange = (event) =>{
    //     console.log("Adding text of date")
    //     setDate(event.target.value)
    // };
    // const symbolChange = (event) =>{
    //     console.log("Adding text of symbol")
    //     setSymbol(event.target.value)
    // };
    const usernameChange = (event) =>{
        console.log("Adding text of username")
        setUsername(event.target.value)
    };
    const handleDelete= async(value)=>{
        const URL = "http://localhost:8080/user/" + sym
        console.log(URL)
        // console.log(tempArray[0].comment)
        const remove = await fetch (URL + "/" + value._id, {
            method: 'DELETE',
        })
        console.log(value._id)
    }
    const getNewList = async() => {
        const postURL = "http://localhost:8080/user/" + sym  
        const response = await fetch (postURL)
        const data = await response.json()
        // console.log(data)
        setNewList(data);
        // console.log(data.id)
    }
    const handleSubmit = (response) =>{
        console.log(response)
        console.log(date)
        const postURL = "http://localhost:8080/user/"
        console.log(postURL)
        fetch (postURL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify ({
                symbol: sym,
                date: date,
                comment: comment,
                username: username
            })
        })
        console.log("Did this work?")
        const tempArray = newList;
        tempArray.push(response)
        setNewList(tempArray)
        setChange(!change);
    }
    React.useEffect(()=>{
        getNewList();
    })
    const loaded = () =>{
        return (
            <div className = "comments">
                <div className = "existing-comments">
                <h3>Existing Comments:</h3>
                <ul>
                    {newList.map((value, index) => {
                        return(
                            <>
                            <li key={index}> Symbol: {value.symbol}, Date:{value.date}, Comment: {value.comment}, Username: {value.username}
                            {/* <button onClick={() => handleUpdate(index)}>UPDATE</button> */}
                            <button onClick={() => handleDelete(value)}>DELETE</button>
                            </li>
                            </>
                        )
                    })}
                </ul>
                </div>
                <br/>
                <div className = "new-comments">
                <h3>Add a new Comment:</h3>
                <form>
                <label>
                Username: <input type= "text" className = "username_input" value = {username} onChange = {usernameChange} placeholder = "username"/>
                </label><br/>
                <label>
                Comment: <textarea className = "comment_input" value = {comment} onChange = {commentChange} placeholder = "New Comment"/>
                </label><br/>
                <button onClick= {handleSubmit}>Submit</button>
                </form>
                </div>
            </div>
        )
    }
    // const schema = {
    //     title: "Comments",
    //     type: "object",
    //     required: ["comment"],
    //     properties: {
    //       symbol: {type: "string", title: "Company Symbol"},
    //       date: {type: "string", title: "Date", default: Date.now},
    //       comment: {type: "string", title: "Comment", default: "Write your new comment here."},
    //       username: {type: "string", title: "Username",}
    //     }
    //   };
    //   const log = (type) => console.log.bind(console, type);
    //   const onSubmitTest = async({formData}) => {
    //       console.log(formData)
    //       await UserComments.create(formData)
    //       window.location.reload()
    //   }
    // let x;
    // console.log(x)
    const loading =()=>{
        return <h1>Loading ...</h1>
    }
    return newList ? loaded(): loading();
}
export default CommentBox