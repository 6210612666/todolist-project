// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    // res.setHeader('getdata', [])
    axios.get('http://localhost:5000/list', { crossdomain: true })
      .then(res => setData(res))
      // .then(res => res.end())
      .catch((error) => {
        console.log(error)
      })
      console.log(data)
  }, [])

  // const chang = () => {
  //   axios.get('http://localhost:5000/list', { crossdomain: true })
  //     .then(res => setData(res.data.topic))
  //     .then(res => res.end())
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }
  

  return (
    <div>
      <p>{data}</p>
    </div>
  )
}
