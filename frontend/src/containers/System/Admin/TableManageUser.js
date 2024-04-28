import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageUser.scss';
//import UserRedux from './UserRedux';
import * as actions from "../../../store/actions"
//import { getAllUsers, createNewUserService, deleteUserService,editUserService } from '../../services/userService';
//import { bind } from 'lodash';
//import ModalUser from './ModalUser';
//import { emitter } from '../../utils/emitter';
//import ModalEditUser from './ModalEditUser';

class TableManageUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usersRedux:[]
            
        }
    }
componentDidMount(){
    this.props.fetchUserRedux();
}

componentDidUpdate(prevProps, prevState, snapshot){
    if(prevProps.listUsers !== this.props.listUsers){
        this.setState({
            usersRedux: this.props.listUsers
        })
    }
}
    
handleDeleteUser =(user)=>{
    this.props.deleteAUserRedux(user.id);
    
}

handleEditUser =(user) =>{
    
    this.props.handleEditUserFromParentKey(user)
}
    render() {
        console.log('check all user;', this.props.listUsers);
        console.log('check all user de;', this.state.usersRedux)
        let arrUsers = this.state.usersRedux;
        return (
        
                    <table id="TableManageUser">
                    <tbody>
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Actions</th>
                        </tr>

                        {arrUsers && arrUsers.length > 0 &&
                        arrUsers.map((item, index)=>{
                            return(
                                <tr key={index}>
                                <td>{item.email}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.address}</td>
                                <td>{item.phoneNumber}</td>
                                <td>
                                    <button 
                                    onClick={()=> this.handleEditUser(item)}
                                    className="btn-edit" ><i className="fas fa-pencil-alt"></i></button>
                                    <button
                                    onClick={()=> this.handleDeleteUser(item)}
                                    className="btn-delete" ><i className="fas fa-trash"></i></button>
                                </td>
                                </tr>
                       
                            )
                        }
                        ) }
                       
                               
                    </tbody>
                    </table>
              
        );
    }

}

const mapStateToProps = state => {
    return {
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux: ()=> dispatch(actions.fetchAllUsersStart()),
        deleteAUserRedux: (id)=> dispatch(actions.deleteAUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
