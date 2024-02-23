import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../signup";
import GetUsers from "../Users";
import UserCard from "./UserCard";
import Home from "./Home";

function Skeleton(){
return(
    <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/register" element={<SignUp />}/>
        <Route  path="/admin"    element={<GetUsers />}/>
        <Route  path= "/users/:id" element={<UserCard />} />

    </Routes>
)
}

export default Skeleton;