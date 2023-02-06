import styled from "styled-components";
import furiaLogo from "../../assets/images/furiaLogo.jpg";
import LogoGremio from "../../assets/images/LogoGremio.jpg";
import { GiSoccerField } from "react-icons/gi";
export default function Matches() {
  return (
    <>
      <TitleWrapper >
        <p>|</p> <h2> Jogos </h2>
      </TitleWrapper>
      <MatchesWrapper id="Jogos">
        <MatcheCard>
          <img src={furiaLogo} />
          <span>{1}</span>VS<span>{0}</span>
          <img src={LogoGremio} />
          <DateAndTime>
            <h3>12/11/2014</h3>
            <h4>15h</h4>
          </DateAndTime>
          <h5>
            <GiSoccerField color="#14a652" fontWeight={700} />
            <a href="https://www.orlasportsbar.com.br/home/" target="_blank">Orla Sports Bar</a>
          </h5>
        </MatcheCard>
        <MatcheCard>
          <img src={furiaLogo} />
          <span>{1}</span>VS<span>{0}</span>
          <img src={LogoGremio} />
          <DateAndTime>
            <h3>12/11/2014</h3>
            <h4>15h</h4>
          </DateAndTime>
          <h5>
            <GiSoccerField color="#14a652" fontWeight={700} />
            <a href="https://www.orlasportsbar.com.br/home/" target="_blank">Orla Sports Bar</a>
          </h5>
        </MatcheCard>
        <MatcheCard>
          <img src={furiaLogo} />
          <span>{1}</span>VS<span>{0}</span>
          <img src={LogoGremio} />
          <DateAndTime>
            <h3>12/11/2014</h3>
            <h4>15h</h4>
          </DateAndTime>
          <h5>
            <GiSoccerField color="#14a652" fontWeight={700} />
            <a href="https://www.orlasportsbar.com.br/home/" target="_blank">Orla Sports Bar</a>
          </h5>
        </MatcheCard>
      </MatchesWrapper>
    </>
  );
}

const TitleWrapper = styled.div`
  display: flex;
  position: relative;
  top: 34vh;
  left: 5vw;
  color: #14a652;
  font-size: 30px;
  font-weight: 700;
  font-family: "Oswald";

  p {
    margin-right: 0.4rem;
  }

  h2 {
    color: #000;
    font-weight: 500;
    z-index: 1;
  }
`;
const MatchesWrapper = styled.div`
  position: relative;
  top: 35vh;
  left: 2.5vw;
  width: 75vw;
  //height: 40vw;
  height: 100%;
  margin-left: 2.5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MatcheCard = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 0.5rem;
  background-color: #fff;
  border-radius: 14px;
  border: 1px solid gray;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 3px;
  padding-bottom: 3px;

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: fill;
  }

  h1 {
    margin: 10px auto;
    font-weight: 500;
    color: black;
  }
  p {
    margin: 0 auto;
    width: 85%;
    height: 80%;
    overflow: hidden;
    color: gray;
    font-size: 1.2rem;
  }
  h5 {
    font-weight: 300;
    font-size: large;
    display: flex;
    width: 12vw;
    justify-content: space-between;
  }

  a{
    color: black;
  }
`;

const DateAndTime = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 70%;

  h3 {
    font-size: 1.4rem;
    font-weight: 400;
  }

  h4 {
    font-size: 1.3rem;
    font-weight: 300;
  }
`;
const CardFooter = styled.div``;
