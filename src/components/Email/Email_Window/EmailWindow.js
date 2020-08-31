import React from 'react';
import EmailNavbar from './Email_window_components/EmailNavbar'







class EmailWindow extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            active:false,
        }
    }

    render(){
        return(
            <div className = 'Email_Navbar'> 
                 <EmailNavbar/>
            </div>
        )
    }

}


export default EmailWindow;