import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "./layout/layout";

import Filter from "./Filter";

const getData = () => {
    const data = localStorage.getItem('users')
    { console.log(data) }
    if (data) {
        return JSON.parse(data);
    } else {
        return []
    }

}
const UserData = () => {
    const params = useParams();
    const [users, setUsers] = useState(getData())
    const { id } = params


    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))

    }, [users])


    return (
        <Filter>
            <div className="row" style={{width:"400px"}}>
                <div className="col-xs-1 col-sm-1 col-md-1   col-lg-12">
                    <h1>ID:{users[id]?.id}</h1>
                    <h1>Name:{users[id]?.name}</h1>
                    <h1>Age:{users[id]?.age}</h1>
                </div>

            </div>
        </Filter>
    )
}
export default UserData;