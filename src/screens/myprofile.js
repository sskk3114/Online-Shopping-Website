import React, {useState, useEffect} from 'react';
import axios from '../axios';

function MyProfileScreen(){
  const [userInfo, setUserInfo] = useState({});
  const myProfileApi = () =>{
    
    axios.get(`v1/users/${localStorage.getItem('dl-userId')}`).then((resp)=>{
      const {data} = resp;
      console.log(data)
      if(data.user){
        setUserInfo(data.user);
      }
    }).catch(err=>{

    })
  }
  useEffect(() => {
    myProfileApi();
  }, [])
  return(
    <div className="container my-3 pb-4">
      <div className="row">
        <div className="col-sm">
          <h2 className="my-3">Profile Details</h2>
          <h6 className="my-4">First Name: <span className="text-primary">{userInfo.firstName}</span></h6>
          <h6 className="my-4">Last Name: <span className="text-primary">{userInfo.lastName}</span></h6>
          <h6 className="my-4">Email Name: <span className="text-primary">{userInfo.email}</span></h6>
          <h6 className="my-4">Mobile No: <span className="text-primary">{userInfo.mobile}</span></h6>
          <button className="btn btn-primary">Edit</button>
        </div>
      </div>
    </div>
  )
}

export default MyProfileScreen;