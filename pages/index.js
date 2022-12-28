// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { Button } from 'antd';


export default function Home() {
  const route = useRouter()
  const [data, setData] = useState([])

  // วิธีการเขียน aync fun ไม่นิยมใช้ ดูวิธีที่ถูกที่ get id
  useEffect(() => {
    // rossdomain ใช้ทำให้สามารถส่งข้อมูลผ่าน different port
    const fetchData = () => {
      axios.get('http://localhost:5000/get', { crossdomain: true })
      .then(
        (res) => {
          setData(res.data)
          console.log(res.status)
          console.log(res.data)
        } 
      )
      .catch((error) => {
        console.log(error)
      })
    } 
      fetchData()
      // console.log(data)
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])
  

  // button onClick ควรแยกออกมา ใช้ชื่อที่นิยม handle....
  return (
    <div>
      <h1>Data all</h1>

      {data.map(function(dataArray, index){
         return (
          <tr key={index}>
            <td>{dataArray.id}</td>
            <td>{dataArray.topic}</td>
            <td>{dataArray.completed}</td>
            <td><Button onClick={
              () => route.push({pathname: '/get/[pid]', query: {pid: dataArray.id}})}>
                select
            </Button></td>
          </tr>
         )
       })}

       <Button type="primary" onClick={
              () => route.push({pathname: '/post'})}>
                Add
            </Button>
    </div>
  )
}
