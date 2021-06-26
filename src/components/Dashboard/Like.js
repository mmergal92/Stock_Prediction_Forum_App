import React,{useState} from 'react'

function Like() {
    let posSym  = (window.location.href).split("/stocks/").pop().replace('?', '');

    let sym = posSym
    const [addclass, setAddClass] = useState(false)


    let press = () => {
        console.log(addclass)
        if(addclass === false){
            fetch('http://localhost:3001/like/add', {
                method: "post",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
          
                //make sure to serialize your JSON body
                body: JSON.stringify({
                  email: localStorage.getItem("sessionEmail"),
                  symbol: sym,
                  user: localStorage.getItem("userfRealName"),
                  date: 'today'
                }),
              });
            setAddClass(true)

        } else if(addclass === true){
            
            fetch('http://localhost:3001/like/del', {
                method: "DELETE",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
          
                //make sure to serialize your JSON body
                body: JSON.stringify({
                  email: localStorage.getItem("sessionEmail"),
                  symbol: sym,
                  user: localStorage.getItem("userfRealName"),
                  date: 'today'
                }),
              });

            setAddClass(false)

        }
    }


    return (
        <div>

           <button className={addclass ? 'gored': ''} onClick={press}>The Price Will Go Up</button>

        </div>
    )
}

export default Like
