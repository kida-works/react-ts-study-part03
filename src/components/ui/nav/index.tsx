import { Link  } from 'react-router-dom';
import styled from 'styled-components';

const NavBox = () => {
  const navLists = [
    {
      title:"Home",
      to:"/"
    },
    {
      title:"item01",
      to:"/item01"
    },
    {
      title:"item02",
      to:"/item02"
    },
    {
      title:"item03",
      to:"/item03"
    }
  ]

  const lists = navLists.map((list)=>{
    return(
      <li key={list.title}>
        <Link to={list.to}>{list.title}</Link>
      </li>
    )
  })
    
  
  return(
    <>
      <nav>
        <InnerNav>
          {lists}
        </InnerNav>
      </nav>
    </>
  )
}

const InnerNav = styled.ul({
  display: "flex",
  "li":{
    "a":{
      display: "inline-block",
      padding: "0.8rem 1.6rem",
      color: "#000",
      transition:"0.6s",
      ":hover":{
        color:"tomato",
      }
    }
  }
})

export default NavBox