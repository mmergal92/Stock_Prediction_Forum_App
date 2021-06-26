import React,{useEffect, useState} from 'react'

function CreateNickName() {
    const [nickname, setNickname] = useState('')

    const nicknameChange = (event) =>{
        console.log(event.target.value)
        setNickname(event.target.value)
    };

    const handleSubmit = (response) => {
        console.log(response)
    }

    return (
        <div>
            <form>
                <label>
                Username: <input type= "text" className = "nickname_creation" value = {nickname} onChange = {nicknameChange} placeholder = "nickname"/>
                </label>
                <button onClick= {handleSubmit}>Submit</button>
                </form>
        </div>
    )
}

export default CreateNickName
