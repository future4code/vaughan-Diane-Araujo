import React from "react";
import styled from "styled-components";

const DivCardPequeno = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  padding: 20px 280px 10px 40px;  //largura e altura 
  margin-bottom: 10px; //espaçamento
`;



function CardPequeno(props) {
    return (
        <DivCardPequeno>
     
            <p>{props.email}</p>

        <p>{props.endereco}</p>
    
    </DivCardPequeno>
    );
} 
 
export default CardPequeno;

 