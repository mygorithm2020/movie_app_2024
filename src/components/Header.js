import React from "react";
import './Header.css';

function Header() {
    return (
        <div>
            <div className="top_bar">
                <h1 id="home_page">MovieReview</h1>
                <ul id="header_menu_list">
                    <li className="herder_menu">메인 홈</li>
                    <li>영화 검색</li>
                    <li>영화 신청</li>                    
                    <li>로그인</li>
                    <li>마이페이지</li>
                </ul>
            </div>
            
            

        </div>
    );

}

export default Header;