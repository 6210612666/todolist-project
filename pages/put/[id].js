import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { Button } from 'antd'


export default function put(props) {
    const [id, setId] = useState([])
    const [topic, setTopic] = useState("")
    const [completed, setCompleted] = useState("")
    const route = useRouter()
    const [data, setData] = useState([])

    //get method request to show
    useEffect(() => {
      const fetchData = async (array) => {
        // console.log(array)
        setId(array.id)
        await axios.get('http://localhost:5000/get/' + array.id, { crossdomain: true })
        .then(
          (res) => {
            setData(res.data)
            setTopic(res.data[0].topic)
            setId(res.data[0].id)
            console.log(res.data)
          } 
        )
        .catch((error) => {
          console.log(error)
        })
      } 

      if(route.isReady){
        fetchData(route.query)
      }
    }, [route.isReady])
  
    useEffect(() => {
      console.log(data)
    }, [])

    //ส่งข้อมูลว่างไม่ได้ ต้องไม่ใส่
    // put method request
    const submitData = async () => {
        console.log('===put data===')
        console.log(id)
        console.log(topic)
        console.log(completed)
        if(topic==="" || completed===""){
          console.log("===data null===")
          alert("please input data")
          return 
        }
        // let dataBody = {}
        // if(topic.length > 0){
        //     dataBody.topic = topic
        // }
        // if(completed.length > 0){
        //   dataBody.completed = completed
        // }   
        console.log(dataBody)

        await axios.put('http://localhost:5000/put/' + id , dataBody, { crossdomain: true },)
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
  
    }



  return (
    <div>
      <h1>Update data Id: {id}</h1>
          <form>
            <label for="topic">Movie name:</label>
            <input type="text" id="topic" name="topic" value={topic} onChange={(e) => setTopic(e.target.value)}/><br></br>
            <label for="completed">Completed:</label>
            <input type="text" id="completed" name="completed" value={completed} onChange={(e) => setCompleted(e.target.value)} /><br></br>
            {/* <input type="submit" value="Submit" /> */}
            <Button type="primary" onClick={submitData}>Submit</Button>
              
          </form>
          
    </div>
  )
}
