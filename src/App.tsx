import { BrowserRouter, Route, Routes, Link  } from 'react-router-dom';
import NavBox from './components/ui/nav'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBox />
        <Routes>
          <Route path="/" element={<Item01 />} />
          <Route path="item02" element={<Item02 />} />
          <Route path="item03" element={<Item03 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export const Item01 =() =>{
  return(
    <>
      <h1>Item01</h1>
      <Link to="teams">NewTeamへ</Link>
    </>
    
  )
}

export const Item02 =() =>{
  return(
    <>
      <h1>Item02</h1>
      <Link to="/">teamへ</Link>
    </>
    
  )
}
export const Item03 =() =>{
  return(
    <>
      <h1>Item03</h1>
      <Link to="/">teamへ</Link>
    </>
    
  )
}

export default App;
