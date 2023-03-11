import React, { useEffect, useState } from 'react'

const FetchApiByHooks = () => {
    const [users,setUsers]=useState([])
    const getUser =async()=>{
        const Response =await fetch("https://api.github.com/users");
    setUsers( await Response.json());
    }
    useEffect(()=>{
        getUser();
    },[])
  return (
    <>
    <div className='row'>
    <h1>List of GitHub Users</h1>
    {
        users.map((currEle)=>{
            return( 
                <div className='col-md-4 my-3' key={currEle.following_url}>
            <div className="card " style={`width: 18rem`} >
            <img src={currEle.avatar_url}  className="card-img-top" alt="..."/>
            <div className="card-body ">
              <h5 className="card-title">{currEle.login}</h5>
              <p className="card-text">{currEle.followers_url}</p>
              <a href="/" className="btn btn-primary">Go somewhere</a>
              </div>
              </div>
              </div>
            );
          })
    }
   </div>
    </>
  )
}

export default FetchApiByHooks
