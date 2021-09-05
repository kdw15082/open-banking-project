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

    const handleWithdraw = ()=>{
        //사용자 출금 요청 발생
    var sendData = JSON.stringify({
        bank_tran_id: genTransId(),
        cntr_account_type: "N",
        cntr_account_num: "100000000001",
        dps_print_content: "출금테스트",
        fintech_use_num: "120211306288932376767287",
        tran_amt: amount,
        tran_dtime: "20190910101921",
        req_client_name: "김동욱", 
        req_client_fintech_use_num : "120211306288932376767287",
        req_client_num: "HONGGILDONG1234",
        transfer_purpose: "ST",
        recv_client_name: "김동욱", 
        recv_client_bank_code: "097", 
        recv_client_account_num: "100000000001"
        });
    //전달하는 정보의 JsObject 선언


    const option = {
        method: "POST",
        url: "/v2.0/transfer/withdraw/fin_num",
        headers: {
          Authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        data: sendData,
      };
      axios(option).then(({ data }) => {
        console.log(data);
        if(data.rsp_code ==="A0000"){
            deposit();
        }
      });
    }

    const deposit = () =>{
        const twoLeggedToken=
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJNMjAyMTEzMDYyIiwic2NvcGUiOlsib29iIl0sImlzcyI6Imh0dHBzOi8vd3d3Lm9wZW5iYW5raW5nLm9yLmtyIiwiZXhwIjoxNjM4NjExMzkwLCJqdGkiOiI4ZmEzZTZlZC02ZmZjLTRkZTYtOTk0NS1iZjlmZGI3MjI2NmMifQ.xC9nUF6-odNw8XVU6qZ6v4S6bPyOLyDeuqoLXn15Ia0"
        const option = {
            method: "POST",
            url: "/v2.0/transfer/deposit/fin_num",
            headers: {
            Authorization: `Bearer ${twoLeggedToken}`,
        },
        data: {
            cntr_account_type: "N",
            cntr_account_num: "200000000001",
            wd_pass_phrase: "NONE",
            wd_print_content: "이체테스트",
            name_check_option: "on",
            tran_dtime: "20190910101921",
            req_cnt: "1",
            req_list: [
            {
            tran_no: "1",
            bank_tran_id: genTransId(),
            fintech_use_num: "120211306288932376767287",
            print_content: "이체테스트",
            tran_amt: "5000",
            req_client_name: "김동욱",
            req_client_bank_code: "097", 
            req_client_account_num: "100000000001",
            req_client_num: "HONGGILDONG1234",
            transfer_purpose: "ST"
            }
            ]
            

        },
        }
        axios(option).then(({data})=>{
            console.log(data)
            if(data.rsp_code ==="A0000"){
                alert("결제 완료");
            }
        })
    }
    return (
        <div>
            <ModalCardBlock>
                <CardTitle>{bankName}</CardTitle>
                <FintechUseNo>{fintechUseNo}</FintechUseNo>
                <p>{tofintechno}에 출금이체를 발생시킵니다.</p>
                <input onChange={handleAmountChange}></input>
                <WithDrawButton onClick={handleWithdraw}>결제하기</WithDrawButton>
            </ModalCardBlock>
            
        </div>
    )
}

export default ModalCard
