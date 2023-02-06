import { useState, useEffect, useRef } from "react";
import styled from "styled-components"; //import NewsCards from "./NewsCards";
import { motion } from "framer-motion";
import download from "../../assets/images/download.jpeg";
import time from "../../assets/images/time.jpg";
import Panel from "../../assets/images/Painel.jpg";
import image1 from "../../assets/images/image1.jpg";
import { useNavigate } from "react-router-dom";

const images = [download, time, Panel, image1];

export default function ImagesCarousel() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <Container>
      <TitleWrapper>
        <p>|</p> <h2> Equipe </h2>
      </TitleWrapper>
      <Wrapper id="Equipe">
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="inner"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {images.map((image) => (
              <motion.div className="item" key={image}>
                <img src={image} alt="Noticias" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Wrapper> 
      <span onClick={() => navigate("/team")}>{"Ver tudo > "}</span>
    </Container>
  );
}

const Container = styled.div`
span{
    position: relative;
    left: 74vw;
    top:58vh;
    font-size: 1rem;
    cursor:pointer;
}
`;
const TitleWrapper = styled.div`
  display: flex;
  position: relative;
  top: 52vh;
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

const Wrapper = styled.div`
  position: relative;
  top: 25vw;
  width: 75vw;
  height: 60vh;
  margin-left: 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  .inner {
    display: flex;
  }
  .item {
    min-height: 200px;
    min-width: 400px;
    padding-left: 0.5rem;
  }
  img {
    width: 100%;
    height: 90%;
    border-radius: 14px;
    pointer-events: none;
  }
  .carousel {
    cursor: grab;
    overflow: hidden;
  }
`;
