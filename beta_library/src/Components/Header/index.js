import OptionsHeader from "../OptionsHeader";
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color:rgb(197, 197, 197);
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <OptionsHeader />
    </HeaderContainer>
  );
}

export default Header;
