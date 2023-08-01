import './Styles.css'
function ContactInfo(props){
    return(
        <div className='Contact'>
            <h3 className='topel'>{props.category}</h3>
            <p className = 'botEl'>{props.info}</p>
        </div>
    )
}
export default ContactInfo;