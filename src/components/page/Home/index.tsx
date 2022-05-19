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
      <h1>styled-componentsについて</h1>
      <p>参考URL</p>
      <a href="https://www.codegrid.net/articles/2020-styled-components-1/#toc-4">https://www.codegrid.net/articles/2020-styled-components-1/#toc-4</a>
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