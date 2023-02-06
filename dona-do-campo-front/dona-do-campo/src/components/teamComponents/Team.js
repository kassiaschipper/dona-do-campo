import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export default function Team (){
    const navigate = useNavigate();

    return <Wrapper>
        <button onClick={() => navigate("/")}>voltar para home</button>
        </Wrapper>
}
const Wrapper = styled.div`
width: 100%;
background-color: azure;
`