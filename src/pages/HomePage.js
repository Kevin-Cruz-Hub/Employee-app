import Hp from "../components/HP";
import Header from "../components/Header";
import ContactInfo from '../components/Contact'
import '../components/Styles.css'
function HomePage(){
    return(
        <div>
            <div className='Employee'>
                <Header title='Employee'/>
                <Hp picture='https://cdn.mos.cms.futurecdn.net/bByhky6jeMXqwxkPV9DZsg.jpg' fName='Julia Taylor' position='VIP of Marketing'/> 
                <ContactInfo category='Call Office' info='781-000-0002'/>           
                <ContactInfo category='Call Mobile' info='617-000-0002'/>           
                <ContactInfo category='SMS' info='617-000-0002'/>           
                <ContactInfo category='Email' info='jtaylor@fakemail.com'/>           
            </div>
           
        </div>
    )
}

export default HomePage;