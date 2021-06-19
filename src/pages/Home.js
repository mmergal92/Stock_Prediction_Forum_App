import React from 'react'
import Form from "@rjsf/core"


// Components
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import UserComments from '../models/comments';

function Home() {
    const schema = {
        title: "Comments",
        type: "object",
        required: ["comment"],
        properties: {
          symbol: {type: "string", title: "Company Symbol"},
          date: {type: "string", title: "Date", default: Date.now},
          comment: {type: "string", title: "Comment", default: "Write your new comment here."},
          username: {type: "string", title: "Username",}
        }
      };
      const log = (type) => console.log.bind(console, type);
    
      const onSubmitTest = async({formData}) => {
          console.log(formData)
          await UserComments.create(formData)
          window.location.reload()
      }

    // let x;
    // console.log(x)

    return (
        <div>
            <Header/>
            <Form schema={schema}
        onChange={log("changed")}
        onSubmit={onSubmitTest}
        onError={log("errors")} />
            <Footer/>
        </div>
    )
}

export default Home
