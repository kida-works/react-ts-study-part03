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
      <li>
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

const InnerNav = styled.ul`
display; flex;
  li{
    padding; 8px 16px;
  }

`

export default NavBox