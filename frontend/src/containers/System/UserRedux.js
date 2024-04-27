import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
class UserRedux extends Component {

    // state = {

    // }

    constructor(props){
        super(props);
        this.state ={

        }
    }
    componentDidMount() {
    }


    render() {
        return (
            <div className="user-redux-container">
                <div className="title">
                User Redux react app
                </div>
                 <div className="user-redux-body" >
                    <div>
                        Thêm mới người dung
                    </div>
                 </div>
            </div>
           
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

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
