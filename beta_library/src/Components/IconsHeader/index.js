import styled from 'styled-components';
import perfil from '../img/email.png';
import email from '../img/pessoa.png';

const Icones = styled.ul`
    display: flex;
    margin-right: 40px;
    width: 25px;
    cursor: pointer;
`;


const Icone = styled.li`
  display: flex;
  align-items: center;
`;

const icones = [perfil, email];

function IconsHeader() {
  return (
    <Icones>
      {icones.map((icone, index) => (
        <Icone key={index}>
          <img src={icone} alt="ícone" />
        </Icone>
      ))}
    </Icones>
  );
}

export default IconsHeader;
