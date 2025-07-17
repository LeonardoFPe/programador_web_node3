import './styles.css'
import styled from 'styled-components'
import perfil from '../../img/perfil.svg'
import sacola from '../../img/sacola.svg'


const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`
const Icones = styled.li`
    display: flex;
    align-items: center;
`

const icones = [perfil, sacola]
function IconesHeader() {
    return (
        <Icones>
            {icones.map((icone) => (
                <Icone>
                    <img src={icone}></img>
                </Icone>
            ))}
        </Icones>
    )
}

export default IconesHeader
