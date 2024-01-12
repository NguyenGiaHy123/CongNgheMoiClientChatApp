import { createSlice } from "@reduxjs/toolkit";
import { getAllUser } from "./pathApi";
import { IUser } from "../../Type";

//khai bao typescript
interface UserState {
    UserSlice: IUser[];
    loading: boolean;

}
//kieu du lieu cho initalstate
const initialState: UserState = {
    UserSlice: [],
    loading: false,
};

//tao slice

const userSlide = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //trang thai bat dau ket noi vs server
        builder.addCase(getAllUser.pending, (state, action) => {
            state.loading = true;
        });
        //trang thai khong thanh cong 
        builder.addCase(getAllUser.rejected, (state, action) => {
            state.loading = false;
        });

        //trang thai thanh cong 
        //action.payload.data la data ma server tra ve
        //
        builder.addCase(getAllUser.fulfilled, (state:any, action) => {
          
      
            state.UserSlice = action.payload;

            console.log(state.UserSlice)
        });

    },
})

const { reducer } = userSlide
export default reducer