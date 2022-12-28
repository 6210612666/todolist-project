import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { Button } from 'antd'


export default function GetById(props) {
    const route = useRouter()
    const [data, setData] = useState([])


    // correct function async-await 
    useEffect(() => {
      const fetchData = async (array) => {
        console.log(array)
        try {
          const dataGeted = await axios.get(`http://localhost:5000/get/${array.id}`)
          setData(dataGeted)
        } catch {
          console.log(error)
        }
      } 

      if(route.isReady){
        fetchData(route.query)
        // dataS = [data]
      }
    }, [route.isReady])
  
    useEffect(() => {
      console.log(data)
    }, [data])


    //delete data
    const deleteDatafunction = () =>{
      const deleteData = async (array) => {
        console.log(array)
        await axios.delete(`http://localhost:5000/delete/${array.id}`)
        .then(
          (res) => {
            console.log(res.status)
            route.push('/')
          } 
        )
        .catch((error) => {
          console.log(error)
        })
      } 

      deleteData(route.query)
    }


  return (
    <div>
     <h1>Get by Id: {data.id}</h1>

        {data.map(function(d, idx){
         return (
          <tr key={idx}>
            <td>{d.id}</td>
            <td>{d.topic}</td>
            <td>{d.completed}</td>
              
            <td><Button onClick={
              () => route.push({pathname: '/put/[pid]', query: {pid: d.id}})}>
                select
            </Button></td>
            <td><Button type="primary" onClick={deleteDatafunction} danger>delete</Button></td>

          </tr>
         )
       })}
      
    </div>
    
  )
}
