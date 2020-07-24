import React,{useState, useEffect} from 'react';
import  styled from '@emotion/styled';
import Quote from './components/Quote';
import Logo from './logo.svg';

const Container = styled.div`
  display:flex;
  align-items:center;
  padding-top:5rem;
  flex-direction: column;
`;

const Button = styled.button`
background: -webkit-linear-gradient(top left,#007d35 0%, #007d35 40%,#0f574e 100%);
background-size: 300px;
font-family: Arial, Helvetica, sans-serif;
color:#fff;
margin-top:3rem;
padding: 1rem 3rem;
font-size: 2rem;
border: 1px solid black;

  &:hover{
    cursor:pointer;
    font-weight:bold;
  }
`;

function App() {

  const [quote, getQuote] = useState({});

  const getCite = async () =>{
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const quote = await api.json();
   getQuote(quote[0]);
  };

  useEffect(() =>{
    getCite();
  },[]);

  return (
    <Container>
      <img className="img-cite" src={Logo} alt="img-breaking-bad"/>
      <Quote quote={quote}/>
      <Button
      onClick={getCite}
      > Get cite</Button>
    </Container>
  );
}

export default App;
