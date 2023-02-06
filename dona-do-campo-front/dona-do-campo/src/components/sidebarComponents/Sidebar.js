import styled from "styled-components";
import {
  FaTimes,
  FaHome,
  FaEnvelope,
  FaUserAlt,
  FaIdCardAlt,
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar,
} from "react-icons/fa";

import SidebarItem from "./SidebarItem";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ active }) {
  const navigate = useNavigate();

  function closeSidebar() {
    active(false);
  }

  return (
    <Wrapper sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <a href="#Home">
          <SidebarItem Icon={FaHome} Text="Home" />
        </a>
        {/* <a href="#Estatísticas">  <SidebarItem Icon={FaChartBar} Text="Estatísticas" /></a> */}
        <a href="#Noticias">
          {" "}
          <SidebarItem Icon={FaRegFileAlt} Text="Notícias" />
        </a>
        <a href="#Jogos">
          {" "}
          <SidebarItem Icon={FaRegCalendarAlt} Text="Jogos" />
        </a>
        <a href="#Equipe">
          <SidebarItem Icon={FaIdCardAlt} Text="Equipe" />
        </a>
        <a href="#Contato">
          {" "}
          <SidebarItem Icon={FaEnvelope} Text="Contato" />{" "}
        </a>
        <span onClick={() => navigate("/sign-in")}>
          <SidebarItem Icon={FaUserAlt} Text="Login" />
        </span>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  //background-color: #171923;
  background-color: #000;
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 25vw;
  right: ${(props) => (props.sidebar ? "0" : "-100%")};
  animation: openSidebar 0.4s;
  > svg {
    position: fixed;
    //color: white;
    color: #14a652;
    width: 25px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  @keyframes openSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 25vw;
    }
  }
`;

const Content = styled.div`
  margin-top: 25vh;
`;
