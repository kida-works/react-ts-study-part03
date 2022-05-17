import { Link  } from 'react-router-dom';

const NavBox = () => {
  const navLists = [
    {
      title:"item01",
      to:"/"
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
        <ul>
          {lists}
        </ul>
      </nav>
    </>
  )
}

export default NavBox