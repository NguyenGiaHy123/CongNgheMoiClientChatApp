import axiosClient from "./axiosClient"

const UserApi={
    getAllUser:()=>{
        const url='/users'
        return axiosClient.get(url);
    }
}
export default UserApi