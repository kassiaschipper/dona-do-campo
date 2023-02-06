import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai"; 


export default function Footer() {
    return <FooterWrapper>
         <Container><Title> CONECTE COM A FÚRIA </Title>
            <ContatcsBox >
            <FaWhatsapp fontSize={20}/><p>(51) 9xxxx - xxxx</p>
            </ContatcsBox>
            <ContatcsBox >
            <AiOutlineMail fontSize={20}/><p>furiafutebol7@gmail.com</p>
            </ContatcsBox>
            <ContatcsBox >
            <CiFacebook fontSize={24}/><a href="https://www.facebook.com/furiafut7fem" target="_blank" > Facebook</a>
            </ContatcsBox>
            <ContatcsBox >
            <AiOutlineInstagram fontSize={20}/><a href="https://www.instagram.com/furiafut7fem/" target="_blank" > Instagram</a>
            </ContatcsBox></Container>
            <Container>  <Title>Patrocínio</Title>
            <ul>
            <li><a href="https://www.instagram.com/squadra348/" target="_blank" > Squadra348</a></li>
            <li><a href="https://www.instagram.com/marinoscarpoa/" target="_blank" > Marino Car</a></li>
            <li><a href="https://www.imobiliariatchers.com.br/" target="_blank" > Imobiliária Tchê</a></li>
            </ul>
            </Container>
           
            
        
        </FooterWrapper>
}

const FooterWrapper = styled.div`
    width: 100vw;
    height: 30%;
    background-color: black;
    position: relative;
    top:70vw;
    left: 0;
    font-family: "Oswald", sans-serif;    
    display: flex;
    flex-wrap: wrap;
    opacity: 0.9;
    justify-content: space-around;
    padding-top: 10px;
`; 

const Container = styled.div`
a{
    color: white;
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 300;
}
li{
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

`
const Title = styled.div`
color: white;
font-size: 1.2rem;
padding-right: 1.4rem;
padding-left: 1.4rem;
`;

const ContatcsBox = styled.div`
height: 2rem;
display: flex;
justify-content: space-around;
align-items: center;
color: white;
font-size: 1rem;
font-family: Arial, Helvetica, sans-serif;
font-weight: 300;

a{
color: white;
}

`;