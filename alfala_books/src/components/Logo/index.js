import logo from '../../img/logo.svg';

function Logo () {
    return (
        <div className='logo'>
            <img src={logo} alt='Alfala books logo'></img>
            <p> <strong>Alfala</strong>Books</p>
      </div>
    )
}
export default Logo;