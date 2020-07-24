import React from 'react';
import Styled from '@emotion/styled';


const ContainerQute = Styled.div`
    padding:2rem;
    border-radius: .5rem;
    background:#fff;
    margin: .5rem 3rem;
    
    h1{
        font-family: Arial,sans-serif;
        text-align:center;
        position: relative;
        padding-left:4rem;

        &::before{
            content: open-quote;
            font-size: 10rem;
            color: black;
            position:absolute;
            left:-1rem;
            top:-2rem;
        }
    }
    p{
        font-family:Verdana,Geneva,Tahoma;
        font-size:1.4rem;
        font-weight:bold;
        text-align:right;
        color:#666;
        margin-top:2rem;
    }
`;

const Quote = ({quote}) => {
    if(Object.keys(quote).length === 0) return null;

    return (  
        <ContainerQute>
            <h1>{quote.quote}</h1>
            <p>{quote.author}</p>
        </ContainerQute>
    );
}
 
export default Quote;