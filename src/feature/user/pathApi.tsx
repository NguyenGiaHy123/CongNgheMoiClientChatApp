import { createAsyncThunk } from "@reduxjs/toolkit";
import UserApi from "../../api/user";
export const getAllUser=createAsyncThunk("getAllUser",async()=>{
    const data=UserApi.getAllUser();
   
    return data;
})