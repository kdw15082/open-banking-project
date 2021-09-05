import React,{useState} from 'react'
import axios from "axios";
import styled from "styled-components";

const ModalCardBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 20px;
  border: 1px #112211 solid;
`;
const CardTitle = styled.div`
  font-size: 1rem;
  color: black;
`;
const FintechUseNo = styled.div`
  font-size: 0.7rem;
  margin-bottom: 30px;
`;

const WithDrawButton = styled.button`
  border: none;
  padding: 0.3rem;
  background: #2aa450;
  color: white;
  margin-top: 0.3rem;
`;

const ModalCard = ({bankName, fintechUseNo, tofintechno}) => {
    //input data 받아온 다음에 결제 버튼을 눌렀을 때 axios 출금 이체 발생시키기
    const [amount, setamount] = useState("");
    const handleAmountChange = (e) =>{
        const {value} = e.target;
        setamount(value);
    };

    const genTransId = () => {
        let countnum = Math.floor(Math.random() * 1000000000) + 1;
        let transId = "M202113062U" + countnum; //이용기관번호 (본인번호) 입력
        return transId;
      };

    return (
        <div>
            <ModalCardBlock>
                <CardTitle>{bankName}</CardTitle>
                <FintechUseNo>{fintechUseNo}</FintechUseNo>
                <p>{tofintechno}에 출금이체를 발생시킵니다.</p>
                <input onChange={handleAmountChange}></input>
                <WithDrawButton onClick={handleClickWithdraw}>결제하기</WithDrawButton>
            </ModalCardBlock>
            
        </div>
    )
}

export default ModalCard
