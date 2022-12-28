import React, { useEffect, useState } from 'react'
import { useRouter} from 'next/router';
import axios from 'axios';
// import { Button, Form, Input, Select  } from 'antd';
// import FormItem from 'antd/es/form/FormItem';


function post() {
  const [id, setId] = useState([])
  const [topic, setTopic] = useState([])
  const [completed, setCompleted] = useState([])
  const route = useRouter()


  const submitData = async (event) => {

      console.log(id)
      console.log(topic)
      console.log(completed)
      console.log(topic)
      await axios.post('http://localhost:5000/post' , {id: id, topic: topic, completed: completed}, { crossdomain: true },)
      .then(
        (res) => {
      //   //   setData(res.data)
          console.log(res.data)
      //     res.redirect('/')
        } 
      )
      .catch((error) => {
        console.log(error)
      })
      event.preventDefault();

  }
    

  return (
    <div>
        <h1>Create new movie</h1>

            <label for="id">Id:</label>
            <input type="text" id="id" name="id" onChange={(e) => setId(e.target.value)}/><br></br>
            <label for="topic">Movie name:</label>
            <input type="text" id="topic" name="topic" onChange={(e) => setTopic(e.target.value)}/><br></br>
            <label for="completed">Completed:</label>
            <input type="text" id="completed" name="completed" onChange={(e) => setCompleted(e.target.value)}/><br></br>
            <button type="submit" onClick={ submitData }>Submit</button>

    </div>
  )
}

export default post