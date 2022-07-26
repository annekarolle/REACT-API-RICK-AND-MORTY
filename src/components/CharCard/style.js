import styled from "styled-components";

export const Container = styled.div`  
  color: #ffff;

  span{
    font-size: 12px;
    padding-left: 15px;
    color: #F25790;
    margin-top: 20px;
  }

  h2{
    font-size: 15px;
    padding-left: 15px;
    margin: 0;
    margin-top: 5px;
  }

  img{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  li{
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    background-color: #2b5f8c45;  
    cursor: pointer; 
    border-radius: 10px;
    padding-bottom: 10px;
  }

  li:hover{
    background-color: #49a4f445;  
    transform: scale(1.05);
  }

  .containerStatus{
    display: flex;
    padding-left: 15px;
    align-items: center;
  }

  .Alive{
    background-color: #03A60E;
    width: 10px;
    height: 10px;
    margin-top: 5px;
    border-radius:50%;

  }
  
  .Dead{
    background-color: #F20505;
    width: 10px;
    height: 10px;
    margin-top: 5px;
    border-radius:50%;
  }
  
  .unknown{
    background-color:#BFBFBF;
    width: 10px;
    height: 10px;
    margin-top: 5px;
    border-radius:50%;
  }
`

