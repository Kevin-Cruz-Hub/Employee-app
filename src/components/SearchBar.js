import './Styles.css'
function SearchBar(props){
    return(
        <div>
            <input type={props.type} className='Search'/>
        </div>
    )
}
export default SearchBar;