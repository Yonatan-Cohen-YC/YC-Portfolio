import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 90px;
  position: sticky;
  display: flex;
  align-items: center;
  top: 0;
  z-index: 999;
  background-color: ${(props) => (props.dark ? "#222222" : "#222222")};
  color: #fff;
  transition: 0.3s;
`;

export const List = styled.ul`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: s;
  list-style: none;
  margin: auto;
  padding: 10px 0;
`;

export const ListItem = styled.li`
  margin: 10px;
  color: #999;
  cursor: pointer;
`;

export const Logo = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f06b50;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  margin-left: 200px;
  margin-right: 100px;
`;
