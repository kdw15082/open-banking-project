import React, {useEffect, useState } from 'react'
import Header from '../component/Header';
import axios from "axios";

const Main = () => {
    const [accoountList, setAccountList] = useState([]);


    useEffect(() => {
        getAccountList();
    },[]);

    const getAccountList  = () => {
        const accessToken = localStorage.getItem("accessToken");
        const userSeqNo = localStorage.getItem("userSeqNo");

        const option = {
            method: "GET",
            url : "/v2.0/user/me",
            headers:{
                "Authorization": `Bearer ${accessToken}`
            },
            params:{
                "user_seq_no" : `${userSeqNo}`
            },
        };

        axios(option).then(({data}) =>{
            console.log(data);
        });
    }

    return (
        <div>
            <Header title={"메인"}></Header>
        </div>
    )
}

export default Main
