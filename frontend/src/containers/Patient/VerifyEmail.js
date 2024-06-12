import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import {postVerifyBookAppoinment} from "../../services/userService";
import HomeHeader from '../HomePage/HomeHeader';
import './VerifyEmail.scss' ;
class VerifyEmail extends Component {

    constructor(props) {
        super(props);
        this.state = {  
           statusVerify: false,
           errCode: 0
        }
    }
    async componentDidMount() {
        if(this.props.location && this.props.location.search){
            let urlParams = new URLSearchParams(this.props.location.search);
            let token = urlParams.get('token');
            let doctorId = urlParams.get('doctorId');
            let res = await postVerifyBookAppoinment({
                token:token,
                doctorId:doctorId
            })

            if (res && res.errCode === 0) {
                this.setState({
                    statusVerify: true,
                    errCode:res.errCode
                })
            }else{
                this.setState({
                    statusVerify: true,
                    errCode:res  && res.errCode ? res.errCode: -1
                })
               
            }
           //console.log('in ra token',token,doctorId)
           
        }
        //console.log('check email',this.props)
        
       
        if (this.props.match && this.props.match.params ) {
      
        }
       
    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
           
        }
    } 
    
 
    render() {
        let { language } = this.props;
        let {statusVerify,errCode} = this.state;
        console.log('check stafdf',this.state)
       return (
       <>
       <HomeHeader/>
       <div className="verify-email-container">
           

       
       {statusVerify === false ?
        <div>
            Loading data...

        </div>
        :
        <div >
            {+errCode === 0 ?
            <div  className="infor-booking"> <FormattedMessage id="patient.verify.checksuceed"/></div> :
            
            <div className="infor-booking"> <FormattedMessage id="patient.verify.checkerr"/></div>
        }
        </div>

    }
       {/* <div>
       <FormattedMessage id="patient.verify.check"/>
                
           </div> */}
            </div>
        </>
           
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
