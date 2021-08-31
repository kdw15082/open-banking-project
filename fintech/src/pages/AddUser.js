import React from 'react'
import Header from '../component/Header'

const AddUser = () => {

    const openAuthSite = () =>{
        let tmpwindow = window.open("about:blank");
        let clinet_id = "85dd2bdc-69d2-4b43-b75f-2886dbf2a027"
        tmpwindow.location.href = "https://naver.com";
    }

    return (
        <div>
            <Header title="사용자 추가"></Header>
            <button onClick={openAuthSite}>사용자 인증</button>
        </div>
    )
}

export default AddUser
