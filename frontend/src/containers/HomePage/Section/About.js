import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';


class About extends Component {

    render() {


        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Đăng ký khám bệnh và thanh toán thông minh
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400px"
                            src="https://www.youtube.com/embed/RL7HAyXWql4"
                            title="[UMC 360 độ] Đăng ký khám bệnh và thanh toán thông minh: Thuận tiện – An toàn – Tiết kiệm thời gian"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className='content-right'>
                        <p> Để được tư vấn và khám bệnh, vui lòng đăng ký tại Bệnh viện ABCDEF - 215 Hồng Bàng, phường 11, quận 5, TPHCM</p>
                        <p> Đặt lịch khám bệnh trực tuyến tại: <a href='#'>https://umc.medpro.com.vn/</a> - Hoặc tải ứng dụng: UMC- Đăng ký khám bệnh Online (App Store, Google Play)</p>
                        <p> Thời gian phát số khám bệnh từ thứ Hai đến thứ Sáu: 05h00 - 16h30, thứ Bảy: 05h00 - 11h30.</p>
                        <p> Thời gian khám bệnh từ thứ Hai đến thứ Sáu: 06h30 - 12h00 và 13h00 - 16h30, thứ Bảy: 06h30 - 11h30.</p>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
//connect: giữa react và redux
