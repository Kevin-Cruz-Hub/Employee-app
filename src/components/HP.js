import './Styles.css'
function Hp(props){
    return(
        <div className='hp'>
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


export default Hp;