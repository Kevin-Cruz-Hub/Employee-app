import './Styles.css'
function EmpListItem(props){
    return(
        <div className='split'>
            <div >
                <img src={props.picture} alt='n/a' className='img'/>
            </div>
            <div>
                <h2>{props.fName}</h2>
                <p>{props.position}</p>
            </div>  
        </div>
    )
}


export default EmpListItem;