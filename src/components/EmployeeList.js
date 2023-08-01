import EmpListItem from "./EmployeeListItem";
import './Styles.css'
function Employee(){
    return(
        <>
               <div>
                <EmpListItem className='split' picture='https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/05/23/one-piece-luffy-gear-5.jpeg' fName='James King' position='President & CEO'/>
                <EmpListItem picture='https://cdn.mos.cms.futurecdn.net/bByhky6jeMXqwxkPV9DZsg.jpg' fName='Julia Taylor' position='VIP of Marketing'/>
                <EmpListItem picture='https://m.media-amazon.com/images/I/41WXX6GQR5L._AC_UF1000,1000_QL80_.jpg' fName='John Williams' position='VP of Engineering'/>
                <EmpListItem picture='https://pyxis.nymag.com/v1/imgs/e6c/02c/cbe672af6609198720b69efd475ab5f641-avatar-last-airbender.2x.rsocial.w600.jpg' fName='Eugene Lee' position='CFO'/>
                <EmpListItem picture='https://cdn.vox-cdn.com/thumbor/R5-nGkY2x6VkW7JLda0pkAFmpT8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20089111/Switch_PaperMarioTheOrigamiKing_artwork_04.jpg' fName='Ray Moore' position='VP of Sales'/>
                <EmpListItem picture='https://cms-cdn.thesolesupplier.co.uk/2022/03/aj61.jpg' fName='Paul Jones' position='QA Manager'/>
               </div>
        </>
    )
}
export default Employee;