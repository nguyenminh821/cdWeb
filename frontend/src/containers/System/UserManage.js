import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers, createNewUserService, deleteUserService,editUserService } from '../../services/userService';
import { bind } from 'lodash';
import ModalUser from './ModalUser';
import { emitter } from '../../utils/emitter';
import ModalEditUser from './ModalEditUser';

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            userEdit: {}
        }
    }

    async componentDidMount() {
        // let response = await getAllUsers('ALL');
        // if (response && response.errCode === 0) {
        //     this.setState({
        //         arrUsers: response.users
        //     })
        // }
        await this.getAllUsersFromReact();
    }



    getAllUsersFromReact =async() =>{
        let response = await getAllUsers('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }

    }
    handleAddNewUser =() => {
        this.setState({
            isOpenModalUser: true,
        })
       // alert('click me')


    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })}

    toggleUserEditModal    = ()=>{
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser,
        })
    }

        createNewuser =async(data) => {
           try {
           let response =await createNewUserService(data);
           if (response && response.errCode !==0) {
            alert(response.errMessage)
            
           }else{
            await this.getAllUsersFromReact();
            this.setState({
                isOpenModalUser:false
            })
            emitter.emit('EVENT_CLEAR_MODAL_DATA')
           }
           //console.log('re:',response)
        } catch (e) {
            console.log(e)
            
           }
            //createNewUser(data);
            //console.log('check data from child:',data)
        }

    /** Life cycle
     * Run component:
     * 1. Run construct -> init state (biến)
     * 2. Did mount: gọi api, gán giá trị cho biến state : born ;unmount
     * 3. Render(tự cập nhật bản thân re- render)
     * render thì có thể nhiều lần nhưng didmount thì chỉ 1 lần
     * đó là vòng đời của react
     * 
     */
        handlDeleteUser=async(user)=>{
            console.log('click delete',user)
            try {
                let res =await deleteUserService(user.id);
                //console.log(res)
                if (res && res.errCode ===0) {
                    await this.getAllUsersFromReact();
                    
                } 
                else {
                    alert(res.errMessage)
                }

                
            } catch (e) {
                console.log(e);
            }
        }


        handleEditUser = (user) =>{
            console.log('check edit',user);
            this.setState({
                isOpenModalEditUser:true,
                userEdit: user
            })
        }
        doEditUser =async(user)=>{
            try {
                let res =await editUserService(user);
                if(res && res.errCode ===0){
                    this.setState({
                        isOpenModalEditUser:false
                    })
                   await this.getAllUsersFromReact()
                }
                else{
                    alert(res.errCode)
                }
            } catch (e) {
                console.log(e)
            }

           
            //if
            //console.log('click click',res)
        }
    render() {
        let arrUsers = this.state.arrUsers;
        console.log(arrUsers)
        //properties ; nested
        return (
            <div className='users-container'>
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFromParent={this.toggleUserModal}
                    //test={'abc'}
                    createNewuser={this.createNewuser}
                
                
                />
                {this.state.isOpenModalEditUser &&
                <ModalEditUser
                     isOpen={this.state.isOpenModalEditUser}
                     toggleFromParent={this.toggleUserEditModal}
                     //test={'abc'}
                     //createNewuser={this.createNewuser}
                     currentUser={this.state.userEdit}
                     editUser={this.doEditUser}
                 
                />}
                <div className="title text-center">Manage users</div>
                <div className="user-table mt-3 mx-1">
                    <button className="btn btn-primary px-3" 
                    
                    onClick={()=>this.handleAddNewUser()}
                    ><i className="fas fa-plus"></i> Add new user </button>
                </div>
                <div className='user-table mt-3 mx-1'>
                    <table id="customers">
                    <tbody>
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Actions</th>
                        </tr>
                        {arrUsers && arrUsers.map((item, index) => {
                            return (
                                <tr>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>{item.phoneNumber}</td>
                                    <td>
                                        <button className="btn-edit" onClick={()=>this.handleEditUser(item)}><i className="fas fa-pencil-alt"></i></button>
                                        <button className="btn-delete" onClick={()=>this.handlDeleteUser(item)}><i className="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                    </table>
                </div>
            </div >

        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
