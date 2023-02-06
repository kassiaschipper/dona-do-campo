import { useState } from "react";
import { FaBars, FaUserAlt } from "react-icons/fa";
import styled from "styled-components";
import Sidebar from "../sidebarComponents/Sidebar";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();

  function showSiderbar() {
    setSidebar(!sidebar);
  }

  return (
    <><Wrapper>
        <FaBars onClick={showSiderbar} />
        {sidebar && <Sidebar active={setSidebar} />}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  color: white;
  //background-color: #1A202C;
  background-color: #000;
  box-shadow: 0 0 0px 3px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  span{
    z-index: 1;
    background-color: #14a652;
  }

  > svg {
    position: fixed;
    top: 32px;
    right: 32px;
    color: #14a652;
    //color: white;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;
