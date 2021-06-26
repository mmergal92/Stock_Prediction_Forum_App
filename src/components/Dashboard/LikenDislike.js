import React,{useState, useEffect} from 'react'

function LikenDislike () {

    let posSym  = (window.location.href).split("/stocks/").pop().replace('?', '');

    let sym = posSym

    let gotlikeinfo;
    
    let individuallikeinfo;

    let listofusersvote = []

    // const [likebtn, setLikebtn] = useState('')
    // const [upordown, setUpordown] = useState('Neutral')
    


  
    const [numberofUsers, setNumberofUsers] = useState(0)
    const [vote, setVote] = useState(false)
    const [render, setRender] = useState('')
    const [positive, setPositive] = useState(0)
    const [negative, setNegative] = useState(0)
    const [hover, setHover] = useState(false)
    const [userlist, setuserlist] = useState('')
    const onLeave = () => {
      setHover(false)
      console.log('i out')
    }
    const onHover = () =>{
      setHover(true)
      console.log('i in')
    }

        let checklikes =  (arr) => {
          let arrayofvotes = []
          let votelikes = []
          let votedislikes = []
          let length;
          let possitive;
          // let listofusersvote = []
          for(let x = 0; x < arr.length; x++){
            for(let y = 0; y < arr[x].length; y++){

              if(arr[x][y].symbol === sym && arr[x][y].date === new Date(Date.now()).toLocaleDateString()){

                if(arr[x][y].type === 'like'){
                  votelikes.push(1)
                  
                } else if(arr[x][y].type === 'dislike'){
                  votedislikes.push(1)
                }


                arrayofvotes.push([arr[x][y].symbol+arr[x][y].user])
                listofusersvote.push(arr[x][y].user)
              }

              if(arr[x][y].symbol === sym && arr[x][y].user === localStorage.getItem('userfRealName') && arr[x][y].date === new Date(Date.now()).toLocaleDateString()){
                
                console.log('reach here')

                

                setVote(true)
              }
              

            }
          }
          // length = numberofUsers

          length = votelikes.length + votedislikes.length;
          possitive = ((votelikes.length / length) * 100).toFixed(3);
          setPositive(possitive);

          setNegative(100 - positive)

          console.log(positive)
          setNumberofUsers(arrayofvotes.length)
          console.log(numberofUsers)
          console.log(negative)
          setuserlist(listofusersvote)
          
        }

        
   
        let getlikeinfo = async () => {
            console.log(numberofUsers)

            let response = await fetch('http://localhost:3001/like/everything');

            let likeinfo = await response.json();
            console.log(likeinfo)
            checklikes(likeinfo)
            setRender('run')
            console.log(numberofUsers)
            return gotlikeinfo = likeinfo;
            

        }
        

        React.useEffect(() => {

           getlikeinfo();
           

        }, [])

      
    let presslike = () => {
        console.log(vote)
        if(vote === false){
            localStorage.setItem(`uservote${sym}`, sym+'like')
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
                  type: 'like',
                  user: localStorage.getItem("userfRealName"),
                  date: new Date(Date.now()).toLocaleDateString()
                }),
              });
            setVote(true)
            getlikeinfo();
            window.location.reload();
        // } else if(vote === true){
        //     localStorage.removeItem(`uservote${sym}`)
        //     fetch('http://localhost:3001/like/del', {
        //         method: "DELETE",
        //         headers: {
        //           Accept: "application/json",
        //           "Content-Type": "application/json",
        //         },
          
        //         //make sure to serialize your JSON body
        //         body: JSON.stringify({
        //           email: localStorage.getItem("sessionEmail"),
        //           symbol: sym,
        //           type: 'like',
        //           user: localStorage.getItem("userfRealName"),
        //           date: 'today'
        //         }),
        //       });
 
        //       getlikeinfo();
        //       setLikebtn('Neutral')
        //     setVote(false)

        // }
    }
  }

    let pressdislike = () => {

        console.log(vote)
        if(vote === false){
            localStorage.setItem(`uservote${sym}`, sym+'dislike')
            fetch('http://localhost:3001/dislike/add', {
                method: "post",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
          
                //make sure to serialize your JSON body
                body: JSON.stringify({
                  email: localStorage.getItem("sessionEmail"),
                  symbol: sym,
                  type: 'dislike',
                  user: localStorage.getItem("userfRealName"),
                  date: new Date(Date.now()).toLocaleDateString()
                }),
              });
              getlikeinfo();

            setVote(true)
            window.location.reload();
        }
        // } else if(vote === true){
        //     localStorage.removeItem(`uservote${sym}`)
        //     fetch('http://localhost:3001/dislike/del', {
        //         method: "DELETE",
        //         headers: {
        //           Accept: "application/json",
        //           "Content-Type": "application/json",
        //         },
          
        //         //make sure to serialize your JSON body
        //         body: JSON.stringify({
        //           email: localStorage.getItem("sessionEmail"),
        //           symbol: sym,
        //           type: 'dislike',
        //           user: localStorage.getItem("userfRealName"),
        //           date: 'today'
        //         }),
        //       });

        //       getlikeinfo();
        //       setLikebtn('Neutral')
        //     setVote(false)

        // }
    }



    const loaded = () => {
      return (
        <div>
            <a href="">There are currently {numberofUsers} users have casted their vote today. {positive}% In Favor & {negative}% Against. </a> <img onMouseEnter={onHover} onMouseLeave={onLeave} className="questionmark"src="https://i.ibb.co/ZLp9rgn/help.png" alt="" />
            <br />
            {hover ?  userlist: ''}
            <br />
            {vote ? 'Thank you for voting.': <div>
            <button disabled={vote === true} className="likedislikebtn" onClick={presslike}>The Price Will Go Up</button>
           <button disabled={vote === true} className="likedislikebtn" onClick={pressdislike}>The Price Will Go Down</button>
            </div>}
           

        </div>
    )

    }
    
    const loading =()=>{
      return <h1>Loading ...</h1>
  }
  return render ? loaded(): loading();

}

export default LikenDislike;
