

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';

class ModalUser extends Component {

   constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
      firstName:'',
      lastName:'',
      address:'',
      phoneNumber:''

    }
    this.listenToEmitte();
   }
   listenToEmitte(){
    emitter.on('EVENT_CLEAR_MODAL_DATA',() =>{
      //reset state
      this.setState({
        email:'',
      password:'',
      firstName:'',
      lastName:'',
      address:'',
      phoneNumber:''
      })
      //console.log('list',data)
    })
   }//muoon nghe event dùng emitter.on, fire nó dùng emitter.emit


    componentDidMount() {
      //console.log('mounting modal')
    }

    toggle =() => {
      //alert('me toggle')
      this.props.toggleFromParent();
    }

    handleOnchageInput = (event,id) =>{
      //bad code.modify state
      /**
       * this.state = {
        email:'',
        password:'',
        firstName:'',
        lastName:'',
        address:'',
        phoneNumber:''

          }
          this.state.email === this.state["email"]
       * 
       */
      

      //bad code.modify state
      /**
       * dấu ...này ỏ cái this.state là để copy y chang cái this.state ỏ dưới
       * this.state = {
        email:'',
        password:'',
        firstName:'',
        lastName:'',
        address:'',
        phoneNumber:''

          }
          this.state.email === this.state["email"]
       * 
       */
    //       this.state[id] = event.target.value;
    //   this.setState({
    //     ...this.state
    //   },()=> {console.log('check bad state',this.state)
    // })

      //good code

      let copyState = {...this.state};
      copyState[id] = event.target.value;
      this.setState({
        ...copyState
      }
    //   ,() =>{console.log('check good state:',this.state)
    // }
  );
     // console.log('copystate',copyState)
      //console.log('envent 1:' ,event.target.value, id)

      
    }
    checkValideInput =()=> {
      let isValid =true;
      let arrInput = ['email', 'password','firstName','lastName','address','phoneNumber'];
      for (let i = 0; i< arrInput.length; i++) {
        console.log('check inside loop', this.state[arrInput[i]],arrInput[i])
            if (!this.state[arrInput[i]]) {
              isValid =false;
              alert('Missing parameter:'+arrInput[i]);
              break;
              
            }
       
      }
      return isValid;

    }

    handleAddNewUser=() => {
      let isValid = this.checkValideInput();
      if (isValid === true) {
        //call api crreate modal
        //console.log('check prop child',this.props)
        this.props.createNewuser(this.state);
        //console.log('data modal',)
        
      }
      //  else {
        
      // }
      //console.log('data modal',this.state)

    }



    render() {
      
     //console.log('check child prop',this.props);
      //console.log('check child open modal', this.props.isOpen)
        return (
            <Modal 
            isOpen={this.props.isOpen} 
            toggle={() =>{this.toggle()}} 
             className={'modal-user-container'}
             size="lg"
             centered
             >
        <ModalHeader toggle={() =>{this.toggle()}}>create a new user</ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
          
          <div className="input-container">
                <label>Email</label>
                <input 
                type="text"  
                onChange={(event)=> {this.handleOnchageInput(event, "email")}}
                value={this.state.email}
                
                />
              </div>

              <div className="input-container">
                <label>Password</label>
                <input type="password"  
                onChange={(event)=> {this.handleOnchageInput(event, "password")}} 
                
                value={this.state.password}
                />

             

          </div>
          <div className="input-container">
                <label>First name</label>
                <input type="text"  
                onChange={(event)=> {this.handleOnchageInput(event, "firstName")}}
                

                value={this.state.firstName}
                />
                
             

          </div>
          <div className="input-container">
                <label>Last name</label>
                <input type="text" 
                onChange={(event)=> {this.handleOnchageInput(event, "lastName")}}
                value={this.state.lastName}
                />
                
             

          </div>
          <div className="input-container max-width-input">
                <label>Adress</label>
                <input type="text" onChange={(event)=> 
                  {this.handleOnchageInput(event, "address")}}
                  value={this.state.address}
                  />
                
             

          </div>
          <div className="input-container max-width-input">
                <label>Phone number</label>
                <input type="number" 
                onChange={(event)=> {this.handleOnchageInput(event, "phoneNumber")}}
                value={this.state.phoneNumber}
                />
                
             

          </div>
            
            
             

         

          </div>
        </ModalBody>
        <ModalFooter>
          <Button 
          color="primary" 
          className="px-3" 
          onClick={() =>{this.handleAddNewUser()}}>
          Add new
          </Button>{' '}
          <Button 
          color="secondary"
          className="px-3" 
          onClick={() =>{this.toggle()}}>
           Close
          </Button>
        </ModalFooter>
      </Modal>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);


