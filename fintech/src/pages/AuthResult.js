import React ,{useState, useEffect} from 'react';
import Header from '../component/Header';
import {useLocation} from "react-router-dom";
import queryString from "query-string";
import axios from 'axios';

const AuthResult = () => {
    const {search} = useLocation();
    const {code} = queryString.parse(search);
    const [accessToken, setAccessToken] = useState("토큰 받아오기 전")

    useEffect(() => {
        getAccessToken();
    },[]);

    const getAccessToken = () =>{
        console.log("토큰을 가져옵니다");
        const sendData = {
            code : code,
            client_id:"85dd2bdc-69d2-4b43-b75f-2886dbf2a027",
            client_secret: "45fec24c-4ddb-489d-ac2b-072cb5d23c21",
            redirect_uri: "http://localhost:3000/authResult",
            grant_type: "authorization_code",
        };

        const encodedSendDdata = queryString.stringify(sendData);

        const option = {
            method: "POST",
            url : "https://testapi.openbanking.or.kr/oauth/2.0/token",
            headers:{
                "Content-Type":"application/x-www-form-urlencoded"
            },
            data : encodedSendDdata,
        };

        axios(option).then((response) =>{
            console.log(response);
        })

    };

    return (
        <div>
            <Header title="인증 결과"></Header>
            <p>인증 코드 : {code}</p>
            <p>AccessToken : {accessToken}</p>
        </div>
    )
}

export default AuthResult
