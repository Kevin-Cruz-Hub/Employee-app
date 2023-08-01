import Header from '../components/Header'
import SearchBar from '../components/SearchBar';
import Employee from '../components/EmployeeList';
import '../components/Styles.css'
function EmployeePage(){
    return(
        <div>
            <div className='Employees'>
                <Header title='Employee Dictionary'/>
                <SearchBar className='change'/>
                <hr/>
                <Employee />
            </div>
           
        </div>
    )
}

export default EmployeePage;