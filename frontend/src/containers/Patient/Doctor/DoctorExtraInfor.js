import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import './DoctorExtraInfor.scss';
//import moment, { lang } from 'moment';
//import localization from 'moment/locale/vi';
import { LANGUAGES } from '../../../utils';
import { getScheduleDoctorByDate } from '../../../services/userService';
import { FormattedMessage } from 'react-intl';

class DoctorExtraInfor extends Component {

    constructor(props) {
        super(props);
        this.state = {  
            isShowDetailInfor: false    
        }
    }
    async componentDidMount() {
       
    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
           
        }     
    } 
    
    showHideDetailInfor =(status) =>{
        this.setState({
            isShowDetailInfor: status

        })
    }
    render() {
       let {isShowDetailInfor} =this.state;
        return (
            <div className="doctor-extra-infor-container">
               <div className="content-up">
                    

                    <div className="text-address">dc</div>
                    <div className="name-clinic">tenpk</div>
                    <div className="detail-address">note</div>


               </div>
               <div className="content-down">
                {isShowDetailInfor === false &&
                    <div className="short-infor">
                        25k.<span onClick={()=>this.showHideDetailInfor(true)}>
                            Xem chi tiết</span>
                    </div>
                }
                {isShowDetailInfor === true &&
                <>
                    <div className="title-price">gia1</div>
                    <div className="detail-infor">
                        <div className="price">
                            <span className="left">Giá Khám</span>
                            <span className="right">2500k</span>
                        </div>

                        <div className="note">
                        gia khasm bao go
                        </div>
                        
                        </div>
                    <div className="payment">hinh thuc

                    </div>
                    <div className="hide-price">
                        <span onClick={()=>this.showHideDetailInfor(false)}>
                            Ẩn bảng giá
                            </span>
                            </div>
                </>
                }

                    
                   
               </div>
               
               
               
               
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
