import {useState} from 'react';
import './Employeedata'
import { Link } from 'react-router-dom';
const Loan = () => {
    
		const[content,setContent] = useState({
			employeeid: "",loanamount: "",loantenure: "",reasonforloan: ""
		});

		let name,value;

		const handleInputs = (e) => {
			console.log(e);
			name = e.target.name;
			value = e.target.value;

			setContent({...content,[name]:value});
		}
    return ( 
		<div className="data">   
			<h1>Loan Application Form</h1>
			<div className="form-data">
				<div className="input"> 
					<label >Employee ID </label><input type="number" placeholder="Enter Employee ID" 
					 name="employeeid"  value={content.employeeid} onChange={handleInputs} required></input>
		
					<label >Loan Amount</label><input type="number" placeholder="Enter Loan Amount" 
					name="loanamount"  value={content.loanamount} onChange={handleInputs} required></input>
				
					<label >Loan Tenure</label><input type="number" placeholder="Enter Loan Tenure" 
					name="loantenure"  value={content.loantenure} onChange={handleInputs} required></input>
								
					<label >Reason For Loan</label><textarea  name="reasonforloan"  
					value={content.reasonforloan} onChange={handleInputs}></textarea>
				</div>		
				<div className="button">
                    <Link to='/employeedata' state={content}>
					<button type="submit">Apply for Loan</button></Link>
				</div>		
			</div>
	    </div>
    );   
}
export default Loan;