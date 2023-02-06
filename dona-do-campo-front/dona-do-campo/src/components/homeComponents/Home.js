import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
//import Sidebar from "./Sidebar";
import Header from "../headerComponents/Header";
import Sidebar from "../sidebarComponents/Sidebar";
import ImagesCarousel from "./ImagesCarousel";
import News from "./News";
import Matches from "./Matches";
import Footer from "../footerComponent/Footer";

export default function Home() {
  const [imagem, setImagem] = useState("");

  return (
    <Container>
      <Header />
      <Wrapper>
        <News />
        <Matches />
        <ImagesCarousel />
      </Wrapper>
      <Footer />
    </Container>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;

  video {
    z-index: 1;
    background-color: black;
    width: 500px;
    height: 200px;
  }
`;

const Container = styled.div`
width: 100%;
height: 100vh;
`
