import { BrowserRouter, Route, Routes, Link  } from 'react-router-dom';
import Header from "./components/ui/header";
import Home from './components/page/Home';
import Logo from './logo.svg';
import styled from 'styled-components';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item01" element={<Item01 />} />
          <Route path="item02" element={<Item02 />} />
          <Route path="item03" element={<Item03 />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export const Item01 =() =>{
  return(
    <>
      <Header>
        <LogoWrap>
          <img src={Logo} alt="logo" />
        </LogoWrap>
      </Header>
      <h1>Item01</h1>
      <Link to="teams">NewTeamへ</Link>
    </>
    
  )
}

export const Item02 =() =>{
  return(
    <>
      <Header>
        <LogoWrap>
          <img src={Logo} alt="logo" />
        </LogoWrap>
      </Header>
      <h1>Item02</h1>
      <Link to="/">teamへ</Link>
    </>
    
  )
}
export const Item03 =() =>{
  return(
    <>
      <Header>
        <LogoWrap>
          <img src={Logo} alt="logo" />
        </LogoWrap>
      </Header>
      <h1>Item03</h1>
      <Link to="/">teamへ</Link>
    </>
    
  )
}

export const NoMatch = () => {
  return(
  <h2>このページは存在しません</h2>
  )
}

const LogoWrap = styled.figure({
  width: "50px",
  heigth: "50px",
  "img": {
    width: "100%",
  }
})

export default App;
