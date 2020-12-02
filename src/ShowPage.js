import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ShowPage=(props)=>{
    const {id}=props.match.params
const [userPost,setUserPost]=useState({})
const [userName,setUserName]=useState({})
const[comments,setComments ]=useState([])
useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((responce)=>{
        const result=responce.data
        setUserPost(result)
    })
    .catch((err)=>{
        alert(err.message)
    })
},[])
useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((responce)=>{
        const result=responce.data
        setUserName(result)
    })
},[])
useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then((responce)=>{
        const result=responce.data
        setComments(result)
    })
},[])

    return(
        <div>
            <h2>USER NAME:{userName.name} </h2>
            <h2>TITLE:{userPost.title} </h2>
            <h3>BODY:</h3>
            <h3>{userPost.body} </h3>
            <hr/>
            <h1>Comments</h1>
            <ul>
            {
                comments.map((ele)=>{
                    return <li key={ele.id}>{ele.body} </li>
                })
            }
            </ul>
            <hr/>
        <Link to={`/users/${id}`}>More posts of author:{userName.name}</Link>
        </div>
    )
}

export default ShowPage