import './Styles.css'
function Header(props){
    return(
        <div>
            <h2 className='header'>{props.title}</h2>
        </div>
    )
}
export default Header;