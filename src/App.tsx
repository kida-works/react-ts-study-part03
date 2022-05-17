import { BrowserRouter, Route, Routes, Link  } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Team />} />
          <Route path="teams" element={<NewTeam />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export const Team =() =>{
  return(
    <>
      <h1>team</h1>
      <Link to="teams">NewTeamへ</Link>
    </>
    
  )
}

export const NewTeam =() =>{
  return(
    <>
      <h1>NewTeam</h1>
      <Link to="/">teamへ</Link>
    </>
    
  )
}

export default App;
