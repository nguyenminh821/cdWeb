import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';


class HomeFooter extends Component {

    render() {


        return (
            <div className='home-footer'>
                <p>&copy; 2024 nguyenminh&votriet. More infomation, please contact us.
                    <a target="_blank" href='https://github.com/nguyenminh821/cdWeb'>&#8594; Click here &#8594;</a>
                </p>
            </div>
        );
    }

}

//map state của redux và tiêm vào react
//react lấy biến state thông qua biến state
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    //gọi đến event của redux
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
//connect: giữa react và redux
