import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getAllUser } from '../../../feature/user/pathApi';
import { IUser } from '../../../Type';

export default function Register() {
  const dispatch=useDispatch();
  

  // const Users=useSelector((state:any)=>state.Users.UserSlice);
  // console.log(Users)
  // useEffect(()=>{
  //       dispatch<any>(getAllUser())
  // },[])
  return (
    <div>Register</div>
  )
}
