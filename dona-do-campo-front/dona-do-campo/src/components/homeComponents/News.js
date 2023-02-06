import styled from "styled-components";

export default function News() {
  return (
    <>
      <TitleWrapper id="Noticias">
        <p>|</p> <h2> Notícias</h2>
      </TitleWrapper>
      <NewsWrapper  >
        <NewsCard>
          <h1>Título</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </NewsCard>
        <NewsCard>
          <h1>Título</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </NewsCard>
        <NewsCard>
          <h1>Título</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </NewsCard>
        
      </NewsWrapper>
    </>
  );
}

const NewsWrapper = styled.div`
  position: relative;
  top: 26vh;
  left: 2.5vw;
  width: 75vw;
  height: 100%;
  margin-left: 2.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const NewsCard = styled.div`
  width: 40vw;
  height: 45vh;
  margin-left: 10px;
  background-color: #FFF;
  border-radius: 14px;
  border: 1px solid lightgray;
  box-shadow: 10px 0px 15px 0px lightgray;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: start;
  
  h1{
    margin: 10px auto;
    font-weight: 500;
    color: black;
  }
  p{
    margin: 0 auto;
    width: 85%;
    height: 80%;
    overflow: hidden;
    color:gray;
    font-size: 1.2rem;

  }
 
`;

const TitleWrapper = styled.div`
  display: flex;
  position: relative;
  top: 24vh;
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
