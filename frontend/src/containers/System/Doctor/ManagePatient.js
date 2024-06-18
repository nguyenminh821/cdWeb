import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './ManagePatient.scss';
import DatePicker from '../../../components/Input/DatePicker';


class ManagePatient extends Component {

    constructor(props) {
        super(props);
        this.state = {  
           currentDate: new Date(),
        }
    }
    async componentDidMount() {
       
    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
           
        }
    } 
    
    handleOnChangeDatePicker = (date) => {
        this.setState({
            currentDate: date[0],
        })
    }
 
    render() {

     
       return (
           <div className='manage-petient-container'>
            <div className='m-p-title'>
                Quản lý bệnh nhân khám bệnh
            </div>
            <div className='manage-patient-body row'>
                <div className='col-4 form-group'>
                    <label>Chọn ngày khám</label>
                    <DatePicker
                                className='form-control'
                                onChange={this.handleOnChangeDatePicker}
                                value={this.state.currentDate}
                    />
                </div>
                <div className='col-12 table-manage-patient'>
                    <table style={{width: '100%'}}>
                        <tr>
                            <th>Name</th>
                            <th colSpan="2">Telephone</th>
                        </tr>
                        <tr>
                            <td>dafkdjhfkja</td>
                            <td>dafkdjhfkja</td>
                            <td>dafkdjhfkja</td>
                        </tr>
                    </table>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManagePatient);
