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

const HeaderWrap = styled.header`
  padding: 2.4rem 16rem;
`;

export default Header
