import React, {FunctionComponent} from 'react';
import NavBox from './../nav'
import styled from 'styled-components';

interface OwnProps {
  children: React.ReactElement<HTMLParagraphElement>;
}

type Props = OwnProps;

const Header: FunctionComponent<Props> = ({children}) => {
  return(
    <HeaderWrap>
      {children}
      <NavBox />
    </HeaderWrap>
  )
}

const HeaderWrap = styled.header({
  padding: "0.8rem 1.6rem",
  display: "flex",
  justifyContent: "space-between",
  boxShadow: "0 3px 5px 5px rgba( 0, 0 ,0 , 0.3 )",

})
 



export default Header
