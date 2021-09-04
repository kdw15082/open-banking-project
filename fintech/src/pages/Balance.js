import React, {useEffect, useState} from 'react'
import BalanceCard from '../component/balance/BalanceCard'
import Header from '../component/Header'
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const Balance = () => {
    const {search} = useLocation();
    const {fintechUseNo} = queryString.parse(search);
    const [balance, setBalance] = useState();

    useEffect(() =>{
      getBalanceData();  
    },[]);

    const getBalanceData = () =>{

    };

    return (
        <div>
            <Header title="잔액조회"></Header>
            <BalanceCard></BalanceCard>
        </div>
    )
}

export default Balance
