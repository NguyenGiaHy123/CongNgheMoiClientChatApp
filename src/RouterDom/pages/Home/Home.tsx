import React, { useEffect } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../../feature/user/pathApi";
import { AreaCenter } from "./araCenter/AreaCenter";
import Sidebar from "../../../Layout/Sidebar";
export default function Home() {
  const dispatch = useDispatch();

  // lay cai mang userSlide
  const ListUsers = useSelector((state: any) => state.Users.UserSlice);
  useEffect(() => {
    dispatch<any>(getAllUser());
  }, []);

  return (
    <div className="ContentHomeChat">
      {/* này là thanh tabbar màu xanh bên trái giống zalo */}
      <div className="areaLeft bg-blue-500">1</div>
      {/* <Sidebar /> */}

      {/* This is the user display section */}
      <div className="areaCenter">
        <AreaCenter listUser={ListUsers} />
      </div>

      {/* This is the message display section */}
      <div className="areaRight bg-gray-400 w-full md:w-1/4">3</div>
    </div>
  );
}
