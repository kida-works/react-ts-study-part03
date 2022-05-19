import Header from "../../ui/header";
import Logo from './../../../logo.svg';
import styled from "styled-components";

const Home = () => {
  return(
    <>
    <Header>
      <LogoWrap>
        <img src={Logo} alt="logo" />
      </LogoWrap>
    </Header>
    <main>
      <h1>Home</h1>
    </main>
    </>
  )
}

const LogoWrap = styled.figure({
  width: "50px",
  heigth: "50px",
  "img": {
    width: "100%",
  }
})

export default Home