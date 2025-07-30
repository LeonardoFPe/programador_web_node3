import styled from 'styled-components';
import OptionsHeader from '../OptionsHeader';
import IconsHeader from '../IconsHeader';

const HeaderContainer = styled.header`
  background-color: rgb(197, 197, 197);
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <OptionsHeader />
      <IconsHeader />
    </HeaderContainer>
  );
}

export default Header;
