import React from 'react'
import AdminIcon from '../AdminIcon/AdminIcon';
import InputComponent from '../InputComponent/InputComponent';
import { AiOutlineMail,AiFillEye} from 'react-icons/ai';

class FormComponent extends React.Component {
   
    constructor() {
        super();
        this.state = {
            userEmail: '',
            userPass:''
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    // Handle Input
    
    handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })
    }


    // Handle Submit

    handleSubmit = (even) => {
        
        even.preventDefault();
        
        console.log(this.state);
        this.setState({
            userEmail: '',
            userPass:''
        })

     }

    render() {
        const { userEmail, userPass } = this.state;
        return (
            <div className="Wrapper">
                <AdminIcon/>
                <form onSubmit={this.handleSubmit}>
                    <InputComponent type="email" name="userEmail" value={userEmail}
                        required="required" autoComplete="off" handleInput={this.handleInput}
                        placeholder="Email"
                    />
                    <AiOutlineMail className="EmailIcon"/>
                    <InputComponent type="password" name="userPass" value={userPass}
                        required="required" autoComplete="off" handleInput={this.handleInput}
                        placeholder="Password"
                    />
                    <AiFillEye className="PasswordIcon"/>
                    <InputComponent type="submit" value="Login"/>
                </form>
            </div>
        )
  }

}

export default FormComponent
