import { useEffect, useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";

const Employeedata = () => {
    const location = useLocation()
    const [state,setLocationState]= useState(" ")

    useEffect(()=>{
        let state = location.state
        setLocationState(state)
    },[location.state])
    
    const navigate =useNavigate();
    const handleClick =() =>{
        navigate('/Loan');
    }

    return ( 
        <div className="emp-content">
            <h1 >Employee Data</h1>
            <div className="emp-data">
		        <table > 
                    {state && (
                    <tr onChange={handleClick}>
			        <tr ><td><label>Employeee ID</label></td><td><span>{state.employeeid}</span></td></tr>
			        <tr ><td><label>Loan Amount</label></td><td>  <span>RS {state.loanamount} </span></td></tr>
			        <tr ><td><label>Monthly Take Home</label></td><td><span>RS 50000 </span></td></tr>
			        <tr ><td><label>Loan Request For</label></td><td><span>{state.reasonforloan}</span></td></tr>
			        <tr ><td><label>Loan Tenure</label></td><td><span>{state.loantenure}</span></td></tr>
			        <tr ><td><label>Service In Months</label></td><td><span> 24</span></td></tr>
                    </tr>
                    )}
		        </table>
        
            </div>
        </div>
     );
}
 
export default Employeedata;